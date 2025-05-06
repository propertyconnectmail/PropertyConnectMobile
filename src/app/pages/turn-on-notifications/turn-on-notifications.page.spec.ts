import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurnOnNotificationsPage } from './turn-on-notifications.page';

describe('TurnOnNotificationsPage', () => {
  let component: TurnOnNotificationsPage;
  let fixture: ComponentFixture<TurnOnNotificationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnOnNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
