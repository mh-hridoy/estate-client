import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Pagination } from 'antd'
import styles from '../styles/results.module.css'
import SingleResult from './SingleResult'

//need to push all the results id.
const plainOptions = [];
const defaultCheckedList = []; //push value after click on the cheked element.

const Result = (props) => {
    //use let newPlainOptins... and push the data from map funtion. otherwise it wont render the data with the very first render.
    let newPlainOptins;
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [checkAll, setCheckAll] = useState(false);
    let newDefaultCheckedList = [...new Set(checkedList)]


    const { properties, limit, totalSearchedProperty } = props

    const onChange = list => {
        setCheckedList(list)
        if (list.length == newPlainOptins.length) {
            setCheckAll(true);
        } else {
            setCheckAll(false);

        }
    };

    //having trouble when checkinig all and uncheck one value. 
    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? newPlainOptins : [])

        setCheckAll(e.target.checked);
        !checkAll ? setCheckAll(true) : setCheckAll(false)
    };

    // console.log(newDefaultCheckedList)


    return (
        <div className={styles.fullResult}>
            <div className={styles.paginationArea}>
                <p>Total records : {totalSearchedProperty}</p>
                <Pagination defaultCurrent={1} hideOnSinglePage={true} responsive={true} total={totalSearchedProperty} defaultPageSize={limit} showSizeChanger={false} />

            </div>
            <div className={styles.operations}>
                <div className={styles.otherOper}>
                    <Button >  <Checkbox onChange={onCheckAllChange} checked={checkAll}  > {!checkAll ? "Check all" : "Uncheck all"}
                    </Checkbox>
                    </Button>
                    <Button className={styles.btn}>Export</Button>
                </div>
                <div className={styles.merge}>
                    <Button className={styles.btn}>Merge Record ?</Button>
                </div>
            </div>

            <Checkbox.Group style={{ width: '100%' }} onChange={onChange} value={checkedList} >

                {properties && properties.map((property) => {
                    plainOptions.push(property._id)
                    //Push the data from here. Othrwise it wont work for the first render.. See above newPlainOptins variable.
                    newPlainOptins = [...new Set(plainOptions)]
                    return (
                        <SingleResult value={property._id} info={property} key={property._id} />
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

export default Result;
