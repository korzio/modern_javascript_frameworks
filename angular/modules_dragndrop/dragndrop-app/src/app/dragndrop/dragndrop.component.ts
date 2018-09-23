import { Component, OnInit, EventEmitter, HostListener,
  Output, Input } from '@angular/core';

class State {
  on: boolean
  style: object
  screenX: number
  screenY: number
}

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent {
  state: State
  @Output() dnd = new EventEmitter<State>()
  @Input() counter: number

  constructor() {
    this.up();
  }

  @HostListener('dnd', ['$event'])
  output(state) {
    // console.log(state)
  }

  down({ screenX, screenY }) {
    Object.assign(this.state, {
      on: true,
      screenX,
      screenY,
    })
  }

  up() {
    this.dnd.emit(this.state)
    this.state = {
      on: false,
      style: {},
      screenX: 0,
      screenY: 0,
    }
  }

  move({ screenX, screenY }) {
    if (this.state.on !== true) {
      return;
    }

    Object.assign(this.state.style, {
      left: (screenX - this.state.screenX) + 'px',
      top: (screenY - this.state.screenY) + 'px',
    })
  }
}
