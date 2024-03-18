import React from "react";

interface AuthProps {
    children: React.ReactNode
}

const AuthLayout: React.FC<AuthProps> = ({children}) => {
    return (
        <div className="flex justify-center items-center h-[810px] bg-slate-300 w-full">
            <div className="absolute top-[30%] border w-[500px] h-fit center justify-center flex rounded-md bg-gray-50">
                {children}
            </div>
        </div>
    )
}


export default AuthLayout;