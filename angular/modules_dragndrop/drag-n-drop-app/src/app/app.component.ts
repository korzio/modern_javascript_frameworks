import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  output($event) {
    console.log($event);
    const counter = parseInt(this.title);
    this.title = String((isNaN(counter) ? 0 : counter) + 1);
  }
}
