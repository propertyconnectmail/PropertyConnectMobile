import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonInput } from '@ionic/angular/standalone';


@Component({
  selector: 'app-client-change-password',
  templateUrl: './client-change-password.page.html',
  styleUrls: ['./client-change-password.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class ClientChangePasswordPage implements OnInit {

  passwordForm: FormGroup;
  isLoading = true;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500); // Simulate shimmer loading
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('Submitted data:', this.passwordForm.value);
      // Handle password update here
    }
  }

  goBack() {
    // Implement navigation logic (e.g., this.navCtrl.back() or router.navigate)
    window.history.back();
  }

}
