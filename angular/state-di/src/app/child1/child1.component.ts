import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  // providers: [Service1Service]
  // providers: [{ provide: Service1Service, useClass: Service1Service }]
  providers: [{ provide: Service1Service, useValue: {
    set: () => { console.log('no') }
  } }]
})
export class Child1Component implements OnInit {

  constructor(private service: Service1Service) {}

  ngOnInit() {
    console.log(this.service.a)
    this.service.set('2')
  }

}
