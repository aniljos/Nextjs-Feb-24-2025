'use client'

import { Provider } from "react-redux";
import { store } from "@/redux/store";

type ReduxProviderProps = {
    children: React. ReactNode
}

export function ReduxProvider(props: ReduxProviderProps){

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}