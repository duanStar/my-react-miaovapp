export default function login(login="",action){
    switch(action.type){
        case "LOGIN":
            return action.user;
        case "LOGOUT":
            return "";
        default: 
            return login;
    }
}