# Observables

Before lesson - [Compare Async Patterns](https://medium.com/@stevekonves/three-javascript-async-patterns-1d2e7094860a)
or [Egghead Free Observable Tutorial](https://egghead.io/lessons/rxjs-introducing-the-observable)
or even [Символы, генераторы, async/await и асинхронные итераторы в JavaScript: их сущность, взаимосвязь и варианты использования](https://habr.com/company/ruvds/blog/359004/)

## Intro

Callbacks -> Promises
    -> - Async/Await
    \
      -- Generators

- [Callback Hell](http://callbackhell.com/)
- [Compare Async Patterns](https://medium.com/@stevekonves/three-javascript-async-patterns-1d2e7094860a)

## Generators

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950 - generators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
https://medium.com/@hidace/javascript-es6-generators-part-i-understanding-generators-93dea22bf1b

## Iterators

```javascript
function* gen() {
   yield 1
   yield 2
   yield 3
}

var iterable = gen()

for(var iterator of gen()) {
  console.log(iterator)
}

// 1
// 2
// 3
```

---

```javascript
for (const x of ['a', 'b']) {
    console.log(x)
}
// 'a'
// 'b'

const set = new Set().add('a').add('b')
for (const x of set) {
    console.log(x)
}
// 'a'
// 'b'
```

---

```javascript
const iterable = {
  [Symbol.iterator]() {
    let step = 0
    const iterator = {
      next() {
        if (step <= 2) {
          step++
        }
        switch (step) {
          case 1:
            return { value: 'hello', done: false }
          case 2:
            return { value: 'world', done: false }
          default:
            return { value: undefined, done: true }
        }
      }
    }
    return iterator
  }
}
```

---

### Задача

Реализовать iterable factorial generator

```javascript
function* factorial() {
  var start = 1
  var res = start
  while(true) {
    res = res * start++
    yield res
  }
}

for(var value of factorial()) {
  console.log(value)
  if (value > 2000) break
}
```

http://exploringjs.com/es6/ch_iteration.html#ch_iteration
https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e
https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950 - js hint
https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e - iterators
https://learn.javascript.ru/generator

## Observables

Streams

https://github.com/tc39/proposal-observable

```js
function listen(element, eventName) {
    return new Observable(observer => {
      let handler = event => observer.next(event)
      element.addEventListener(eventName, handler, true)

      return () => {
        element.removeEventListener(eventName, handler, true)
      }
    })
}

function commandKeys(element) {
    let keyCommands = { "38": "up", "40": "down" }

    return listen(element, "keydown")
        .filter(event => event.keyCode in keyCommands)
        .map(event => keyCommands[event.keyCode])
}

let subscription = commandKeys(inputElement).subscribe({
    next(val) { console.log("Received key command: " + val) },
    error(err) { console.log("Received an error: " + err) },
    complete() { console.log("Stream complete") },
})
```

```js
Observable.of("red", "green", "blue").subscribe({
    next(color) {
        console.log(color)
    }
})
```

### Install RxJS
### Main Actors
Screen Shot 2018-05-20 at 15.50.24
- Subject
### Create observers - from...
Observable.from
subscribe

http://reactivex.io/documentation/operators/from.html
http://reactivex.io/documentation/operators/create.html
http://reactivex.io/documentation/operators/range.html
http://reactivex.io/documentation/operators/timer.html

```js
// from
Observable.from(new Set(['foo', window])).subscribe(observer)

// create
Observable.create(function (observer) {
    observer.onNext(42)
    observer.onCompleted()
    return function () { console.log('disposed') }
})

// range
Observable.range(0, 3)

// timer
Observable.timer(500, 500)
Observable.interval(500 /* ms */)

// fromEvent
Observable.fromEvent(document, 'click')
```

### Create()
### Task
Use factorial from previous task to create an observable
### Task
Create a document click events listener
### Operators

![alt text]("Screen Shot 2018-05-20 at 15.56.14")


.filter()
.map()
.reduce()
high ordered function ->

### Marble diagrams
How To

### Marble diagrams question
Which diagram belongs to which operator?

### other operators
- debounce
- catch
- concat
- merge
- flatMap
- switchMap
- take
- fromEvent
- timer
- combineLatest

### Hold and cold observers

![url]("./Screen Shot 2018-05-20 at 16.03.42.png")

## Observables in Angular

[Why to use observables in Angular?](https://stackoverflow.com/questions/37364973/promise-vs-observable) 

```ts
import {...} from '...';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Wikipedia Search</h2>
      <input #term type="text" (keyup)="search(term.value)">
      <ul>
        <li *ngFor="let item of items">{{item}}</li>
      </ul>
    </div>
  `
})
export class AppComponent {
  items: Array<string>;
  constructor(private wikipediaService: WikipediaService) {}
  search(term) {
    this.wikipediaService.search(term)
      .then(items => this.items = items);
  }
}

import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .toPromise()
                .then((response) => response.json()[1]);
  }
}
```

```ts
export class App {
  items: Array<string>;
  term = new FormControl();
  constructor(private wikipediaService: WikipediaService) {
    this.term.valueChanges
              .debounceTime(400)        // wait for 400ms pause in events
              .distinctUntilChanged()   // ignore if next search term is same as previous
              .subscribe(term => this.wikipediaService.search(term).then(items => this.items = items));
  }
}
```

![diagram observables vs promises](https://i.stack.imgur.com/Ewn3b.png)

---

https://stackoverflow.com/a/46627324/1645654 

---

### Links

- [taking advantage of observables in angular2](https://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html)

## NgRx

```ts
@Component({
    selector: 'counter',
    template: `
      <div class="content">
          <button (click)="increment()">+</button>
          <button (click)="decrement()">-</button>
          <h3>{{counter$ | async}}</h3>
      </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Counter{
    counter$: Observable<number>;

    constructor(private store : Store<number>){
        this.counter$ = this.store.select('counter')
    }

    increment(){
        this.store.dispatch({type: 'INCREMENT'});
    }

    decrement(){
        this.store.dispatch({type: 'DECREMENT'});
    }
}
```

https://gist.github.com/btroncone/a6e4347326749f938510
https://medium.com/front-end-hacking/managing-state-in-angular-apps-with-ngrx-store-and-ngrx-effects-part-1-a878addba622


---

Epic

https://redux-observable.js.org/docs/basics/Epics.html

## Observables & Iterators

https://www.safaribooksonline.com/library/view/reactive-programming-with/9781680505528/f_0016.xhtml#sec.observers_iterators

## What’s Reactive?

![]Screen Shot 2018-05-20 at 15.38.25

https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
https://www.safaribooksonline.com/library/view/reactive-programming-with/9781680505528/f_0015.xhtml#d24e721

# Links

- [Yakov Fain](https://www.safaribooksonline.com/library/view/rxjs-essentials/9781491995952/)
- [rxjs in action](https://www.safaribooksonline.com/library/view/rxjs-in-action/9781617293412/)
- [reactive javascript programming](https://www.safaribooksonline.com/library/view/reactive-javascript-programming/9781787284913/)

- https://egghead.io/lessons/rxjs-introducing-the-observable