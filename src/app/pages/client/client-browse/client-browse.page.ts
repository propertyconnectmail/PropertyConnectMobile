import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-client-browse',
  templateUrl: './client-browse.page.html',
  styleUrls: ['./client-browse.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule]
})
export class ClientBrowsePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  consultants = [
    {
      name: 'Dr. Bellamy N',
      role: 'Lawyer',
      rating: 4.5,
      reviews: 135,
      image: '../../../../assets/proff picture.png'
    },
    {
      name: 'Dr. Martinez K',
      role: 'Valuer',
      rating: 4.3,
      reviews: 130,
      image: '../../../../assets/proff picture.png'
    },
    {
      name: 'Dr. Bellamy N',
      role: 'Lawyer',
      rating: 4.5,
      reviews: 135,
      image: '../../../../assets/proff picture.png'
    },
    {
      name: 'Dr. Martinez K',
      role: 'Surveyor',
      rating: 4.3,
      reviews: 130,
      image: '../../../../assets/proff picture.png'
    },
    {
      name: 'Dr. Marc M',
      role: 'Surveyor',
      rating: 4.3,
      reviews: 130,
      image: '../../../../assets/proff picture.png'
    },
    {
      name: "Dr. O'Boyle J",
      role: 'Lawyer',
      rating: 4.5,
      reviews: 135,
      image: '../../../../assets/proff picture.png'
    },{
      name: 'Dr. Bellamy N',
      role: 'Lawyer',
      rating: 4.5,
      reviews: 135,
      image: '../../../../assets/proff picture.png'
    },
    {
      name: 'Dr. Martinez K',
      role: 'Surveyor',
      rating: 4.3,
      reviews: 130,
      image: '../../../../assets/proff picture.png'
    },
    {
      name: 'Dr. Marc M',
      role: 'Surveyor',
      rating: 4.3,
      reviews: 130,
      image: '../../../../assets/proff picture.png'
    },
    {
      name: "Dr. O'Boyle J",
      role: 'Lawyer',
      rating: 4.5,
      reviews: 135,
      image: '../../../../assets/proff picture.png'
    }
  ];
  

}
