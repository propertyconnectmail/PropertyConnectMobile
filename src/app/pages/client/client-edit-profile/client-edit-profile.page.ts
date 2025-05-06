import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-client-edit-profile',
  templateUrl: './client-edit-profile.page.html',
  styleUrls: ['./client-edit-profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('staggerFields', [
      transition(':enter', [
        query('.field-group, .update-btn', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ]),
      ]),
    ]),
  ]
})
export class ClientEditProfilePage implements OnInit {

  isLoading = true;
  showCheckmark = true;

  ngOnInit() {
    // Simulate shimmer loading
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  goBack() {
    // You can add your navigation logic here
    window.history.back();
  }
}
