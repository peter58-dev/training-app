import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-program',
  templateUrl: './new-program.component.html',
  styleUrls: ['./new-program.component.scss'],
  standalone:false
})
export class NewProgramComponent  implements OnInit {
newWorkoutForm!: FormGroup;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}
  cancel() {
    return this.modalCtrl.dismiss(null,'cancel')

}

}
