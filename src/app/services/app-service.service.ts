import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

export interface TrainingProgram {
  id: string //autogenererad,
  namn:string
}
@Injectable({
  providedIn: 'root',
})
export class AppService {
private firestore = inject(Firestore);

  constructor() {}
}
