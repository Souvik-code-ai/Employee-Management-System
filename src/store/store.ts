import { configureStore } from '@reduxjs/toolkit'
import popupReducer from './features/Popup/popup.slice'
import employeeReducer from './features/Employee/employee.slice'
export const store = configureStore({
  reducer: {
    popup:popupReducer,
    employee:employeeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store