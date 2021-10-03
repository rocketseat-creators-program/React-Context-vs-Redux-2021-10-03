import { createSlice } from "@reduxjs/toolkit"
import { createSelector } from "reselect"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    likes: 0,
    comments: 0,
  },
  reducers: {
    incrementLike: (state) => {
      state.likes += 1
    },
    incrementComment: (state) => {
      state.comments += 1
    },
  },
})

export const getLikes = createSelector(
  ({ counter }) => counter,
  ({ likes }) => likes
)

export const getComments = createSelector(
  ({ counter }) => counter,
  ({ comments }) => comments
)

export const { incrementComment, incrementLike } = counterSlice.actions

export default counterSlice.reducer
