import { Component, OnInit } from '@angular/core';
import { DataService } from './core/services';
import { InitialLocation, ColourMap } from './core/consts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'is-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lat: number = InitialLocation.lat;
  lng: number = InitialLocation.lng;
  geoData$: Observable<any>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.geoData$ = this.dataService.getData().pipe(
      map(response => response.features),
      map(item => this.flattenNestedArray(item, 2))
    );
  }

  private flattenNestedArray(array, level: number): any[] {
    array.forEach(innerArray => {
      innerArray.geometry.coordinates = innerArray.geometry.coordinates.flat(
        level
      );
    });
    return array;
  }

  getColour(age: number): string {}
}
