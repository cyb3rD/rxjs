import $ from "jquery";

const $title = $("#title");
const $results = $("#results");

let lastQuery = null;
let lastTimeout = null;

$title.on("keyup", e => {
  const title = e.target.value;

  if (title == lastQuery) {
    return;
  }

  lastQuery = title;


  if (lastTimeout) {
    window.clearTimeout(lastTimeout);
  }

  // perform query after 500ms after last keyup  
  lastTimeout = window.setTimeout(() => {
    getItems(title)
    .then(items => {
      $results.empty();

      const $items = items.map(item => $("<li />").text(item));
      $results.append($items);
    });
  }, 500);
  
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