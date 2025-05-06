import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.page.html',
  styleUrls: ['./client-profile.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClientProfilePage {

  loading = true;

  profileOptions = [
    { label: 'Edit Profile', icon: 'assets/icons/edit.svg' },
    { label: 'Favorite', icon: 'assets/icons/heart.svg' },
    { label: 'Payment', icon: 'assets/icons/payment.svg' },
    { label: 'Settings', icon: 'assets/icons/settings.svg' },
    { label: 'Help and Support', icon: 'assets/icons/help.svg' },
    { label: 'Terms and Conditions', icon: 'assets/icons/terms.svg' },
  ];

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 1500); // Simulate loading
  }

  onOptionClick(item: any) {
    console.log('Clicked:', item.label);
    // Navigate based on item.label
  }

  onLogout() {
    console.log('Logout clicked');
    // Implement logout
  }

}












// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';

// @Component({
//   selector: 'app-client-profile',
//   templateUrl: './client-profile.page.html',
//   styleUrls: ['./client-profile.page.scss'],
//   standalone: true,
//   imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
// })
// export class ClientProfilePage {

//   isLoading = true;

//   user = {
//     name: 'Shevon Perera',
//     phone: '+98-332-32-23',
//     profileImage: 'assets/images/user-profile.jpg',
//   };

//   profileItems = [
//     { label: 'Edit Profile', icon: 'assets/icons/edit.svg', route: '/edit-profile' },
//     { label: 'Favorite', icon: 'assets/icons/heart.svg', route: '/favorites' },
//     { label: 'Payment', icon: 'assets/icons/payment.svg', route: '/payment' },
//     { label: 'Settings', icon: 'assets/icons/settings.svg', route: '/settings' },
//     { label: 'Help and Support', icon: 'assets/icons/help.svg', route: '/help' },
//     { label: 'Terms and Conditions', icon: 'assets/icons/shield.svg', route: '/terms' },
//   ];

//   ngOnInit() {
//     setTimeout(() => {
//       this.isLoading = false;
//     }, 1500); // Simulates shimmer load
//   }

//   navigateTo(route: string) {
//     // Add your routing logic here
//   }

//   logout() {
//     // Implement logout logic here
//   }

// }
