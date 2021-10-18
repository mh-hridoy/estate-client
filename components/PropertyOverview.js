import React from "react";
import styles from "../styles/propertyOverview.module.css";
import { Drawer, Space, Button } from "antd";
import CarouselSection from "./CarouselSection";
import PropertyMap from "./SingleProperty/PropertyMap";

const PropertyOverview = (props) => {
  const { closeOverviewDrawer, showOverviewDrawer, property } = props;
  console.log(property)
  const info = property[0];
  // const allImageURI = []
  const geo = info && info.geo;

  const lat = geo && geo.lat;
  const long = geo && geo.long;
  // info.propertyImages.length !== 0 && info.propertyImages.forEach((image) => allImageURI.push(image.Location))

  const lastSaleinfo =
    info && info.saleinfo && info.saleinfo[info.saleinfo.length - 1];
  const firstMortgageInfo = info && info.firstmortgageInfo;
  const secondMortgageInfo = info && info.secondMortgageInfo;
  const hoaLien = info && info.hoaLien;
  const lastAssesment =
    info && info.assesmentAndTaxes[info.assesmentAndTaxes.length - 1];
  const lastBidder =
    lastSaleinfo &&
    lastSaleinfo.otherBidderInfo[lastSaleinfo.otherBidderInfo.length - 1];

  const saleDate =
    lastSaleinfo &&
    lastSaleinfo.saleDate &&
    lastSaleinfo.saleDate.split("T")[0];

  return (
    <Drawer
      title={`${info && info.propertyAddress.toUpperCase()} (Overview)`}
      placement="top"
      width={200}
      height={500}
      onClose={closeOverviewDrawer}
      visible={showOverviewDrawer}
      footerStyle={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
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
              <li>Property Address : {info && info.propertyAddress}</li>
              <li>City : {info && info.city}</li>
              <li>County : {info && info.county}</li>
              <li>State : {info && info.state}</li>
              <li>Zip : {info && info.zip}</li>
              <li>Year Built : {info && info.yearBuilt}</li>
              <li>Parcel : {info && info.parcelId}</li>
              <li>Total Sqf : {info && info.totalSqf}</li>
              <li>Lot/Acre : {info && info.lotSqf}</li>
              <li>Owner Name : {info && info.ownerFullName}</li>
              <li>Borrower Name : {info && info.borrowerName}</li>
              <li>Bed : {info && info.bed} </li>
              <li>Bath : {info && info.bath}</li>
              <li>CMA : {firstMortgageInfo && firstMortgageInfo.cmaArv} </li>
              <li>First Check By : {info && info.firstComp.firstDTC}</li>
              <li>Second Check By : {info && info.secondComp.secondDCA}</li>
              <li>Third Check By : {info && info.thirdComp.thirdDCA}</li>
            </ul>
          </div>

          <div className={styles.comparisonSection}>
            <h2>Comparable Infomations </h2>
            <hr />

            <ul>
              <li>
                Property Tax Owed :{" "}
                {lastAssesment && lastAssesment.propertyTaxOwed}
              </li>
              <li>Owed Year : {lastAssesment && lastAssesment.owedYear}</li>
              <li>
                Tax Assessed : {lastAssesment && lastAssesment.taxAssessed}
              </li>
              <li>Tax Year : {lastAssesment && lastAssesment.taxYear}</li>
              <li>HOA Name : {hoaLien && hoaLien.hoaName}</li>
              <li>HOA Amount : {hoaLien && hoaLien.hoaLienAmount}</li>
              <li>HOA Date : {hoaLien && hoaLien.hoaLienDate}</li>
              <li>
                1st Lien Lender :{" "}
                {firstMortgageInfo && firstMortgageInfo.lender}
              </li>
              <li>
                1st Lien Amount :{" "}
                {firstMortgageInfo && firstMortgageInfo.lienAmount}
              </li>
              <li>
                2nd Lien Lender :{" "}
                {secondMortgageInfo && secondMortgageInfo.lender}
              </li>
              <li>
                2st Lien Amount :{" "}
                {secondMortgageInfo && secondMortgageInfo.lienAmount}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.compareAndOtherAndMap}>
          <div className={styles.compareAndOther}>
            <div className={styles.imageSection}>
              <h2>Property Images</h2>
              <hr />
              <CarouselSection images={info && info.propertyImages} />
            </div>
          </div>
          <div className={styles.otherInfo}>
            <h2>Sale & Other Infomations </h2>
            <hr />
            <ul>
              <li>Sale Date : {saleDate}</li>
              <li>Sale Time : {lastSaleinfo && lastSaleinfo.saleTime}</li>
              <li>Trustee Name : {lastSaleinfo && lastSaleinfo.Trustee}</li>
              <li>NOS By Name : {lastSaleinfo && lastSaleinfo.nosName}</li>
              <li>OB Amount : {lastSaleinfo && lastSaleinfo.amountOfBid}</li>
              <li>OB By : {lastSaleinfo && lastSaleinfo.nameOfPurchaser}</li>
              <li>
                Leading/Winning Bidder :{" "}
                {lastBidder && lastBidder.nameOfUpsetBidder}
              </li>
              <li>
                Leading/Winning Bid Amount :{" "}
                {lastBidder && lastBidder.amountOfBid}
              </li>
              <li>1st Buy it by : Pending...</li>
            </ul>
          </div>

          <div className={styles.mapSection}>
            <h2>Property Location </h2>
            <hr />

            <div className={styles.propertyMap}>
              <PropertyMap lat={lat} long={long} />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default PropertyOverview;
