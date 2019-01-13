import { Component, OnInit } from '@angular/core';
import { DataService } from './core/services';
import { InitialLocation, ColourMap, PopupCoords } from './core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MapBrowserPointerEvent } from 'openlayers';

@Component({
  selector: 'is-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lat: number = InitialLocation.lat;
  lng: number = InitialLocation.lng;
  popupVisible = false;
  popupCoordinates: PopupCoords = { x: 0, y: 0 };
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

  getColour(age: number): number[] {
    switch (true) {
      case age <= 42:
        return ColourMap.upTo42;
      case age <= 43:
        return ColourMap.upTo43;
      case age <= 45:
        return ColourMap.upTo45;
      case age <= 50:
        return ColourMap.upTo50;
      default:
        return ColourMap.upTo40;
    }
  }

  showPopup(event: MapBrowserPointerEvent) {
    const map = event.map;

    this.popupVisible = true;
    const point = map.forEachFeatureAtPixel(event.pixel, function(
      feature,
      layer
    ) {
      return feature;
    });
    console.log(point);
  }
}
