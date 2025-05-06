import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-client-payment-success',
  templateUrl: './client-payment-success.page.html',
  styleUrls: ['./client-payment-success.page.scss'],
  standalone: true,
  imports: [IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClientPaymentSuccessPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
