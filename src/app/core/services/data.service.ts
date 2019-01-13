import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeodataLink } from './../../core/consts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData(url: string = GeodataLink): Observable<any> {
    return this.http.get(url);
  }
}
