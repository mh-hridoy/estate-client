import React from 'react'
import { Avatar, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'

const UserAvatar = (props) => {
    const router = useRouter()


    return (
        <Popover content={props.content} title="User Information" trigger="click" placement="bottom"  overlayStyle={{position : "fixed", margin :0, padding : 0}} >
            <Avatar style={{ backgroundColor: '#87d068', cursor: "pointer" }} icon={<UserOutlined />} className={`headerUser ${router.pathname.includes("dashboard") && "active"}`} />

        </Popover>
    )
}

export default UserAvatar
