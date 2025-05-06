import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
})
export class SelectionPage implements OnInit{

  isLoading = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Simulate shimmer delay
    setTimeout(() => {
      this.isLoading = false;
    }, 1800); // Adjust time as needed
  }

  selectRole(role: 'client' | 'professional') {
    if (role === 'client') {
      this.router.navigate(['/onboarding-client']);
    } else {
      this.router.navigate(['/onboarding-professional']);
    }
  }

}

