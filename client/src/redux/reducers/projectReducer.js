const initialState = {
    projects:[],
    errorMessage:""
};

export const projectReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "GET_ALL_PROJECTS_SUCCESS":
            return {
                ...state,
                projects:action.payload
            }

        case "GET_ALL_PROJECTS_FAIL":
            return {
                ...state,
                projects:[],
                errorMessage:action.payload
            }
        default:
            return {...state}
            
    }
}


export default projectReducer;