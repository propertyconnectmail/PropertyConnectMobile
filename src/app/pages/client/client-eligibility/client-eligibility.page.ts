import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-client-eligibility',
  templateUrl: './client-eligibility.page.html',
  styleUrls: ['./client-eligibility.page.scss'],
  standalone: true,
  imports: [IonContent,CommonModule, FormsModule]
})
export class ClientEligibilityPage implements OnInit {

  monthlyIncome: number = 0;
  existingEMI: number = 0;
  interestRate: number = 14; // default annual interest rate
  tenure: number = 20; // default in years
  eligibleLoan: number = 0;
  calculatedEMI: number = 0;
  showResults: boolean = false;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  prev() {
    this.navCtrl.navigateBack('/client-profile');
  }

  calculateEligibility() {
    const maxEmi = this.monthlyIncome * 0.4 - this.existingEMI;
    const monthlyInterest = this.interestRate / 12 / 100;
    const totalMonths = this.tenure * 12;

    const factor = (Math.pow(1 + monthlyInterest, totalMonths) - 1) / (monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths));
    const loan = maxEmi * factor;

    this.eligibleLoan = Math.round(loan);
    this.calculatedEMI = Math.round(maxEmi);
    this.showResults = true;
  }

}
