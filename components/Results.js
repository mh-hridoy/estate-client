import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Pagination } from 'antd'
import styles from '../styles/results.module.css'
import SingleResult from './SingleResult'


const plainOptions = []; //need to push all the results id.
const defaultCheckedList = [];


const Result = (props) => {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [checkAll, setCheckAll] = useState(false);

    const { properties, limit, totalSearchedProperty } = props

    const onChange = list => {
        setCheckedList(list)
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setCheckAll(e.target.checked);
        !checkAll ? setCheckAll(true) : setCheckAll(false)

    };

    // console.log(checkedList) //check the checkedlist here.
    //need to check totalProperty.

    return (
        <div className={styles.fullResult}>
            <div className={styles.paginationArea}>
                <p>Total records : {totalSearchedProperty}</p>
                <Pagination defaultCurrent={1} hideOnSinglePage={true} responsive={true} total={totalSearchedProperty} defaultPageSize={limit} showSizeChanger={false} />

            </div>
            <div className={styles.operations}>
                <div className={styles.otherOper}>
                    <Button >  <Checkbox onChange={onCheckAllChange} checked={checkAll}>
                        {checkedList.length !== plainOptions.length || checkedList.length == 0 ? "Check all" : "Uncheck all"}
                    </Checkbox> </Button>
                    <Button className={styles.btn}>Export</Button>
                </div>
                <div className={styles.merge}>
                    <Button className={styles.btn}>Merge Record ?</Button>
                </div>
            </div>

            <Checkbox.Group style={{ width: '100%' }} onChange={onChange} value={checkedList} >

                {/* send saleinfo and mortgage info from here */}

                {properties && properties.map((property) => {
                    const lastSaleinfo = property.saleinfo && property.saleinfo[property.saleinfo.length - 1]
                    const firstMortgageInfo = property.mortgageInfo[0] && property.mortgageInfo[0]
                    const secondMortgageInfo = property.mortgageInfo[1] && property.mortgageInfo[1]
                    return (
                        <SingleResult value={property._id} info={property} key={property._id} lastSaleinfo={lastSaleinfo} firstMortgageInfo={firstMortgageInfo && firstMortgageInfo} secondMortgageInfo={secondMortgageInfo && secondMortgageInfo} />
                    )
                })
                }

            </Checkbox.Group>

            <div className={styles.paginationArea} style={{ borderTop: "1px solid var(--optional-color)", paddingTop: "10px" }}>
                <p>Total records : {totalSearchedProperty}</p>
                <Pagination defaultCurrent={1} hideOnSinglePage={true} responsive={true} total={totalSearchedProperty} defaultPageSize={limit} showSizeChanger={false} />

            </div>
        </div>
    )
}

export default Result
