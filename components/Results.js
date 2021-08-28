import React from 'react'
import { Image, Button } from 'antd'



const Result = () => {

    return (
        <div className="singleResultCard">
            <div className="image&Button">
                <Image width={200} height={200} src="" />

                <Button>Add to Favorite</Button>
                <Button>Set Alarm</Button>
                <Button>Open Link</Button>
            </div>

            <div className="propertyInfo">
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

                </ul>

            </div>

            <div className="otherInfo">
                <div className="propertyInfo">
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
                        <li>DTC By Date : Craig Brooksby</li>
                        <li>DCA By : Craig Brooksby</li>
                        <li>DCA By Date: Craig Brooksby</li>
                        <li>Third Level By : Craig Brooksby</li>
                        <li>Third Level By Date: Craig Brooksby</li>
                        <li>Opening Bid: Craig Brooksby</li>
                        <li>Leading/Winning Bidder: Craig Brooksby</li>
                        <li>Leading/Winning Bidder Amount: Craig Brooksby</li>

                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Result
