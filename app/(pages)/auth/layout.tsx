import React from "react";

import "./layout.css";

interface AuthProps {
    children: React.ReactNode
}

const AuthLayout: React.FC<AuthProps> = ({children}) => {
    return (
        <div className="a-layout">
            <div className="a-children">
                {children}
            </div>
        </div>
    )
}


export default AuthLayout;


//prefixing the classnames with a- to show it belongs to the auth layout