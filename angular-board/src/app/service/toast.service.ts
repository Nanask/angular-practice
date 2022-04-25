import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

export enum ToastColorType {
  SUCCESS = 'success',
  DANGER = 'danger',
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async showToast(message: string, color: string) {
    return await this.toastController.create({
      message,
      color,
      position: 'bottom',
      duration: 3000,
    });
  }
}
