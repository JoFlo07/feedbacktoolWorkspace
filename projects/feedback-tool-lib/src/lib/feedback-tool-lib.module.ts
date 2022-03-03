import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { FeedbackToolLibComponent } from './feedback-tool-lib.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IonicModule } from '@ionic/angular';
import { FeedbackToolLibService } from './feedback-tool-lib.service';
export interface LibConfig {
  apiUrl: string;
}
 
export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');

@NgModule({
  declarations: [
    FeedbackToolLibComponent,
    HomePageComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    FeedbackToolLibComponent,
    HomePageComponent
  ]
})
export class FeedbackToolLibModule { 
  static forRoot(config: LibConfig): ModuleWithProviders<any> {
    return {
      ngModule: FeedbackToolLibModule,
      providers: [
        FeedbackToolLibService,
        {
          provide: LibConfigService,
          useValue: config
        }
      ]
    };
  }
}
