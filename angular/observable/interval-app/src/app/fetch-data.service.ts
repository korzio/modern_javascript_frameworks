import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor() {
    console.log('FetchDataService')
  }

  get() {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=%D1%81%D0%B0%D0%BC%D0%B0%D1%80%D0%B0&appid=24215f7ef5d6a6c4522776d91a6366ca')
      .then(res => res.json())
  }
}
