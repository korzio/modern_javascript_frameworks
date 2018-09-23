import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  public a: string

  constructor() { }

  set(a: string) {
    this.a = a
  }
}
