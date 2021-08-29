import React from 'react'
import { Button } from 'antd'
import styles from '../styles/results.module.css'
import SingleResult from './SingleResult'




const Result = () => {

    return (
        <div className={styles.fullResult}>
            <div className={styles.paginationArea}>
                <p>Total records : 2455</p>
                <p>Pagination will be here :</p>

            </div>
            <div className={styles.operations}>
                <div className={styles.otherOper}>
                    <Button className={styles.btn}>Select All</Button>
                    <Button className={styles.btn}>Export</Button>
                </div>
                <div className={styles.merge}>
                    <Button className={styles.btn}>Merge Record ?</Button>
                </div>
            </div>

            <SingleResult />
            <SingleResult />
            <SingleResult />
            <SingleResult />

            <div className={styles.paginationArea}>
                <p>Total records : 2455</p>
                <p>Pagination will be here :</p>

            </div>
        </div>
    )
}

export default Result
