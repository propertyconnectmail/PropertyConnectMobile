import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule]
})
export class SplashPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Optionally, you can navigate to the next page after a delay:
    // setTimeout(() => { this.router.navigate(['/selection']); }, 2000);
  }

}
