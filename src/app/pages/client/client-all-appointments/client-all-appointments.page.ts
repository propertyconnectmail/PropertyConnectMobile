import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonIcon, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-client-all-appointments',
  templateUrl: './client-all-appointments.page.html',
  styleUrls: ['./client-all-appointments.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClientAllAppointmentsPage {

  selectedTab: string = 'upcoming'; // default tab
  isLoading = true;
  skeletonArray = Array(3); // show 3 skeletons
  appointments: any[] = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.appointments = [
        {
          image: 'assets/images/doctor1.png',
          name: 'Dr. Babe Didrikson',
          specialization: 'Dental Specialist',
          date: 'Sunday, 12 June',
          time: '11:00 - 12:00 AM',
        },
        {
          image: 'assets/images/doctor2.png',
          name: 'Dr. Joseph Brostito',
          specialization: 'Dental Specialist',
          date: 'Sunday, 12 June',
          time: '11:00 - 12:00 AM',
        },
        {
          image: 'assets/images/doctor3.png',
          name: 'Dr. Bessie Coleman',
          specialization: 'Dental Specialist',
          date: 'Sunday, 12 June',
          time: '11:00 - 12:00 AM',
        },
        {
          image: 'assets/images/doctor3.png',
          name: 'Dr. Bessie Coleman',
          specialization: 'Dental Specialist',
          date: 'Sunday, 12 June',
          time: '11:00 - 12:00 AM',
        },
        {
          image: 'assets/images/doctor3.png',
          name: 'Dr. Bessie Coleman',
          specialization: 'Dental Specialist',
          date: 'Sunday, 12 June',
          time: '11:00 - 12:00 AM',
        },
        {
          image: 'assets/images/doctor3.png',
          name: 'Dr. Bessie Coleman',
          specialization: 'Dental Specialist',
          date: 'Sunday, 12 June',
          time: '11:00 - 12:00 AM',
        },
        {
          image: 'assets/images/doctor3.png',
          name: 'Dr. Bessie Coleman',
          specialization: 'Dental Specialist',
          date: 'Sunday, 12 June',
          time: '11:00 - 12:00 AM',
        }
      ];
    }, 2000); // simulate 2s loading
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
