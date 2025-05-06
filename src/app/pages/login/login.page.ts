import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCheckbox } from '@ionic/angular/standalone';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonCheckbox, CommonModule, FormsModule, IonContent, ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup | any;
  loading = true;
  showPassword = false;
  rememberMe = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder, private router: Router, private location : Location) {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1200); // simulate shimmer
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      setTimeout(() => {
        this.isSubmitting = true;
        // Proceed with login request or call your API
      }, 200);
      // Simulate API delay
      setTimeout(() => {
        console.log('Login data:', this.loginForm.value);
        this.isSubmitting = false;
      }, 1500);
    } else {
      this.email?.markAsTouched();
      this.password?.markAsTouched();
    }
  }

  prev(){
    this.location.back();
  }

}


// onLogin() {
//   if(this.loginForm.valid){
//     setTimeout(() => {
//       this.isSubmitting = true;
//       // Proceed with login request or call your API
//     }, 200);
//     if (this.loginForm.valid) {
//       console.log(this.loginForm.value);
//     } else {
//       this.email?.markAsTouched();
//       this.password?.markAsTouched();
//     }

//     // Simulate API delay
//     setTimeout(() => {
//       console.log('Login data:', this.loginForm.value);
//       this.isSubmitting = false;
//     }, 1500);
//   }else {

//   }
// }