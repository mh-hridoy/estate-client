import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

var styles = {
    bmBurgerButton: {
        position: 'absolute',
        width: '27px',
        height: '23px',
        top: "50%",
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    bmBurgerBars: {
        background: 'var(--hover-color)'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: 'var(--second-color)',

    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: 'var(--hover-color)',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItem: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    bmOverlay: {
        background: 'rgba(0,0,0,0.2)',
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: "100vh",
    }
}


const Hamburger = () => {
    const router = useRouter()
    const { pathname } = router

    return (
        <>
            <Menu right styles={styles} width="30vw" >
                <ul className="burgerMenu">
                    <li>
                        <Link href="/" >
                            <a id="home" name='/' className={`menuItem ${pathname === "/" ? "active" : ""}`}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup">
                            <a id="signup" className={`menuItem ${pathname === "/signup" ? "active" : ""}`}>Sign Up</a>
                        </Link>

                    </li>
                </ul>
            </Menu>

        </>
    )
}



export default Hamburger
