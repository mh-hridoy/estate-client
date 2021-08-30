import React from 'react'
import { Image, Button, Checkbox } from 'antd'
import styles from '../styles/results.module.css'

const SingleResult = (props) => {

    const { info, lastSaleinfo, firstMortgageInfo, secondMortgageInfo } = props

    const dtcDate = info.firstComp && info.firstComp.date.split("T")[0]
    const dcaDate = info.secondComp && info.secondComp.date.split("T")[0]
    const thirdDcaDate = info.thridComp && info.thridComp.date.split("T")[0]
    const saleDate = lastSaleinfo && lastSaleinfo.saleDate.split("T")[0]

    // console.log(lastSaleinfo, firstMortgageInfo, secondMortgageInfo)

    return (
        <>
            <div className={styles.singleResultCard}>
                <Checkbox value={props.value} style={{ marginRight: "5px" }} />
                <div className={styles.imageContainer}>
                    <div className={styles.mainImage}>
                        <Image width={150} height={150} src="" />
                    </div>

                    <div className={styles.resultButton}>
                        <Button className={styles.btn}>Add to Favorite</Button>
                        <Button className={styles.btn}>Set Alarm</Button>
                        <Button className={styles.btn}>Open Link</Button>
                    </div>
                </div>

                <div className={styles.allInfo}>

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

                    <div className={styles.otherInfo}>
                        <ul>
                            <li>Trustee : {lastSaleinfo.trustee && lastSaleinfo.trustee}</li>
                            <li>Trustee Address : {lastSaleinfo.trusteeAddress && lastSaleinfo.trusteeAddress}</li>
                            <li>Sale Type : {lastSaleinfo.saleType}</li>
                            <li>Sale Date : {saleDate && saleDate}</li>
                            <li>Case No. : {lastSaleinfo.caseNumber && lastSaleinfo.caseNumber}</li>


                            <li>1st Lien Amount :  {firstMortgageInfo && firstMortgageInfo.lienAmount}</li>
                            <li>1st Lien Bank : {firstMortgageInfo && firstMortgageInfo.lender}</li>
                            <li>2nd Lien Amount : {secondMortgageInfo && secondMortgageInfo.lienAmount}</li>
                            <li>2nd Lien Bank : {secondMortgageInfo && secondMortgageInfo.lender}</li>


                            <li>HOA Name : {info.hoaLien.hoaName}</li>
                            <li>DTC By : {info.firstComp.firstDTC}</li>
                            <li>DTC By Date : {dtcDate}</li>
                            <li>DCA By : {info.secondComp.secondDCA}</li>
                        </ul>

                    </div>

                    <div className={styles.otherInfoTwo}>
                        <ul>
                            <li>DCA By Date: {dcaDate} </li>
                            <li>Third Check By : {info.thirdComp.thirdDCA} </li>
                            <li>Third Check Date: {thirdDcaDate} </li>
                            <li>Opening Bid : {lastSaleinfo.firstBidderInfo && lastSaleinfo.firstBidderInfo.amountOfBid} </li>
                            <li>County Value: {info.countyValue}</li>
                            <li>Zestimates: {info.zestimate}</li>
                            <li>CMA: {info.mortgageInfo.cmaArv}</li>
                            <li>NOS By: {lastSaleinfo.nosName && lastSaleinfo.nosName} </li>
                            <li>NOS By Date: {lastSaleinfo.nosDate && lastSaleinfo.nosDate} </li>
                            <li>Image By: {lastSaleinfo.firstBidderInfo.imby && lastSaleinfo.firstBidderInfo.imby}</li>
                            <li>Image By Date: {lastSaleinfo.firstBidderInfo.imByDate && lastSaleinfo.firstBidderInfo.imByDate}</li>
                            <li>1st Buy It: pending...</li>
                            <li>2nd Buy It: pending...</li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SingleResult
