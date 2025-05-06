import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
// import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-client-appointment-document-upload',
  templateUrl: './client-appointment-document-upload.page.html',
  styleUrls: ['./client-appointment-document-upload.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClientAppointmentDocumentUploadPage implements OnInit {

  // @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  fileInput: any = "";
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; // simulate shimmer loading end
    }, 1000);
  }

  goBack() {
    // Logic to navigate back
    console.log('Back clicked');
  }

  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Selected file:', file);
    }
  }

  cancel() {
    // Cancel logic
    console.log('Cancel clicked');
  }

  upload() {
    // Upload logic
    console.log('Upload clicked');
  }

}
