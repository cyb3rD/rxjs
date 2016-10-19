import $ from "jquery";
import Rx from "rxjs/Rx";

const $title = $("#title");
const $results = $("#results");

const keyUps$ = Rx.Observable.fromEvent($title, "keyup"); //Stream of events

keyUps$.subscribe(e => {
  getItems(e.target.value)
    .then(items => {
      $results.empty();
      $results.append(items.map(res => $("<li />").text(res)));
  });
});

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