import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-client-payment-page',
  templateUrl: './client-payment-page.page.html',
  styleUrls: ['./client-payment-page.page.scss'],
  standalone: true,
  imports: [IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClientPaymentPagePage implements OnInit {

  cards = [
    {
      bankName: 'Sampath Bank',
      maskedNumber: '•••• 3567'
    },
    {
      bankName: 'Commercial Bank',
      maskedNumber: '•••• 7432'
    },
    {
      bankName: 'HNB Bank',
      maskedNumber: '•••• 9214'
    }
  ];

  selectedCardIndex: number = 0;
  isLoadingCards: boolean = true;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Simulate loading delay for shimmer effect
    setTimeout(() => {
      this.isLoadingCards = false;
    }, 1500);
  }

  goBack() {
    this.navCtrl.back();
  }

  selectCard(index: number) {
    this.selectedCardIndex = index;
  }

  proceedToPay() {
    const selectedCard = this.cards[this.selectedCardIndex];
    console.log('Proceeding to pay with:', selectedCard);
    // Add your real payment logic here
  }

}
