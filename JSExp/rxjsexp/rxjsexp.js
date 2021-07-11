const { Observable, of } = require('rxjs');
const { filter, map, } = require('rxjs/operators');


/* // Create an Observable
var observable = Observable.create((observer) => {
    observer.next('Hello World!');
    observer.next('Hello Again!');
    observer.complete();
    observer.next('Bye'); // this will not be shown
});

// Subscribe to the Observable, and print stream to the console
observable.subscribe(
    (x)     => console.log('next: ' + x),
    (error) => console.log('error: ' + error),
    ()      => console.log('completed')
); */

function test() {
  return of(1,2,3,4,5,6).pipe(
    filter((v) => !(v % 2)),
    map((v) => v + v)
  );
}

console.log(test().subscribe(val => console.log(val)))

