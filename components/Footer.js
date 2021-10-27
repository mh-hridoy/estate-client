import React from 'react'
import { useSelector } from 'react-redux'
import {useRouter} from 'next/router'


const Footer = () => {
    const router = useRouter()
    const user = useSelector((state) => state.user.user)

    console.log(router.pathname)

    return (
        <>
            {!user && router.pathname != "/search" &&
            <div className="footer">

                <div className="allContent">
                    <div className="section aboutUs">
                        <h3 className="footerTitle">About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio autem dolorum voluptas, incidunt error quo quia similique odit excepturi obcaecati esse, aliquam magni molestiae quasi assumenda tempora ratione doloribus harum. Perspiciatis aliquid quibusdam enim, aliquam atque, quo quas cum iste inventore nemo harum ipsam, ea ad? Corrupti, distinctio eum?
                        </p>

                    </div>

                    <div className="linkAndContact">

                        <div className="section relatedLinks">
                            <h3 className="footerTitle">Related links</h3>

                            <ul>
                                <li>Terms & Conditions</li>
                                <li>Privacy & Policy</li>
                                <li>Cancellation Policy</li>
                            </ul>
                        </div>

                        <div className="section contactUs">
                            <h3 className="footerTitle">Contact US</h3>

                            <ul>
                                <li>
                                    Contact Us
                                </li>
                                <li>
                                    Register-Member
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="copyrightSection">
                    © 2020 Copyright (c) All rights reserved.
                </div>

            </div>
            }

        </>
    )
}

export default Footer
