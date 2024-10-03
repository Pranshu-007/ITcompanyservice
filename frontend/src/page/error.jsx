import {NavLink} from "react-router-dom";

export const Error = () => {
    return (<>
    <section id="error-page">
        <div className="content">
            <h2 className="header">
                404
            </h2>
            <h4>Sorry! Page Not Found</h4>
            <p>Oops! There is an error , please check the link again.</p>
            <div className="btns">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Report Issue</NavLink>
            </div>
        </div>
    </section>
    </>)
}