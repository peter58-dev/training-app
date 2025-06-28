import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  exercises = signal<any[]>([])


  constructor() { }
}
