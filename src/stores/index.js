import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import siteReducer from './site'
import deneyimReducer from './deneyim'

export default configureStore({
  reducer: {
    counter: counterReducer,
    site: siteReducer,
    deneyim: deneyimReducer,
  },
})
