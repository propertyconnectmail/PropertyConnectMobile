import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController,
    private platform: Platform
  ) {}

  async show(
    message: string,
    options?: {
      color?: 'success' | 'danger' | 'primary' | 'warning' | 'dark' | 'light' | 'medium';
      duration?: number;
      position?: 'top' | 'bottom' | 'middle';
    }
  ) {
    // Wait for platform to be ready
    await this.platform.ready();

    setTimeout(async () => {
      const toast = await this.toastController.create({
        message,
        duration: options?.duration ?? 3000,
        color: options?.color ?? 'success',
        position: options?.position ?? 'middle', // top works better on Android
        mode: 'md', // material design (Android-style)
        animated: false,
        buttons: [
          {
            text: '✖',
            role: 'cancel',
          },
        ],
      });

      await toast.present();
    }, 100); // delay to ensure visibility
  }
}