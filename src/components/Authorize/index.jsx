import { Fragment } from "react";
import useAuthorize from "../../hooks/useAuthorize";

const Authorize = ({
    to = "/login",
    children
}) => {
    useAuthorize({
        unauthorizedRedirectionURL: to,
    });

    return (
        <Fragment>
            {children}
        </Fragment>
    );
}
 
export default Authorize;