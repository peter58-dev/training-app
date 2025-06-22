import { inject, Injectable, signal } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  onSnapshot,
  updateDoc,
} from '@angular/fire/firestore';

export interface TrainingProgram {
  id: string; //autogenererad,
  namn: string;
}
@Injectable({
  providedIn: 'root',
})
export class AppService {
  // Signal som innehåller listan
  trainingPrograms = signal<any[]>([]);

  private unsubscribePrograms: () => void;

  constructor() {
    const colRef = collection(this.firestore, 'trainingPrograms');

    // Firebase lyssnar i realtid och uppdaterar signalen direkt
    onSnapshot(colRef, (snapshot) => {
      const workouts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.trainingPrograms.set(workouts);
    });
  }

  async addProgram(namn: string) {
    const colRef = collection(this.firestore, 'trainingPrograms');
    await addDoc(colRef, {
      namn,
      createdAt: new Date(),
    });
  }

  async deleteProgram(id: string) {
    const docRef = doc(this.firestore, 'trainingPrograms', id);
    await deleteDoc(docRef);
  }

  async updateProgram(id: string, namn: string) {
    const docRef = doc(this.firestore, 'trainingPrograms', id);
    await updateDoc(docRef, { namn });
  }
}
