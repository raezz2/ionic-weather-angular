import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = '17eea9b38cc9ac615a67a434d48f9001';
  city = 'Bantul';

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);

  }
}
