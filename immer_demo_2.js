const Immer = require("immer");

const updateExpandedState = (state, action) => ({
  ...state,
  expandedState: Immer.produce(state.expandedState, newExpandedState => {
    newExpandedState[action.netsuiteOrderId].netsuiteItems[
      action.netsuiteItemId
    ] = !newExpandedState[action.netsuiteOrderId].netsuiteItems[
      action.netsuiteItemId
    ];
  })
});

// const updateExpandedState = (state, action) => ({
//   ...state,
//   expandedState: {
//     ...state.expandedState,
//     [action.netsuiteOrderId]: {
//       ...state.expandedState[action.netsuiteOrderId],
//       netsuiteItems: {
//         ...state.expandedState[action.netsuiteOrderId].netsuiteItems,
//         [action.netsuiteItemId]: !state.expandedState[action.netsuiteOrderId]
//           .netsuiteItems[action.netsuiteItemId]
//       }
//     }
//   }
// });

const store = {
  updating: false,
  updatingFailed: true,
  expandedState: {
    123: {
      open: false,
      netsuiteItems: {
        45: false,
        88: false
      }
    },
    456: {
      open: true,
      netsuiteItems: {
        12: true,
        34: false
      }
    }
  }
};

const action = {
  netsuiteOrderId: 456,
  netsuiteItemId: 12
};

const newState = updateExpandedState(store, action);

console.log("///");
console.log("State:");
console.log("///");
console.log(newState);
console.log("///");
console.log("ExpandedState:");
console.log("///");
console.dir(newState.expandedState);
console.log("///");
console.log("Old ExpandedState:");
console.log("///");
console.dir(store.expandedState);
