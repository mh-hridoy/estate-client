import React, { useEffect, useState } from "react"
import { BellOutlined } from "@ant-design/icons"
import { Popover, Badge, Button, message } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { readNotification } from "../store/userInfoSlice"

import axios from "axios"

const NotiBar = () => {
  const [isReadNotification, setIsReadNotification] = useState(false)
  const [clickedNotificationId, setClickedNotificationId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const buyItNotification = useSelector(
    (state) => state.user.buyItNotifications
  )
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
    

  useEffect(() => {
    if (buyItNotification !== null && buyItNotification.lenght != 0) {
      const allUnread = buyItNotification.filter((item) => item.status == true)

      setCount(allUnread.length)
    }
  }, [
    buyItNotification !== null && buyItNotification.lenght != 0,
    buyItNotification,
  ])

  const redirectToProperty = (id, propertyId) => {
    setClickedNotificationId(id)
    setIsReadNotification(true)
    const hostname = window.location.origin
    const propertyLink = `${hostname}/home/property/${propertyId}`
    window.open(propertyLink, "_blank")
  }

  useEffect(() => {
    if (isReadNotification && clickedNotificationId !== null) {
      const body = {
        notiId: clickedNotificationId,
      }
      const readNoti = async () => {
        setIsLoading(true)
        try {
          await axios.post(
            `${process.env.NEXT_PUBLIC_MAIN_PROXY}/read-notification`,
            body,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          )

      
           const selectedNotiIndex = buyItNotification.findIndex(
             (noti) => noti._id == clickedNotificationId
           )
      
          dispatch(readNotification({ index: selectedNotiIndex, status: false}))
          setIsLoading(false)
          setIsReadNotification(false)
          setClickedNotificationId(null)
        } catch (err) {
          setIsReadNotification(false)
          setIsLoading(false)
          setClickedNotificationId(null)

          console.log(err)
          message.error("Something went wrong!")
        }
      }
      readNoti()
    }
  }, [isReadNotification && clickedNotificationId !== null])
  const content = (
    <>
      {buyItNotification != null && buyItNotification.lenght !== 0 ? (
        buyItNotification.map((notification, inx) => {
          return (
            <div
              key={inx}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "75px",
                width: "250px",
                borderBottom: "1px solid #999",
                overflow: "hidden",
                padding: 5,
                cursor: "pointer",
                position: "relative",
                backgroundColor: notification.status == true ? "#fff" : "#eee",
              }}
            >
              <div
                onClick={() =>
                  redirectToProperty(notification._id, notification.propertyId)
                }
              >
                <h2 style={{ fontSize: 14, fontWeight: "bold" }}>
                  {notification.title}
                </h2>
                <h2 style={{ fontSize: 12 }}>{notification.message}</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  right: 0,
                  top: -5,
                }}
              >
                <Button
                  style={{ fontSize: 10 }}
                  type="link"
                  loading={
                    notification._id == clickedNotificationId
                      ? isLoading
                      : false
                  }
                  onClick={() => {
                    setClickedNotificationId(notification._id)
                    setIsReadNotification(true)
                  }}
                >
                  {notification.status == true
                    ? "Marks as read"
                    : "Mark as unread"}
                </Button>
                <Button style={{ fontSize: 10 }} type="link">
                  Delete
                </Button>
              </div>
            </div>
          )
        })
      ) : (
        <>
            <h5>There are no notifications to show.</h5>
        </>
      )}
    </>
  )
  return (
    <Popover
      
      content={content}
      title="Notifications"
      overlayInnerStyle={{ maxHeight: "60vh", overflow: "auto", margin: 0, transform: "translateX(-10%)", padding: 0 }}
      overlayStyle={{position : "fixed", padding : 0}}
      trigger="click"
      placement="bottom"
    >
      <Badge showZero count={count}>
        <div className="notiIcon">
          <BellOutlined style={{ fontSize: "20px" }} />
        </div>
      </Badge>
    </Popover>
  )
}

export default NotiBar
