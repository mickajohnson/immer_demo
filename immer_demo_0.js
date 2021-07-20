const Immer = require("immer");

const updateState = state => {
  return Immer.produce(state, draftState => {
    draftState.push({ pear: 4 });
  });
};

const stores = [{ apples: 2 }, { oranges: 1 }];

const newState = updateState(stores);

console.log("///");
console.log("State:");
console.log("///");
console.log(newState);
console.log("///");
console.log("Old State:");
console.log("///");
console.dir(stores);

/*
Rules:
1. Make all edits to draft state
2. Don't return anything from the updater function
*/
