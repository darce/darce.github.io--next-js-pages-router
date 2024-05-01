import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Nav.module.scss'

interface NavProps {
    className?: string
}

const Nav: React.FC<NavProps> = ({ className }) => {
    const router = useRouter()
    const [curSection, setCurSection] = useState('0')
    const sections: string[] = ['work', 'resume', 'research']

    const handleClick = () => {

    }
    return (
        <nav className={`${styles.nav} ${className || ''}`} aria-label='Daniel Arcé'>
            <ul>
                {sections.map((section) => (
                    <li key={section} onClick={() => {
                        router.push(`/${section}`)
                    }}>
                        {section}
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}

export default Nav