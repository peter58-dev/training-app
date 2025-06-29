import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseService } from 'app/services/exercise.service';

@Component({
  standalone:false,
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit,OnDestroy {
  programId:string | undefined

  readonly exercises = this.exerciseService.exercises

  constructor(private exerciseService : ExerciseService,
    private route:ActivatedRoute

  ) { }


  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
if (id) {
  this.programId = id;
  this.exerciseService.initExerciseListener(this.programId);
}
  }

   ngOnDestroy(): void {
   this.exerciseService.stopExerciseListener()
  }
}
