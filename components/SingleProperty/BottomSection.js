import React, { useState, useEffect } from "react"
import { Button, Space, message, Spin } from 'antd'
import { useSelector } from "react-redux"
import axios from "axios"

function BottomSection() {
  const [hasBuyit, setHasBuyIt] = useState(false)
  const [isLoading, setIsLoading]  = useState(true)
  const user = useSelector((state) => state.user.user._id)
  const propertyId = useSelector((state) => state.property.propertyId)
  const token = useSelector((state) => state.user.token)

  const buyItHandler = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_PROXY}/buy-it/${propertyId}`,
        {userId  : user},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setIsLoading(false)
      message.success(data)
 setHasBuyIt(true)
    } catch (err) {
      console.log(err)
            setIsLoading(false)

      message.error({
        content: err.response
          ? err.response.data.message
          : "Something went wrong.",
        duration: "3.5",
      })
      }
  }
  
  const passOnHandler = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_PROXY}/pass-on-it/${propertyId}`,
        { userId: user },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setIsLoading(false)
      message.success(data)
      setHasBuyIt(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)

      message.error({
        content: err.response
          ? err.response.data.message
          : "Something went wrong.",
        duration: "3.5",
      })
    }
  }

  useEffect(() => {
    const checkIfHasBuyIt = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_MAIN_PROXY}/check-buy-it/${propertyId}`,
          {userId: user},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        if (data == "Y") {
            
          setHasBuyIt(true)
        } else {
          setHasBuyIt(false)

        }
                setIsLoading(false)

      } catch (err) {
                        setIsLoading(false)

        console.log(err)
      }

    }
    setTimeout(() => {    checkIfHasBuyIt()
}, 5000)
  }, [])
    
    return (
      <div
        style={{
          backgroundColor: "#999",
          margin: 28,
          padding: 5,
          position: "sticky",
          bottom: 0,
          left: 0,
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <Space>
            <Button
              disabled={isLoading}
                            onClick={hasBuyit ? passOnHandler : buyItHandler}
            >
              {isLoading ? <Spin/> : hasBuyit ? "Pass on" : "Buy it"}
            </Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Space>
        </div>
      </div>
    )
}

export default BottomSection
