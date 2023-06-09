import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

/**
 * To use state: 
    import { useSelector, useDispatch } from 'react-redux'
    import { decrement, increment } from './counterSlice'

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
 * 
 */