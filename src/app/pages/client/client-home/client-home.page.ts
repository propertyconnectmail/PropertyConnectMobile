import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.page.html',
  styleUrls: ['./client-home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class ClientHomePage implements OnInit {

  constructor() { }

  categories = [
    { name: 'Lawyer', image: '../../../../assets/category.png' },
    { name: 'Valuer', image: '../../../../assets/category.png' },
    { name: 'Agent', image: '../../../../assets/category.png' },
    { name: 'Consultant', image: '../../../../assets/category.png' }
  ];

  lawyers = [
    {
      name: 'Reena Paul',
      image: '../../../../assets/proff picture.png',
      rating: 4.9,
      reviews: 200
    },
    {
      name: 'Sanjay Rao',
      image: '../../../../assets/proff picture.png',
      rating: 4.7,
      reviews: 156
    },
    {
      name: 'Tanvi Joshi',
      image: '../../../../assets/proff picture.png',
      rating: 4.8,
      reviews: 180
    }
  ];

  consultants = [
    {
      name: 'Manav Gupta',
      image: '../../../../assets/proff picture.png',
      rating: 4.9,
      reviews: 310
    },
    {
      name: 'Richa Sharma',
      image: '../../../../assets/proff picture.png',
      rating: 4.7,
      reviews: 190
    },
    {
      name: 'Vikram Patel',
      image: '../../../../assets/proff picture.png',
      rating: 4.6,
      reviews: 142
    }
  ];

  ngOnInit() {
  }

}
