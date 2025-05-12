import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule]
})
export class SplashPage implements OnInit {

   constructor(private navCtrl: NavController) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.navCtrl.navigateRoot(['/selection']); // this will be blocked by firstLaunchGuard on later launches
    }, 2000);
  }

}
