import { createSlice } from '@reduxjs/toolkit';
import { GroupI } from './redux.interface';

const clearState = {
  value: 0,
  target: 'text',
  group: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    target: 'text',
    group: [{}],
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    addDesk: (state, { payload }) => {
      const NewDesk: GroupI = {
        name: payload,
        // cards: [{ title: 'zxc', desc: 'desc2', tasks: [], tags: [] }],
        cards: [],
        active: false,
      }
      state.group.push(NewDesk);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    cleanAll: (state) => {
      state.group = [];
    },
    addTask: (state, { payload }) => {
      state.group.forEach((item: any) => item.name === payload.desk ? item.cards.push(payload) : null)
    },
    changePlace: (state, { payload }) => {
      state.group = payload;
    },
    changeCards: (state, { payload }) => {
      state.group.forEach((item: any) => item.name === payload.desc.name ? item.cards = payload.cards : null)

    },
    changeDataCard: (state, { payload }) => {
      state.group.forEach((item: any) => {
        if (item.name === payload.activeDesk.name) {
          item.cards.forEach((card: any) => {
            if (card.title === payload.item.title && card.desc === payload.item.desc) {
              card.title = payload.title;
              card.desc = payload.desc;
            }
          })
        }
      })
    },
  },
})

export const {
  increment,
  decrement,
  incrementByAmount,
  addDesk,
  cleanAll,
  addTask,
  changePlace,
  changeCards,
  changeDataCard
} = counterSlice.actions;

export default counterSlice.reducer;
