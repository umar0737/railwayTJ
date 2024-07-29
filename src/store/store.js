import { configureStore } from '@reduxjs/toolkit'
import  railwaySlice  from '../reducer/railwayData/railwayData'

export const store = configureStore({
  reducer: {
    railway: railwaySlice
  },
})