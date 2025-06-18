import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-program',
  templateUrl: './new-program.component.html',
  styleUrls: ['./new-program.component.scss'],
  standalone:false
})
export class NewProgramComponent  implements OnInit {
newWorkoutForm!: FormGroup;

  constructor(
       private modalCtrl:ModalController,
       private fb: FormBuilder

) { }

  ngOnInit() {
    this.newWorkoutForm=this.fb.group({
      namn:['', Validators.required]
    })
  }
  cancel() {
    return this.modalCtrl.dismiss(null,'cancel')

}

}
