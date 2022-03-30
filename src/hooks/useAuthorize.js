import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function useAuthorize({
    unauthorizedRedirectionURL = '/login'
}) {
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        function effect(){
            if(!user){
                navigate(unauthorizedRedirectionURL, {
                    replace: true,
                });
            }
        }

        effect();
    }, [user, navigate, unauthorizedRedirectionURL]);

    return user;
}
 