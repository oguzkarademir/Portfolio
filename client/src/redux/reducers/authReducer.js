const initialState = {
    loginStatus:null,
    errorMessage:""
};


export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loginStatus:true,
                errorMessage:""
            }

        case "LOGIN_FAIL":
            return {
                ...state,
                errorMessage:"You are not admin"
            }
        case "LOG_OUT":
            return {
                ...state,
                loginStatus:false,
                errorMessage:""
            }
        default:
            return {...state}
            
    }
}


export default authReducer;