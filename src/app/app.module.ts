import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularOpenlayersModule } from 'ngx-openlayers';

// import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularOpenlayersModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCoSccnNizGj_3_lCnvcy8jR2_-8BHlTdM'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
