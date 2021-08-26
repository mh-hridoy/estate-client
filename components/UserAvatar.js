import React from 'react'
import { Avatar, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'

// const content = (
//     <div>
//         <p>Content</p>
//         <p>Content</p>
//     </div>
// );
const UserAvatar = (props) => {
    const router = useRouter()


    return (
        <Popover content={props.content} title="User Information" trigger="hover" placement="bottom" >
            <Avatar style={{ backgroundColor: '#87d068', cursor: "pointer" }} icon={<UserOutlined />} className={`headerUser ${router.pathname === "/home/dashboard" || router.pathname.includes("dashboard") && "active"}`} />

        </Popover>
    )
}

export default UserAvatar
