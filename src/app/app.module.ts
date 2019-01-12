import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AgmCoreModule } from '@agm/core'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCoSccnNizGj_3_lCnvcy8jR2_-8BHlTdM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
