import { Injectable, signal } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  exercises = signal<any[]>([])
  private unsubscribeExercises: (() => void) | undefined


  constructor(private firestore: Firestore) { }
}
