
const INITIAL_STATE = {
    user: null,
    token: null,
    isLoggedIn: false,

}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'INITIAL_AUTH_OK':
            console.log(action.payload);
            return {...state, user: action.payload, isLoggedIn: true }
        case 'LOGIN_USER_SUCCESS':
            return { ...state, user: action.payload, isLoggedIn: true }
        default:
            return state;
    }
}
