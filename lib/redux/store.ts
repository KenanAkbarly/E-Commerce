import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/rootReducer'

export const store = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']