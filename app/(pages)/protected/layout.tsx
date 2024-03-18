import React, { ReactNode } from 'react'

interface ProtectedProps {
  children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({children}) => {
    return (
        <div>
            <h1>Protected Layout</h1>
            {children}
        </div>
    )
}

export default Protected