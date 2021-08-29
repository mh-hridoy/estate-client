import React, { useState } from 'react'
import { Button, Checkbox } from 'antd'
import styles from '../styles/results.module.css'
import SingleResult from './SingleResult'


const plainOptions = ['1', '2', '3', '4'];
const defaultCheckedList = [];


const Result = () => {
    const [checkedList, setCheckedList] = useState(defaultCheckedList);

    const [checkAll, setCheckAll] = useState(false);


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
                <p>Total records : 2455</p>
                <p>Pagination will be here :</p>

            </div>
            <div className={styles.operations}>
                <div className={styles.otherOper}>
                    <Button >  <Checkbox onChange={onCheckAllChange} checked={checkAll}>
                        Check all
                    </Checkbox> </Button>
                    <Button className={styles.btn}>Export</Button>
                </div>
                <div className={styles.merge}>
                    <Button className={styles.btn}>Merge Record ?</Button>
                </div>
            </div>



            <Checkbox.Group style={{ width: '100%' }} onChange={onChange} value={checkedList} >

                <SingleResult value="1" />
                <SingleResult value="2" />
                <SingleResult value="3" />
                <SingleResult value="4" />

            </Checkbox.Group>


            <div className={styles.paginationArea} style={{ borderTop: "1px solid var(--optional-color)", paddingTop: "10px" }}>
                <p>Total records : 2455</p>
                <p>Pagination will be here :</p>

            </div>
        </div>
    )
}

export default Result
