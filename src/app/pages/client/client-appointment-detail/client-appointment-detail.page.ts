import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-client-appointment-detail',
  templateUrl: './client-appointment-detail.page.html',
  styleUrls: ['./client-appointment-detail.page.scss'],
  standalone: true,
  animations: [
    // Global fade-slide animation for cards
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),

    // Staggered animation for checklist items
    trigger('listStagger', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),

    // Lawyer image bounce
    trigger('bounceIn', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClientAppointmentDetailPage implements OnInit {

  isLoading: boolean = true;
  hasDocuments: boolean = true;// Toggle this to false to test "no documents uploaded" view

  checklist = [
    { title: 'Contact Lawyer', duration: '3-4 Minutes', icon: 'check-circle.svg' },
    { title: 'Upload required documents', duration: 'Less than 2 minutes', icon: 'upload.svg' },
    { title: 'Attend the meeting', duration: '4-5 Minutes', icon: 'calendar.svg' },
    { title: 'Add a review (optional)', duration: '1-2 Minutes', icon: 'star.svg' }
  ];

  guidelines: string[] = [
    "Please arrive 15 minutes early, especially if it's your first visit.",
    "Write down any questions for the lawyer and bring them along.",
    "Bring necessary documents, like ID and insurance details.",
    "Inform the law office in advance if you need to reschedule."
  ];

  uploadedDocs = [
    { name: 'Document 1', img: 'assets/images/word-icon.png' },
    { name: 'Document 2', img: 'assets/images/pdf-icon.png' },
    { name: 'Document 3', img: 'assets/images/pdf-icon.png' }
  ];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onUploadDocuments() {
    console.log('Upload triggered');
  }

  openMeetingLink() {
    window.open('https://zoom.us/24afgjasasd', '_blank');
  }

}
























































// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
// import {
//   trigger,
//   transition,
//   style,
//   animate,
//   query,
//   stagger
// } from '@angular/animations';
// import { NavController } from '@ionic/angular';

// @Component({
//   selector: 'app-client-appointment-detail',
//   templateUrl: './client-appointment-detail.page.html',
//   styleUrls: ['./client-appointment-detail.page.scss'],
//   standalone: true,
//   animations: [
//     // Global fade-slide animation for cards
//     trigger('fadeSlideIn', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateY(20px)' }),
//         animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
//       ])
//     ]),

//     // Staggered animation for checklist items
//     trigger('listStagger', [
//       transition(':enter', [
//         query(':enter', [
//           style({ opacity: 0, transform: 'translateY(20px)' }),
//           stagger('100ms', [
//             animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
//           ])
//         ], { optional: true })
//       ])
//     ]),

//     // Lawyer image bounce
//     trigger('bounceIn', [
//       transition(':enter', [
//         style({ transform: 'scale(0.8)', opacity: 0 }),
//         animate('500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ transform: 'scale(1)', opacity: 1 }))
//       ])
//     ])
//   ],
//   imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
// })
// export class ClientAppointmentDetailPage implements OnInit {

//   isLoading = true;

//   actionButtons = [
//     { icon: 'assets/icons/call.svg', label: 'Call' },
//     { icon: 'assets/icons/message.svg', label: 'Message' },
//     { icon: 'assets/icons/schedule.svg', label: 'Schedule' },
//     { icon: 'assets/icons/detail.svg', label: 'Detail' }
//   ];

//   appointment = {
//     status: 'Upcoming',
//     clientName: 'John Doe',
//     clientEmail: 'john@example.com',
//     clientPhone: '+1 234 567 890',
//     date: '12 Nov, 2024',
//     time: '09:00 am'
//   };

//   checklist = [
//     { icon: 'assets/icons/check.svg', title: 'Contact Lawyer', duration: '2 Minute' },
//     { icon: 'assets/icons/upload.svg', title: 'Upload required documents', duration: '3 Minute' },
//     { icon: 'assets/icons/meeting.svg', title: 'Attend the meeting', duration: '30 Minute' },
//     { icon: 'assets/icons/review.svg', title: 'Add a review (optional)', duration: '1 Minute' }
//   ];

//   guidelines = [
//     'Please arrive 15 minutes early, especially if it’s your first visit',
//     'Write down any questions for the lawyer and bring them along',
//     'Bring necessary documents, like ID and insurance details',
//     'Inform in advance if you need to reschedule'
//   ];

//   documents = [
//     { name: 'Medical_Report.pdf', icon: 'assets/icons/pdf.svg' },
//     { name: 'Prescription.docx', icon: 'assets/icons/doc.svg' }
//   ];

//   constructor(private navCtrl: NavController) {}

//   ngOnInit() {
//     setTimeout(() => this.isLoading = false, 1000); // simulate loading
//   }

//   goBack() {
//     this.navCtrl.back();
//   }

// }
