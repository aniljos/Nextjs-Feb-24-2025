'use client'
import React, { useState } from "react";

export type ThemeState = {
    mode: string;
    changeMode: (mode: string) => void
}
const initialState: ThemeState = {
    mode: 'dark',
    changeMode: () => {}
}


//create a context(store)
export const AppThemeContext = React.createContext(initialState)


type AppThemeContextProviderProps = {
    children:React.ReactNode
}
export function AppThemeContextProvider(props: AppThemeContextProviderProps){

    const [mode, setMode] = useState(initialState.mode);

    return (
        <AppThemeContext.Provider value={{mode, changeMode: setMode}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}