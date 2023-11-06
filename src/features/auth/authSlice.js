import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
    localId: null,
    imageCamera: null,
    nombre: null,
    pais: null,
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
            }
        },
    },
})

export const { setUser, clearUser, setCameraImage, setProfileData } = authSlice.actions

export default authSlice.reducer