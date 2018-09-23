import { Component } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';
import { createEpicMiddleware } from 'redux-observable';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';

/// NOTE: for the sake of a simple example => i inlined some files here
/// NOTE: click on the top right corner btn 'OPEN in New Window' to see live Demo

// store.ts
export interface AppState {
  isPinging: boolean;
}

export const INITIAL_STATE: AppState = {
  isPinging: false,
};

// epic.ts
const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PONG });

// reducer.ts
const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
};

// actions.ts
const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });

// app.component.ts
const epicMiddleware = createEpicMiddleware(pingEpic);
const middlewares = [ epicMiddleware ];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @select('isPinging') isPinging$: Observable<boolean>;

  constructor(
    private ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(
      pingReducer,
      INITIAL_STATE,
      middlewares,
      []);
  }

  public ping = () => this.ngRedux.dispatch(ping());
}

