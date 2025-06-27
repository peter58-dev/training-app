import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { NewProgramComponent } from '../components/new-program/new-program.component';
import { PauseCountdownComponent } from '../components/pause-countdown/pause-countdown.component';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage,NewProgramComponent, PauseCountdownComponent]
})
export class HomePageModule {}
