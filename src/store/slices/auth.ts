import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IAuthState } from '@Types/store'

const initialState: IAuthState = {
    username: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, { payload }: PayloadAction<string>) => {
            state.username = payload
        },
        signOut: (state) => {
            state = initialState
        },
    },
})

const { actions, reducer } = authSlice
export const { signIn, signOut } = actions

export default reducer
