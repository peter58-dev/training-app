import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewProgramComponent } from '../components/new-program/new-program.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private modalCtrl:ModalController) {}


async openNewProgramModal() {
const modal = await this.modalCtrl.create({
  component: NewProgramComponent
})
modal.present()
}

}
