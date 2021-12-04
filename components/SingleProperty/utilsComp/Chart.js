import React, { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import axios from "axios"
import { useSelector } from "react-redux"
const Chart = () => {
  const [isLoading, setIsLoading] = useState(true)
  const token = useSelector((state) => state.user.token)
  const [monthlyData, setMonthlyData] = useState([])
  const allProperyData = []
  const monthlyRecord = []

  useEffect(() => {
    const getStates = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_MAIN_PROXY}/stats`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
           // withCredentials: true,
          }
        )
        for (let i = 0; i < labelValues.length; i++) {
          allProperyData.push({
            [labelValues[i]]: label[i],
            count: data.filter((item) => item.month == 1 + i)[0]
              ? data.filter((item) => item.month == 1 + i)[0].totalCreated
              : 0,
          })
        }
        allProperyData.forEach((obj) => monthlyRecord.push(obj.count))
        setMonthlyData(monthlyRecord)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    }
    getStates()
  }, [])

  const label = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]


  const labelValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const data = {
    labels: label,
    datasets: [
      {
        data: monthlyData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        // height: "100vh",
      }}
    >
      {isLoading && <h1 style={{ textAlign: "center" }}> Getting data.... </h1>}

      {!isLoading && (
        <div
          style={{
            width: "80%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Bar
            data={data}
            height={"20%"}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            width={"80%"}
          />
        </div>
      )}
    </div>
  )
}

export default Chart
