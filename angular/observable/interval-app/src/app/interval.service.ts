import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalService {
  constructor() {
    console.log('interval created')
  }
  getMyTimer() {
    return timer(500, 500).toPromise()
  }
}
