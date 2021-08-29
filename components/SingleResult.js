import React from 'react'
import { Image, Button } from 'antd'
import styles from '../styles/results.module.css'

const SingleResult = () => {
    return (
        <>
            <div className={styles.singleResultCard}>
                <input className={styles.propertyId} type="checkbox" id="propertyId" name="propertyId" value="propertyId" />
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
                            <li>Property Address : 308 jamse st</li>
                            <li>City : Charlotte</li>
                            <li>County : Wake</li>
                            <li>State : North Carolina</li>
                            <li>Zip : 65545</li>
                            <li>Year Built : 1999</li>
                            <li>Parcel : 2454xxxxx</li>
                            <li>Total Sqf : 2455</li>
                            <li>Lot/Acre : 1.2 acre</li>
                            <li>Owner Name : Craig Brooksby</li>
                            <li>Borrower Name : Craig Brooksby</li>
                            <li>Borrower Name : Craig Brooksby</li>


                        </ul>

                    </div>

                    <div className={styles.otherInfo}>
                        <ul>
                            <li>Trustee : Some trustee</li>
                            <li>Trustee Address : Charlotte</li>
                            <li>Sale Type : Some Type</li>
                            <li>Sale Date : Some Date</li>
                            <li>Case No. : 20cvd250</li>
                            <li>1st Lien Amount : 1999</li>
                            <li>1st Lien Bank : 2454xxxxx</li>
                            <li>2nd Lien Amount : 1999</li>
                            <li>2nd Lien Bank : 2454xxxxx</li>
                            <li>HOA Name : Craig Brooksby</li>
                            <li>DTC By : Craig Brooksby</li>
                            <li>DTC By : Craig Brooksby</li>

                        </ul>

                    </div>

                    <div className={styles.otherInfoTwo}>
                        <ul>
                            <li>DTC By Date : Craig Brooksby</li>
                            <li>DCA By : Craig Brooksby</li>
                            <li>DCA By Date: Craig Brooksby</li>
                            <li>Third Level By : Craig Brooksby</li>
                            <li>Third Level By Date: Craig Brooksby</li>
                            <li>Opening Bid: Craig Brooksby</li>
                            <li>Leading/Winning Bidder: Craig Brooksby</li>
                            <li>Leading/Winning Bidder Amount: Craig Brooksby</li>
                            <li>Leading/Winning Bidder Amount: Craig Brooksby</li>
                            <li>Leading/Winning Bidder Amount: Craig Brooksby</li>
                            <li>Leading/Winning Bidder Amount: Craig Brooksby</li>
                            <li>Leading/Winning Bidder Amount: Craig Brooksby</li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SingleResult
