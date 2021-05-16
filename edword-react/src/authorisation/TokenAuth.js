const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {
    login: true,
    user: user 
} : {
    login: false,
    user: null,
    register_error: false
};


const auth = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNIN":
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("id", JSON.stringify(action.payload.first));
            localStorage.setItem("token", JSON.stringify(action.payload.second));

            return {
                ...state, auth: action.payload, login: true, login_error: false
            }
        case "SIGNIN_ERROR":
            return {
                ...state, login_error: true,
            }
        case "SIGNOUT": {
            localStorage.removeItem("user");
            localStorage.removeItem("id");
            localStorage.removeItem("token");
            state.login = false;
            return state;
        }
        default:
            return state;
    }
}

export default auth;