import { Injectable, signal } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
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
    const list: Exercise[] = snapshot.docs.map(
      doc => ({
        id:doc.id,
        ...(doc.data() as Omit <Exercise,'id'>)
      })
    )
    this.exercises.set(list)
  })
}


stopExerciseListener(){
  if(this.unsubscribeExercises){
    this.unsubscribeExercises()
  }
}

async deleteExercise(programId:string, exerciseId:string): Promise<void>{
  const docRef =doc(this.firestore,`trainingPrograms/${programId}/exercises/${exerciseId}`)
  await deleteDoc(docRef)
}

}
