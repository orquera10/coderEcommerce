import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    email:null,
    token: null,
    localId: null,
    imageCamera: null,
    password: null,
    nombre: null,
    pais: null,
    peso: null,
    altura: null,
    edad: null,
    sexo: null,
    afeccion: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            //console.log(action.payload.data.email)
            return {
                user: action.payload.email,
                token: action.payload.idToken,
                localId: action.payload.localId,
            }
        },
        setUserTemp: (state, action) => {
            console.log(action.payload)
            return {
                email: action.payload.email,
                password: action.payload.password
            }
        },
        clearUser: () => {
            return { user: null, token: null, localId: null }
        },
        setCameraImage: (state, action) => {
            return {
                ...state,
                imageCamera: action.payload,
            }
        },
        setProfileData: (state, action) => {
            return {
                ...state,
                nombre: action.payload.nombre,
                pais: action.payload.pais,
                peso: action.payload.peso,
                altura: action.payload.altura,
                edad: action.payload.edad,
                sexo: action.payload.sexo,
                afeccion: action.payload.afeccion
            }
        },
    },
})

export const { setUser, clearUser, setCameraImage, setProfileData, setUserTemp } = authSlice.actions

export default authSlice.reducer