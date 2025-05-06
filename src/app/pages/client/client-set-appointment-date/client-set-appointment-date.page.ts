import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonButton, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-client-set-appointment-date',
  templateUrl: './client-set-appointment-date.page.html',
  styleUrls: ['./client-set-appointment-date.page.scss'],
  standalone: true,
  imports: [IonIcon, IonBackButton, IonButtons, IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClientSetAppointmentDatePage {

  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  currentMonthIndex = new Date().getMonth();
  selectedYear = new Date().getFullYear();
  dates: any[] = [];
  selectedDate: any = null;
  selectedSlot: any = null;
  isLoadingDates = true;
  isPrevDisabled = false;

  morningSlots = [
    { time: '10:30 am', disabled: false },
    { time: '11:00 am', disabled: false },
    { time: '11:30 am', disabled: false },
  ];

  afternoonSlots = [
    { time: '02:30 pm', disabled: false },
    { time: '03:00 pm', disabled: false },
    { time: '03:30 pm', disabled: false },
    { time: '04:00 pm', disabled: false },
    { time: '04:30 pm', disabled: false },
    { time: '05:00 pm', disabled: false },
  ];

  eveningSlots = [
    { time: '06:30 pm', disabled: false },
    { time: '07:00 pm', disabled: false },
    { time: '07:30 pm', disabled: false },
    { time: '08:00 pm', disabled: false },
  ];

  ngOnInit() {
    this.generateDates();
  }

  generateDates() {
    this.isLoadingDates = true;
    this.dates = [];
    const today = new Date();
    const daysInMonth = new Date(this.selectedYear, this.currentMonthIndex + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.selectedYear, this.currentMonthIndex, i);
      if (date >= new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        this.dates.push({ day, date: i, month: this.currentMonthIndex });
      }
    }

    this.isPrevDisabled = (this.currentMonthIndex === today.getMonth());
    this.selectedDate = this.dates[0];
    this.isLoadingDates = false;

    setTimeout(() => {
      const todayButton = document.querySelector('.date-button.selected');
      todayButton?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }, 100);
  }

  prevMonth() {
    if (!this.isPrevDisabled && this.currentMonthIndex > 0) {
      this.currentMonthIndex--;
      this.generateDates();
    }
  }

  nextMonth() {
    if (this.currentMonthIndex < 11) {
      this.currentMonthIndex++;
      this.generateDates();
    }
  }

  selectDate(date: any) {
    this.selectedDate = date;
    this.selectedSlot = null;
  }

  selectSlot(slot: any) {
    this.selectedSlot = slot;
  }


  touchStartX = 0;
  touchEndX = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  slideDirection: 'left' | 'right' | '' = '';

  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const swipeThreshold = 50; // minimum swipe distance in px
  
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        // Swipe Right
        this.slideDirection = 'right';
        this.prevMonth();
      } else {
        // Swipe Left
        this.slideDirection = 'left';
        this.nextMonth();
      }
  
      // Reset slide direction after animation
      setTimeout(() => {
        this.slideDirection = '';
      }, 300); // match CSS animation duration
    }
  }

}
