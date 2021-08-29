import React from 'react'
import { Image, Button, Checkbox } from 'antd'
import styles from '../styles/results.module.css'

const SingleResult = (props) => {

    const { info } = props



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
                            <li>Trustee : {info.saleinfo[info.saleinfo.length - 1].trustee}</li>
                            <li>Trustee Address : {info.saleinfo[info.saleinfo.length - 1].trusteeAddress}</li>
                            <li>Sale Type : {info.saleinfo[info.saleinfo.length - 1].saleType}</li>
                            <li>Sale Date : {info.saleinfo[info.saleinfo.length - 1].saleDate}</li>
                            <li>Case No. : {info.saleinfo[info.saleinfo.length - 1].caseNumber}</li>
                            <li>1st Lien Amount :  {info.mortgageInfo[0].lienAmount}</li>
                            <li>1st Lien Bank : {info.mortgageInfo[0].lender}</li>
                            <li>2nd Lien Amount : {info.mortgageInfo[1].lienAmount}</li>
                            <li>2nd Lien Bank : {info.mortgageInfo[1].lender}</li>
                            <li>HOA Name : {info.hoaLien.hoaName}</li>
                            <li>DTC By : {info.firstComp.firstDTC}</li>
                            <li>DTC By Date : {info.firstComp.date}</li>
                            <li>DCA By : {info.secondComp.secondDCA}</li>
                        </ul>

                    </div>

                    <div className={styles.otherInfoTwo}>
                        <ul>
                            <li>DCA By Date: {info.secondComp.date} </li>
                            <li>Third Check By : {info.thirdComp.thirdDCA} </li>
                            <li>Third Check Date: {info.thirdComp.date} </li>
                            <li>Opening Bid : {info.saleinfo[info.saleinfo.length - 1].firstBidderInfo.amountOfBid} </li>
                            <li>County Value: {info.countyValue}</li>
                            <li>Zestimates: {info.zestimate}</li>
                            <li>CMA: {info.mortgageInfo.cmaArv}</li>
                            <li>NOS By: {info.saleinfo[info.saleinfo.length - 1].nosName} </li>
                            <li>NOS By Date: {info.saleinfo[info.saleinfo.length - 1].nosDate} </li>
                            <li>Image By: {info.saleinfo[info.saleinfo.length - 1].firstBidderInfo.imby}</li>
                            <li>Image By Date: {info.saleinfo[info.saleinfo.length - 1].firstBidderInfo.imByDate}</li>
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
