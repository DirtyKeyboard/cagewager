import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: JSON.parse(sessionStorage.getItem('user'))
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set: (state, action) => {
            sessionStorage.setItem('user', JSON.stringify(action.payload))
            state.user = action.payload
        },
        remove: (state) => {
            sessionStorage.removeItem('user')
            state.user = null
        }
    }
})

export const {set, remove} = userSlice.actions

export default userSlice.reducer