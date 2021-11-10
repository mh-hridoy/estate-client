import React from 'react'
import { Image, Button, Checkbox } from 'antd'
import styles from '../styles/results.module.css'

const SingleResult = (props) => {

    const { info } = props
    const image = info.propertyImages.length !== 0 ? info.propertyImages[0].Location : "/NoImage.jpg"


    const lastSaleinfo = info.saleinfo && info.saleinfo[info.saleinfo.length - 1]
    const firstMortgageInfo = info.firstmortgageInfo && info.firstmortgageInfo
    const secondMortgageInfo = info.secondMortgageInfo && info.secondMortgageInfo


    const dtcDate = info.firstComp && info.firstComp.date && info.firstComp.date.split("T")[0]
    const dcaDate = info.secondComp && info.secondComp.date && info.secondComp.date.split("T")[0]
    const thirdDcaDate = info.thridComp && info.thridComp.date && info.thridComp.date.split("T")[0]
    const saleDate = lastSaleinfo && lastSaleinfo.saleDate && lastSaleinfo.saleDate.split("T")[0]

    // console.log(lastSaleinfo, firstMortgageInfo, secondMortgageInfo)

  const redirectToProperty = (id) => {
        const hostname = window.location.origin
        const propertyLink = `${hostname}/home/property/${id}`
        window.open(propertyLink, '_blank')
    }
    return (
      <>
        <div className={styles.singleResultCard}>
          <Checkbox value={props.value} style={{ marginRight: "5px" }} />
          <div className={styles.imageContainer}>
            <div className={styles.mainImage}>
              <Image width={150} height={150} src={image} />
            </div>

            <div className={styles.resultButton}>
              <Button className={styles.btn}>Add to Favorite</Button>
              <Button className={styles.btn}>Set Alarm</Button>
              <Button
                className={styles.btn}
                onClick={() => redirectToProperty(info._id)}
              >
                Open Link
              </Button>
            </div>
          </div>

          <div className={styles.allInfo} onClick={() => props.onClick(info)}>
            <div className={styles.propertyInfo}>
              <ul>
                <li>Property Address : {info.propertyAddress}</li>
                <li>City : {info.city}</li>
                <li>County : {info.county}</li>
                <li>State : {info.state}</li>
                <li>Zip : {info.zip}</li>
                <li>Year Built : {info.yearBuilt}</li>
                <li>Parcel : {info.parcelId}</li>
                <li>Total Sqf : {info.totalSqf}</li>
                <li>Lot/Acre : {info.lotSqf}</li>
                <li>Owner Name : {info.ownerFullName}</li>
                <li>Borrower Name : {info.borrowerName}</li>
                <li>Bed : {info.bed} </li>
                <li>Bath : {info.bath}</li>
              </ul>
            </div>

            <div
              className={styles.otherInfo}
              onClick={() => props.onClick(info._id)}
            >
              <ul>
                <li>Trustee : {lastSaleinfo && lastSaleinfo.trustee}</li>
                <li>
                  Trustee Address :{" "}
                  {lastSaleinfo && lastSaleinfo.trusteeAddress}
                </li>
                <li>Sale Type : {lastSaleinfo && lastSaleinfo.saleType}</li>
                <li>Sale Date : {saleDate && saleDate}</li>
                <li>Case No. : {lastSaleinfo && lastSaleinfo.caseNumber}</li>

                <li>
                  1st Lien Amount :{" "}
                  {firstMortgageInfo && firstMortgageInfo.lienAmount}
                </li>
                <li>
                  1st Lien Bank :{" "}
                  {firstMortgageInfo && firstMortgageInfo.lender}
                </li>
                <li>
                  2nd Lien Amount :{" "}
                  {secondMortgageInfo && secondMortgageInfo.lienAmount}
                </li>
                <li>
                  2nd Lien Bank :{" "}
                  {secondMortgageInfo && secondMortgageInfo.lender}
                </li>

                <li>HOA Name : {info && info.hoaLien.hoaName}</li>
                <li>DTC By : {info && info.firstComp.firstDTC}</li>
                <li>DTC By Date : {dtcDate}</li>
                <li>DCA By : {info && info.secondComp.secondDCA}</li>
              </ul>
            </div>

            <div
              className={styles.otherInfoTwo}
              onClick={() => props.onClick(info._id)}
            >
              <ul>
                <li>DCA By Date: {dcaDate} </li>
                <li>Third Check By : {info.thirdComp.thirdDCA} </li>
                <li>Third Check Date: {thirdDcaDate} </li>
                <li>
                  Opening Bid : {lastSaleinfo && lastSaleinfo.amountOfBid}{" "}
                </li>
                <li>County Value: {info && info.countyValue}</li>
                <li>Zestimates: {info && info.zestimate}</li>
                <li>CMA: {firstMortgageInfo && firstMortgageInfo.cmaArv}</li>
                <li>NOS By: {lastSaleinfo && lastSaleinfo.nosName} </li>
                <li>NOS By Date: {lastSaleinfo && lastSaleinfo.nosDate} </li>
                <li>Image By: {lastSaleinfo && lastSaleinfo.fimby}</li>
                <li>Image By Date: {lastSaleinfo && lastSaleinfo.fimByDate}</li>
                <li>
                  1st Buy It:  
                  {info.buyItUser && info.buyItUser.length !==0 ? info.buyItUser[0].name
                    : ""}
                </li>
                {/* <li>2nd Buy It: {info.buyItUser && info.buyItUser.length > 1  ? info.buyItUser[1].name : ""}</li> */}
                <li>Geo: {info.geo && info.geo.long}</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
}

export default SingleResult
