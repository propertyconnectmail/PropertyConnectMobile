import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { StarRatingComponent } from "../../../components/star-rating/star-rating.component";

@Component({
  selector: 'app-client-lawyer-detail',
  templateUrl: './client-lawyer-detail.page.html',
  styleUrls: ['./client-lawyer-detail.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, StarRatingComponent]
})
export class ClientLawyerDetailPage {

  isExpanded: boolean = false;

  expandComment() {
    this.isExpanded = true;
  }

}
