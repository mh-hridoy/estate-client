import React from 'react'
import ProtectedPage from '../../../components/ProtectedPage'
import { useSelector } from 'react-redux'
import { DollarOutlined, LineChartOutlined, NotificationOutlined, PlusOutlined, SearchOutlined, StarOutlined } from '@ant-design/icons'
import Card from '../../../components/Card'
import { useRouter } from 'next/router'


const dashboard = () => {
    const user = useSelector((state) => state.user.user)
    const router = useRouter()

    return (
      <ProtectedPage>
        <h1 style={{ textAlign: "center" }}>
          Welcome {user && user.name} ! Choose what you want to do:
        </h1>

        <div className="cardContainer">
          <Card
            onClick={() => router.push("dashboard/search")}
            icon={<SearchOutlined />}
            title="Seach"
            description=" if you're looking for a record or property Click this"
          />
          <Card
            onClick={() => router.push("dashboard/caseInput")}
            icon={<PlusOutlined />}
            title="Case Input"
            description=" if you want to add properties , then click on this"
          />
          <Card
            icon={<DollarOutlined />}
            title="Buy It Requests"
            description=" if you want looking buy it request in the system, Click this.."
          />
          <Card
            icon={<StarOutlined />}
            title="My Favorite"
            description="Click here to check all your favorite properties that you marked on this site."
          />
          <Card
            icon={<NotificationOutlined />}
            title="Show Alarm"
            description="Click here to check all your set Alarmed properties that you marked on this site."
          />
          <Card
            onClick={() => router.push("dashboard/report")}
            icon={<LineChartOutlined />}
            title="Report"
            description="Click here to check reports ."
          />
          <Card
            icon={<LineChartOutlined />}
            title="AA Report"
            description="Click here to check reports AA reports ."
          />
        </div>
      </ProtectedPage>
    )
}

export default dashboard
