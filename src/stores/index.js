import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import siteReducer from './site'
import deneyimReducer from './deneyim'
import dilGetirReducer from './dilGetir'

export default configureStore({
  reducer: {
    counter: counterReducer,
    site: siteReducer,
    deneyim: deneyimReducer,
    dilGetir:dilGetirReducer,
  },
})
