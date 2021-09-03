import React from 'react';


const Layout = ({children}) => {
    return (
        <div className={'myLayout'}>
            {children}
        </div>
    )
};

export default Layout;