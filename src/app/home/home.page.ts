import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  constructor(private firestore: Firestore) {}

  ngOnInit() {
    this.testFirestoreWrite();
  }

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
}
