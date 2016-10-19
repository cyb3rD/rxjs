import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results = $("#results");


Rx.Observable.fromEvent($title, "keyup")
  .map(e => e.target.value) // Stream of text
  .disctinctUntilChanged()  // Produce value if value has changed from previous
  .debounceTime(250)       // Delay with 500ms
  .switchMap(getItems)
  .subscribe(items => {
    $results.empty();
    $results.append(items.map(res => $("<li />").text(res)));
  });

// const keyUps$ = Rx.Observable.fromEvent($title, "keyup"); //Stream of events
// const queries$ = keyUps$
//   .map(e => e.target.value) // Stream of text
//   .disctinctUntilChanged()  // Produce value if value has changed from previous
//   .debounceTime(250)       // Delay with 500ms
//   .switchMap(query => getItems(query)); //Provides result from the 1st query that complete

// queries$.subscribe(query => {
//   getItems(query)
//     .then(items => {
//       $results.empty();
//       $results.append(items.map(res => $("<li />").text(res)));
//     });
// });

/**
 * Sample async request
 */
function getItems(title) {
  console.log(`Querying ${title}...`);
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve([title, "Item2", `Another ${Math.random()}`]);
    }, 500 + (Math.random() * 200));
  });
}