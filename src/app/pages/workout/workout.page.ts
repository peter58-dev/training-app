import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseService } from 'app/services/exercise.service';

@Component({
  standalone:false,
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit,OnDestroy {
  readonly exercises = this.exerciseService.exercises

  constructor(private exerciseService : ExerciseService) { }


  ngOnInit() {
  }

   ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
