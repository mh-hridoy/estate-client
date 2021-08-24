import React from 'react'
import { Button } from 'antd'

const Card = (props) => {
    return (
        <div className="card" onClick={props.onClick}>
            <div className="titleSection">
                <div className="logo">
                    {props.icon}
                </div>

                <div className="title">
                    {props.title}
                </div>

            </div>

            <hr />

            <div className="description">
                {props.description}
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "15px 0" }}>
                <Button style={{ width: "70%" }} onClick={props.onClick}>Go</Button>
            </div>

        </div>
    )
}

export default Card
