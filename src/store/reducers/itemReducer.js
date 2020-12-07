import { ITEM_ADD, ITEM_CHECK, ITEM_REMOVE, ITEM_SELECT } from "../actions/actionTypes";

const initialState = {
  items: [
    {
      name: "Contacts",
      extra: [
        { telegram: "@easystem" },
        { vk: "nevermoredmb" }
      ],
      needToRemove: false,
      selected: false,
    },
    {
      name: "Achievements",
      extra: [
        { more: "2 place" },
        { vezdecode: "<100 place" },
        { proriv: "final" },
      ],
      needToRemove: false,
      selected: false,
    },
    {
      name: "Job",
      extra: [
        { vkGroup: "Bot maker" },
        { mnd: "manager" }
      ],
      needToRemove: false,
      selected: false,
    }
  ]
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_ADD:
      const newItem = {
        name: action.payload.name || "No name",
        extra: action.payload.extra || [],
        needToRemove: false,
        selected: false,
      }
      return { ...state, items: [...state.items, newItem] };
    case ITEM_CHECK:
      const checkedArr = state.items.map(item => {
        if (item.name === action.payload) {
          item.extra.length > 0
            ? item.needToRemove = false
            : item.needToRemove = true
        }
        return item
      })
      return { ...state, items: checkedArr };
    case ITEM_REMOVE:
      const index = state.items.findIndex((item) => item.name === action.payload.name)
      const removedArr = state.items.splice(index, 1);
      return { ...state, items: removedArr };
    case ITEM_SELECT:
      const selectedArr = state.items.map(item => {
        if (item.name === action.payload) {
          item.selected = !item.selected
        }
        return item
      })
      return { ...state, items: selectedArr };
    default:
      return state
  }
}