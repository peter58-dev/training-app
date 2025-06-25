import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AppService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-new-program',
  templateUrl: './new-program.component.html',
  styleUrls: ['./new-program.component.scss'],
  standalone: false,
})
export class NewProgramComponent implements OnInit {
  newWorkoutForm!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.newWorkoutForm = this.fb.group({
      namn: ['', Validators.required],
    });
  }

  spara() {
    if (this.newWorkoutForm.invalid) return;

    const namn = this.newWorkoutForm.value.namn;

    this.appService
      .addProgram({ namn, createdAt: new Date() })

      .then(() => {
        this.newWorkoutForm.reset(); //töm formuläret
        this.modalCtrl.dismiss();
      })
      .catch((e) => {
        console.error('fel vid sparande', e);
      });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
