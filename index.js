function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested");
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i+n);
  }
}

function deepestChild() {
   var nodesArray = [].slice.call(document.getElementById("grand-node").querySelectorAll("div"));
   return nodesArray[nodesArray.length - 1];
}