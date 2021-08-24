import React from 'react'
import { Avatar, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';


// const content = (
//     <div>
//         <p>Content</p>
//         <p>Content</p>
//     </div>
// );
const UserAvatar = (props) => {


    return (
        <Popover content={props.content} title="User Information" trigger="click" placement="bottom" >
            <Avatar style={{ backgroundColor: '#87d068', cursor: "pointer" }} icon={<UserOutlined />} />

        </Popover>
    )
}

export default UserAvatar
