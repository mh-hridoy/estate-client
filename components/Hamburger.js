import React from 'react'
import { slide as Menu } from 'react-burger-menu'

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
    bmItemList: {
        color: 'var(--first-color)',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block',
        color: 'var(--first-color)',
        fontWeight: 'bold',
        padding: '5px 10px'
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
    const showSettings = (event) => {
        event.preventDefault();

    }
    return (
        <>
            <Menu right styles={styles} width="30vw" >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
            </Menu>

        </>
    )
}



export default Hamburger
