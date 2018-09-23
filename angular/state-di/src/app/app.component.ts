import { Component, OnInit } from '@angular/core';
import { Service1Service } from './service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service1Service]
  // providers: [{ provide: Service1Service, useClass: Service1Service }]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private service: Service1Service) {}

  ngOnInit() {
    this.service.set('1')
  }
}
