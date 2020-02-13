import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

export class MarkerService {
  
  capitals: string = './assets/usa-capitals.json';

  constructor(private http: HttpClient) { }

  makeCapitalMarkers(map: L.map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      let result = Object.keys(res);
      result.map(key => {
        let value = res[key];
        const lat = value.lat;
        const lon = value.long;
        const marker = L.marker([lon, lat]).addTo(map);
        console.log(marker);
      });
    });
  }
}
