import React, { useEffect, useState } from "react"
import { Input } from "antd"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { searchedData } from "../store/mapSlice"
const mbxClient = require("@mapbox/mapbox-sdk")
const mbxStyles = require("@mapbox/mapbox-sdk/services/geocoding")

const HomePage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [searchIsLoading, setSearchIsLoading] = useState(false)

  const baseClient = mbxClient({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_ID,
  })
  const stylesService = mbxStyles(baseClient)

  useEffect(() => {
    document.title = "Estates Community"
  })

  const searchProperty = async (property) => {
    //dispatch all the auto generated lat long and bounds information.
    try {
      setSearchIsLoading(true)
      const mapReq = await stylesService.forwardGeocode({
        query: property,
        types: ["address"],
        limit: 1,
      })

      const response = await mapReq.send()
      const match = response.body
      setSearchIsLoading(false)
      dispatch(
        searchedData({ address: property, center: match.features[0].center, fromHome : true })
      )
      router.push("/search")
    } catch (err) {
      console.log(err)
      setSearchIsLoading(false)
    }
  }

  const { Search } = Input
  return (
    <div className="homePage">
      <div className="homeContent">
        <div className="homePageLogo">
          <img height="100px" width="100px" src="/favicon.ico" alt="logo" />
        </div>

        <div className="searchBox">
          <Search
            id="search"
            allowClear
            size="large"
            placeholder="Property Address..."
            onSearch={searchProperty}
            loading={searchIsLoading}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
