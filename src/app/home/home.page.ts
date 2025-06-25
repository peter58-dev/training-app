import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewProgramComponent } from '../components/new-program/new-program.component';
import { AppService } from '../services/app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit, OnDestroy {
  programs = this.appService.trainingPrograms;
  constructor(
    private modalCtrl: ModalController,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.initTrainingProgramListener();
  }

  async openNewProgramModal() {
    const modal = await this.modalCtrl.create({
      component: NewProgramComponent,
    });
    modal.present();
  }
  ngOnDestroy(): void {
    this.appService.stopTrainingProgramsListener();
  }
}
