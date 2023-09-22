import { configureStore } from '@reduxjs/toolkit'

import AuthReducer from './slices/auth'

import { isDev } from '@Common/utils'

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
    },
    devTools: isDev,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
