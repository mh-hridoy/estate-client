import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Pagination } from 'antd'
import styles from '../styles/results.module.css'
import SingleResult from './SingleResult'


const plainOptions = []; //need to push all the results id.
const defaultCheckedList = [];


const Result = (props) => {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [checkAll, setCheckAll] = useState(false);

    const { properties, totalProperty, limit } = props


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

    return (
        <div className={styles.fullResult}>
            <div className={styles.paginationArea}>
                <p>Total records : {totalProperty}</p>
                <Pagination defaultCurrent={1} hideOnSinglePage={true} responsive={true} total={totalProperty} defaultPageSize={limit} showSizeChanger={false} />

            </div>
            <div className={styles.operations}>
                <div className={styles.otherOper}>
                    <Button >  <Checkbox onChange={onCheckAllChange} checked={checkAll}>
                        {checkedList.length !== plainOptions.length ? "Check all" : "Uncheck all"}
                    </Checkbox> </Button>
                    <Button className={styles.btn}>Export</Button>
                </div>
                <div className={styles.merge}>
                    <Button className={styles.btn}>Merge Record ?</Button>
                </div>
            </div>



            <Checkbox.Group style={{ width: '100%' }} onChange={onChange} value={checkedList} >

                {properties && properties.map((property) => {
                    plainOptions.push(property._id)
                    return (
                        <SingleResult value={property._id} info={property} />
                    )
                })
                }

            </Checkbox.Group>


            <div className={styles.paginationArea} style={{ borderTop: "1px solid var(--optional-color)", paddingTop: "10px" }}>
                <p>Total records : {totalProperty}</p>
                <Pagination defaultCurrent={1} hideOnSinglePage={true} responsive={true} total={totalProperty} defaultPageSize={limit} showSizeChanger={false} />

            </div>
        </div>
    )
}

export default Result
