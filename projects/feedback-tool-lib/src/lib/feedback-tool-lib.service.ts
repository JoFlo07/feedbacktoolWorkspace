import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeedbackToolLibService {
  private readonly api = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) {}
  getCatFact() {
    return this.http
      .get<{ fact: string; length: number }>(this.api)
      .pipe(map((res) => res.fact));
  }
}
