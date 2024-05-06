import React from 'react'
import Header from '../components/Header/Header'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="base__typography base__palette theme--default layout">
            <Header className="header" />
            {children}
        </div>
    )
}

export default Layout