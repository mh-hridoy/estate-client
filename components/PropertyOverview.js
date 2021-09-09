import React from 'react'
import styles from '../styles/propertyOverview.module.css'
import { Drawer, Space, Button } from 'antd'
import CarouselSection from './CarouselSection'

const PropertyOverview = (props) => {
    const { closeOverviewDrawer, showOverviewDrawer, property } = props


    const info = property[0]


    const lastSaleinfo = info.saleinfo && info.saleinfo[info.saleinfo.length - 1]
    const firstMortgageInfo = info.firstmortgageInfo && info.firstmortgageInfo
    const secondMortgageInfo = info.secondMortgageInfo && info.secondMortgageInfo
    const hoaLien = info.hoaLien
    const lastAssesment = info.assesmentAndTaxes[info.assesmentAndTaxes.length - 1]
    const lastBidder = lastSaleinfo.otherBidderInfo && lastSaleinfo.otherBidderInfo[lastSaleinfo.otherBidderInfo.length - 1]


    const saleDate = lastSaleinfo && lastSaleinfo.saleDate.split("T")[0]


    return (
        <Drawer title={`${info.propertyAddress.toUpperCase()} (Overview)`}
            placement="top"
            width={200}
            height={500}
            onClose={closeOverviewDrawer}
            visible={showOverviewDrawer}
            footerStyle={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}
            footer={
                <Space size={20}>
                    <Button onClick={closeOverviewDrawer}>Back</Button>
                    <Button type="primary" onClick={closeOverviewDrawer}>
                        Check Record
                    </Button>
                </Space>
            }
        >

            <div className={styles.fullPropertyOverView}>
                <div className={styles.propertyAndImage}>
                    <div className={styles.propertyInfoSection}>
                        <h2>Property Infomations</h2>
                        <hr />
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
                            <li>CMA : {firstMortgageInfo.cmaArv} </li>
                            <li>First Check By : {info.firstComp.firstDTC}</li>
                            <li>Second Check By : {info.secondComp.secondDCA}</li>
                            <li>Third Check By : {info.thirdComp.thirdDCA}</li>
                        </ul>
                    </div>

                    <div className={styles.comparisonSection}>
                        <h2>Comparable Infomations </h2>
                        <hr />

                        <ul>
                            <li>Property Tax Owed : {lastAssesment.propertyTaxOwed}</li>
                            <li>Owed Year : {lastAssesment.owedYear}</li>
                            <li>Tax Assessed : {lastAssesment.taxAssessed}</li>
                            <li>Tax Year : {lastAssesment.taxYear}</li>
                            <li>HOA Name : {hoaLien.hoaName}</li>
                            <li>HOA Amount : {hoaLien.hoaLienAmount}</li>
                            <li>HOA Date : {hoaLien.hoaLienDate}</li>
                            <li>1st Lien Lender : {firstMortgageInfo.lender}</li>
                            <li>1st Lien Amount : {firstMortgageInfo.lienAmount}</li>
                            <li>2nd Lien Lender : {secondMortgageInfo.lender}</li>
                            <li>2st Lien Amount : {secondMortgageInfo.lienAmount}</li>

                        </ul>

                    </div>


                </div>

                <div className={styles.compareAndOtherAndMap}>

                    <div className={styles.compareAndOther}>
                        <div className={styles.imageSection}>
                            <h2>Property Images</h2>
                            <hr />
                            <CarouselSection />
                        </div>

                    </div>
                    <div className={styles.otherInfo}>
                        <h2>Sale & Other Infomations </h2>
                        <hr />
                        <ul>
                            <li>Sale Date : {saleDate}</li>
                            <li>Sale Time : {lastSaleinfo.saleTime}</li>
                            <li>Trustee Name : {lastSaleinfo.Trustee}</li>
                            <li>NOS By Name : {lastSaleinfo.nosName}</li>
                            <li>OB Amount : {lastSaleinfo.firstBidderInfo.amountOfBid}</li>
                            <li>OB By : {lastSaleinfo.firstBidderInfo.nameOfPurchaser}</li>
                            <li>Leading/Winning Bidder : {lastBidder && lastBidder.nameOfUpsetBidder}</li>
                            <li>Leading/Winning Bid Amount : {lastBidder && lastBidder.amountOfBid}</li>
                            <li>1st Buy it by : Pending...</li>

                        </ul>
                    </div>

                    <div className={styles.mapSection}>
                        <h2>Property Location </h2>
                        <hr />

                        <div className={styles.propertyMap}>

                        </div>
                    </div>

                </div>

            </div>
        </Drawer >
    )
}

export default PropertyOverview
