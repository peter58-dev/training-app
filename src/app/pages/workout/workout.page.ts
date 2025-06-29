import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit,OnDestroy {

  constructor() { }


  ngOnInit() {
  }

   ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
