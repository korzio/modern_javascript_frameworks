import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  HostListener,
} from '@angular/core';

class State {
  style: object
  on: boolean
  left: number
  top: number
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnChanges {
  @Input() stupid: string;
  @Output() dnd = new EventEmitter<State>();
  @ViewChild('me') me
  state: State

  constructor() {
    this.up();
  }

  @HostListener('dnd', ['$event'])
  output() {}

  ngOnChanges() {
    console.log('stupid example', this.stupid)
  }

  down(event) {
    Object.assign(this.state, {
      on: true,
      left: event.clientX,
      top: event.clientY
    })
  }

  up() {
    this.dnd.emit(this.state);

    this.state = {
      style: {},
      on: false,
      left: 0,
      top: 0,
    };
  }

  move(event) {
    if(!this.state.on) {
      return;
    }

    const { nativeElement } = this.me;
    const rectangle = nativeElement.getBoundingClientRect();

    Object.assign(this.state.style, {
      left: (event.clientX - this.state.left) + '.px',
      top: (event.clientY - this.state.top) + '.px',
    });
  }

}
