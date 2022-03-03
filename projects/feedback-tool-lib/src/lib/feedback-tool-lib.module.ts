import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FeedbackToolLibComponent } from './feedback-tool-lib.component';
import { FeedbackToolLibService } from './feedback-tool-lib.service';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [FeedbackToolLibComponent, HomePageComponent],
  imports: [CommonModule, HttpClientModule, IonicModule],
  exports: [FeedbackToolLibComponent, HomePageComponent],
  providers: [FeedbackToolLibService],
})
export class FeedbackToolLibModule {}
