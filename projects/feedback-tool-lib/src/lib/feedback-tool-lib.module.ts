import { NgModule } from '@angular/core';
import { FeedbackToolLibComponent } from './feedback-tool-lib.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    FeedbackToolLibComponent,
    HomePageComponent
  ],
  imports: [
  ],
  exports: [
    FeedbackToolLibComponent
  ]
})
export class FeedbackToolLibModule { }
