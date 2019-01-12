import { Component } from '@angular/core'
import { Location } from '@appCore'

@Component({
  selector: 'is-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interstellar-app'
  lat: Location = 52.520008
  lng: number = 13.404954
}
