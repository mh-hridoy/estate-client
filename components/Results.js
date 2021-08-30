import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Pagination } from 'antd'
import styles from '../styles/results.module.css'
import SingleResult from './SingleResult'
import MergeModal from './MergeModal';
import WarningModal from './WarningModal';

//need to push all the results id.
const plainOptions = [];
const defaultCheckedList = []; //push value after click on the cheked element.

const Result = (props) => {
    //use let newPlainOptins... and push the data from map funtion. otherwise it wont render the data with the very first render.
    let newPlainOptins;
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [checkAll, setCheckAll] = useState(false);
    const [visible, setVisible] = useState(false)
    const [mergerWarning, setMergeWarning] = useState("")
    const [warningModal, showWarningModal] = useState(false)

    const [selectedForMerge, setSelectedForMerge] = useState(null)
    const [warnToMerge, setWarnToMerge] = useState(false)
    const [warnToMergeMessage, setWarnToMergeMessage] = useState("")
    const [modalLoading, setModalLoading] = useState(false)
    const newDefaultCheckedList = [...new Set(checkedList)] // will use this to check the full list.



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

    const openMergeModal = () => {
        if (newDefaultCheckedList.length === 0) {
            setVisible(false)
            showWarningModal(true)

            setMergeWarning("Please first select one property to merge.")
        } else {
            showWarningModal(false)
            setVisible(true)

        }
    }

    const handleCancel = () => {
        setVisible(false)

    }

    const handleSubmit = () => {
        setWarnToMergeMessage(`Are you sure you want to merge ${newDefaultCheckedList.length > 1 ? "these records" : "this record"} !?`)
        setWarnToMerge(true)

    }

    const handleTerminate = () => {
        showWarningModal(false)
    }

    const sendReqToMerge = () => {
        //send req to backend

    }

    //this will check all the properties._id and if it matched with newDefaultCheckedList(id) then it will stage the data. //Do NOT USE EVERY OR DO NOT CHNAGE THE ORDER OF FILTER. LIKE newDefaultCheckedList.filter && properties.some ***DONT DO THAT. IT WILL RETURN ONLY ID SINCE ITS FILTERING ONLY ID.
    const mergeThisRecord = properties.filter(({ _id: id1 }) => newDefaultCheckedList.some((id2) => id2 === id1));

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
                    <Button onClick={openMergeModal} className={styles.btn}> {newDefaultCheckedList.length !== 0 ? "Merge Selected?" : "Merge Record?"} </Button>
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

            {visible && <MergeModal visible={visible} handleCancel={handleCancel} modalLoading={modalLoading} handleSubmit={handleSubmit} info={mergeThisRecord} />}

            {warningModal && <WarningModal warningModal={warningModal} handleTerminate={handleTerminate} mergerWarning={mergerWarning} />}

            {warnToMerge && <WarningModal warningModal={warnToMerge} modalLoading={modalLoading} handleTerminate={sendReqToMerge} mergerWarning={warnToMergeMessage} />}


        </div>
    )
}

export default Result;
