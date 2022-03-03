import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dialog } from '@capacitor/dialog';

@Injectable({
  providedIn: 'root',
})
export class FeedbackToolLibService {
  private readonly api = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) {}


  getCatFact() {
    return this.http
      .get<{ fact: string; length: number }>(this.api);
  }

  async showDialog() {
    await Dialog.alert({
      title: 'Hello',
      message: 'I am working',
    });
  }
}
