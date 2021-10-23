import React, { useState, useEffect } from 'react'
import { Affix, Menu } from 'antd'
import { useRouter } from 'next/router'
import { DollarOutlined, LineChartOutlined, NotificationOutlined, PlusOutlined, SearchOutlined, StarOutlined } from '@ant-design/icons'

const MenuInsideProtected = (props) => {
    const { Item } = Menu;
    const router = useRouter()
  const [current, setCurrent] = useState(null)

    const pathname = router.pathname

    const handleClick = e => {
        router.push(e.key)
        setCurrent(e.key)
    }


    useEffect(() => {
        setCurrent(pathname)

    }, [pathname])

    return (
      <>
        <Affix offsetTop={58}>
          <Menu
            onClick={handleClick}
            selectedKeys={current}
            mode="horizontal"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Item key="/home/dashboard/search" icon={<SearchOutlined />}>
              Search Property
            </Item>
            <Item
              key= "/home/dashboard/caseInput"
              icon={<PlusOutlined />}
            >
              Case Input
            </Item>
            <Item key="buyIt" icon={<DollarOutlined />}>
              BuyIt Request
            </Item>
            <Item key="favorite" icon={<StarOutlined />}>
              Favorite Property
            </Item>
            <Item key="alarm" icon={<NotificationOutlined />}>
              Show Alarm
            </Item>
            <Item key="report" icon={<LineChartOutlined />}>
              Report
            </Item>
            <Item key="AAreport" icon={<LineChartOutlined />}>
              AA Report
            </Item>
          </Menu>
        </Affix>

        {props.children}
      </>
    )
}

export default MenuInsideProtected
