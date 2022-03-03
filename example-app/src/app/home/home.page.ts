import { Component, OnInit } from '@angular/core';
import { FeedbackToolLibService } from 'feedback-tool-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //TODO: CHECK WHY TYPE IS NOT CORRECT
  catFact$: any;

  constructor(private feedbacktoollibService: FeedbackToolLibService) {}

  ngOnInit(): void {
    this.catFact$ = this.feedbacktoollibService.getCatFact();
  }
}
