import { Injectable, signal } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, onSnapshot } from 'firebase/firestore';
import { Exercise } from 'model/app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  exercises = signal<Exercise[]>([])
  private unsubscribeExercises: (() => void) | undefined


  constructor(private firestore: Firestore) { }


initExerciseListener(programId:string) {
  const colRef = collection(this.firestore,`trainingPrograms/${programId}/exercises`)
  this.unsubscribeExercises=onSnapshot(colRef,(snapshot)=> {
    const list = snapshot.docs.map(
      doc => ({
        id:doc.id,
        ...(doc.data() as {namn: string, sets: any[]})
      })
    )
    this.exercises.set(list)
  })
}


}
