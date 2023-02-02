import { createSlice } from '@reduxjs/toolkit'

const stock = createSlice({
    name: 'stock',
    initialState: {
        counter: 1
    },
    reducers: {
        increment(state) {
            state.counter += 1
        },

        decrement(state) {
            if (state.counter > 1) {
                state.counter -= 1
            } else return
        },
        reset(state) {
            state.counter = 1
        }
    }
})

export const { decrement, increment, reset } = stock.actions
export default stock.reducer