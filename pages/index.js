import React from 'react'
import { Input } from 'antd'

const HomePage = () => {
    const { Search } = Input
    return (
        <div className="homePage">

            <div className="homeContent">
                <div className="homePageLogo">
                    <img height="100px" width="100px" src="/favicon.ico" alt="logo" />
                </div>

                <div className="searchBox">
                    <Search allowClear size="large"
                        placeholder="308 James Place ....." />
                </div>
            </div>

        </div>
    )
}

export default HomePage
