import useLocalStorage from "./useLocalStorage";
import { currentUser, onUserChanged } from "../services/auth";
import { ACCESS_TOKEN, USER } from "../config/localStorage";

const useAuth = () => {
    
    const [user, setUser] = useLocalStorage(USER, currentUser);
    const [accessToken, setAccessToken] = useLocalStorage(ACCESS_TOKEN, null);

    onUserChanged((user) => {
        if(!user){
            setUser(null);
            setAccessToken(null);
            return;
        }

        setUser(user);
        setAccessToken(user.accessToken);
    })
    console.log(user);
    return user;
}
 
export default useAuth;