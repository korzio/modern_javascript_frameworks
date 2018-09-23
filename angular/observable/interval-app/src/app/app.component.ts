import { Component, OnInit } from '@angular/core';
import { IntervalService } from './interval.service';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  body: object;

  constructor(
    // public interval: IntervalService,
    private fetch: FetchDataService
  ) {
    // this.fetch = new FetchDataService();
  }

  ngOnInit() {
    // console.log('here')
    // this.interval.getMyTimer()
    this.fetch.get()
      .then((result) => { this.body = result })
      .catch((result) => { debugger })

  }
}
