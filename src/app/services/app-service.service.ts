import { Injectable, signal, WritableSignal } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Unsubscribe } from 'firebase/firestore';

export interface TrainingProgram {
  id: string //autogenererad,
  namn:string
}
@Injectable({
  providedIn: 'root',
})
export class AppService {
// signal to store list of training programs
 public trainingPrograms: WritableSignal<TrainingProgram[]>=signal([])

  // variable for unsubscribe function for real-time listening
  private unsubscribeProgramListener:Unsubscribe | null = null


  constructor(private firestore:Firestore) {}
}
