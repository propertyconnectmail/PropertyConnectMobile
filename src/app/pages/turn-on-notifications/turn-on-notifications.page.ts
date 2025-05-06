import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-turn-on-notifications',
  templateUrl: './turn-on-notifications.page.html',
  styleUrls: ['./turn-on-notifications.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule]
})
export class TurnOnNotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
