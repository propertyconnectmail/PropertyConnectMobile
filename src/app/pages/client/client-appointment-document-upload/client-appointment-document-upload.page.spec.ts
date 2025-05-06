import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientAppointmentDocumentUploadPage } from './client-appointment-document-upload.page';

describe('ClientAppointmentDocumentUploadPage', () => {
  let component: ClientAppointmentDocumentUploadPage;
  let fixture: ComponentFixture<ClientAppointmentDocumentUploadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAppointmentDocumentUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
