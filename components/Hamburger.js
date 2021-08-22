import CheeseburgerMenu from 'cheeseburger-menu'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import HamburgerMenu from 'react-hamburger-menu'



const Hamburger = () => {
    const [isLoading, setIsLoading] = useState(false)
    const user = useSelector((state) => state.user.user)
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = router


    const logout = () => {
        setIsOpen(false)

    }
    //need to declare if the menu is open or not. otherwise cross button  wont work 

    const closeMenu = () => {
        if (isOpen) {
            setIsOpen(false)

        } else {
            setIsOpen(true)

        }
    }

    //need to declare if the menu is open or not. otherwise cross button  wont work 

    const openMenu = () => {
        if (isOpen) {
            setIsOpen(false)

        } else {
            setIsOpen(true)

        }
    }


    return (
        <>
            <CheeseburgerMenu right isOpen={isOpen} closeCallback={closeMenu} width="25vh" className="menuContainer" overlayClassName="menuOverly" outerClassName="menuOuter" innerClassName="menuInner" shadowClassName="menuShadow" backgroundColor="#520a99de" topOffset="10vh">
                <ul className="burgerMenuList">
                    <li>
                        <Link href="/" >
                            <a id="home" name='/' className={`menuItem ${pathname === "/" ? "active" : ""}`}>Home</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/community">
                            <a id="community" className={`menuItem ${pathname === "/community" ? "active" : ""}`}>Community</a>
                        </Link>

                    </li>
                    {!user ?
                        <li>
                            <Link href="/signup">
                                <a id="signup" className={`menuItem ${pathname === "/signup" ? "active" : ""}`}>Sign Up</a>
                            </Link>

                        </li>
                        :
                        <li>
                            <Button onClick={logout} htmlType="submit" disabled={isLoading} loading={isLoading}>
                                Sign Out
                            </Button>

                        </li>
                    }
                </ul>
            </CheeseburgerMenu>


            <HamburgerMenu
                isOpen={isOpen}
                menuClicked={openMenu}
                width={30}
                height={20}
                strokeWidth={4}
                color='black'
                animationDuration={0.5}
                className="burgerMenu"

            />

        </>
    )
}

export default Hamburger;