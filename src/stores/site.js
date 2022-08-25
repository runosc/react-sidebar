import { createSlice } from "@reduxjs/toolkit";

console.log("locale site", localStorage.getItem('dilToggle'))


export const site = createSlice({
    name: 'site',
    initialState: {
        dark: false,
        language: 'tr',
        dilToggleAyar: localStorage.getItem('dilToggle') === 'true' ? true : false
    },
    reducers: {
        setDarkMode: state => {
            state.dark = !state.dark
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        },
        setDilToggle: state => {

            state.dilToggleAyar = !state.dilToggleAyar
            localStorage.setItem('dilToggle', state.dilToggleAyar)
            console.log(state.dilToggleAyar)
        }
    }
})

export const { setDarkMode, setLanguage, setDilToggle } = site.actions

export default site.reducer