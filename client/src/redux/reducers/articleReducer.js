const initialState = {
    articles:[],
    errorMessage:""
};

export const articleReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "GET_ALL_ARTICLES_SUCCESS":
            return {
                ...state,
                articles:action.payload
            }

        case "GET_ALL_ARTICLES_FAIL":
            return {
                ...state,
                articles:[],
                errorMessage:action.payload
            }
        default:
            return {...state}
            
    }
}


export default articleReducer;