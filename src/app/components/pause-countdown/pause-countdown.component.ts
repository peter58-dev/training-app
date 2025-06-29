import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-pause-countdown',
  templateUrl: './pause-countdown.component.html',
  styleUrls: ['./pause-countdown.component.scss'],
})
export class PauseCountdownComponent implements OnInit {
 @Input() pauseSeconds: number = 90


minuter:string ='01'
sekunder:string = '90'
private timerIntervall: number | undefined;  // 👈 korrekt typ
  private timeoutRef: number | undefined;      // 👈 om du vill lägga till ljudfördröjning e.dyl.

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
     this.updateTimedDisplay();
    this.timerIntervall = window.setInterval(() => this.pauseDecrease(), 1000);
  }
 pauseDecrease(): void {
    if (this.pauseSeconds > 1) {
      this.pauseSeconds--;
      this.updateTimedDisplay();
    } else {
      clearInterval(this.timerIntervall);

      this.pauseSeconds = 0
      this.updateTimedDisplay()

      this.timeoutRef=window.setTimeout(()=> {
        this.modalCtrl.dismiss()
      }, 250)


     /*  // Ljud + eventuell fördröjning innan modal stängs
      this.playEndSound();

      // Om du vill vänta t.ex. 1 sekund efter ljud:
      this.timeoutRef = window.setTimeout(() => this.modalCtrl.dismiss(), 1000);

      // ...eller direkt: this.modalCtrl.dismiss(); */
    }
  }



  updateTimedDisplay() {
    const mins = Math.floor(this.pauseSeconds/60)
    const secs = this.pauseSeconds % 60

    this.minuter=this.pad(mins)
    this.sekunder=this.pad(secs)
  }

    pad(tid:number):string {
      return tid.toString().padStart(2, '0')
    }
    close() {
    clearInterval(this.timerIntervall);
    clearTimeout(this.timeoutRef);
    this.modalCtrl.dismiss();
  }

  ngOnDestroy() {
    clearInterval(this.timerIntervall);
    clearTimeout(this.timeoutRef);
  }

}
