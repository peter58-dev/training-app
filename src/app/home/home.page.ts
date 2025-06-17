import { Component } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private firestore: Firestore) {}

  async testFirestoreWrite() {
    // Ändra från `async function` till metod
    try {
      const docRef = await addDoc(
        collection(this.firestore, 'testCollection'),
        {
          message: 'Firebase fungerar!',
          timestamp: new Date(),
        }
      );
      console.log('Dokument skapat med ID:', docRef.id);
    } catch (error) {
      console.error('Fel vid Firestore-skrivning:', error);
    }
  }

  async testFirestoreRead() {
    try {
      const querySnapshot = await getDocs(
        collection(this.firestore, 'testCollection')
      );
      querySnapshot.forEach((doc) => {
        console.log('Dokument:', doc.id, '=>', doc.data());
      });
    } catch (error) {
      console.error('Fel vid Firestore-läsning:', error);
    }
  }


openNewProgramModal() {
console.log('öppnar modal')
}

}
