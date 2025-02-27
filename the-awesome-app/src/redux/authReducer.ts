export type AuthState = {

    isAuthenticated: boolean;
    username: string;
    accessToken: string;
    refreshToken: string
}
export type AuthAction = {
    type: string,
    payload?: AuthState
}
const initialState: AuthState = {
    isAuthenticated: false,
    username: "",
    accessToken: "",
    refreshToken: ""
}

// {type: "login", payload: {isAuthenticated: true, username: "abc", ..}}
// {type:"logout"}

export const authReducer = (currentState = initialState, action: AuthAction)=> {

    //return the updated state
    if(action.type === "login" && action.payload){
        return action.payload;
    }
     if(action.type === "logout"){
        return initialState;
     }

    
    return currentState;
}