import React, { useState } from 'react'
import { Button, Checkbox, Pagination } from 'antd'
import styles from '../styles/results.module.css'
import SingleResult from './SingleResult'
import MergeModal from './MergeModal';
import WarningModal from './WarningModal';
import axios from 'axios'
import { useSelector } from 'react-redux'
import { message } from 'antd'
import Export from './Export';
import PropertyOverview from './PropertyOverview';
import {useRouter} from 'next/router'

//need to push all the results id.
const plainOptions = [];
const defaultCheckedList = []; //push value after click on the cheked element.

const Result = (props) => {
    //use let newPlainOptins... and push the data from map funtion. otherwise it wont render the data with the very first render.
    let newPlainOptins;
    const token = useSelector((state) => state.user.token)

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [checkAll, setCheckAll] = useState(false);
    const [visible, setVisible] = useState(false)
    const [mergerWarning, setMergeWarning] = useState("")
    const [warningModal, showWarningModal] = useState(false)

    const [showOverviewDrawer, setShowOverviewDrawer] = useState(false)

    const [selectedForOverview, setSelectedForOverview] = useState()


    const [modalLoading, setModalLoading] = useState(false)
    const newDefaultCheckedList = [...new Set(checkedList)] // will use this to check the full list.

    const { properties, limit, totalSearchedProperty, selectedPage } = props

    const mergeThisRecord = properties.filter(({ _id: id1 }) => newDefaultCheckedList.some((id2) => id2 === id1));

    const router = useRouter()
    const pageLimit = +limit
    // console.log(limit)
    const nSelectedPage = +selectedPage || 1

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

            setMergeWarning("Please select at least one property to merge.")
        } else {
            showWarningModal(false)
            setVisible(true)

        }
    }

    const handleCancel = () => {
        setVisible(false)

    }

    const closeOverviewDrawer = () => {
        setShowOverviewDrawer(false)
    }

    const openOverviewDrawer = (pId) => {
        const selectedPropertyToOverview = properties.filter(({ _id: id1 }) => id1 === pId)
        setSelectedForOverview(selectedPropertyToOverview)
        setShowOverviewDrawer(true)


        //setup shallow router setup

    }

    const handleSubmit = async () => {
        setModalLoading(true)
        const mergeSelectedItem = []
        mergeThisRecord && mergeThisRecord.forEach(record => mergeSelectedItem.push(record._id))


        try {
            const { data } = await axios({
                method: 'delete',
                url: `${process.env.NEXT_PUBLIC_MAIN_PROXY}/delete-property`,
                data: {
                    id: mergeSelectedItem
                },
                headers: { 'Authorization': `Bearer ${token}` }
            });

            message.success(data)
            router.reload() //here I can delete the merged properties from the array for better UX.
            setModalLoading(false)
            setVisible(false)
        } catch (err) {
            message.error(
              err.response && err.response.data.message || "Something went wrong!"
            )
            setModalLoading(false)


        }
    }

    const handleTerminate = () => {
        showWarningModal(false)
    }
    //this will check all the properties._id and if it matched with newDefaultCheckedList(id) then it will stage the data. //Do NOT USE (every) method OR DO NOT CHNAGE THE ORDER OF FILTER. LIKE newDefaultCheckedList.filter && properties.some ***DONT DO THAT. IT WILL RETURN ONLY ID SINCE ITS FILTERING ONLY IDs.

    return (

        <>
        <div className={styles.fullResult}>
            <div className={styles.paginationArea}>
                <p>Total records : {totalSearchedProperty}</p>
                {/* //need to add result perpage and hide that and pass the same value as the form. also add current prop. */}
                <Pagination responsive={true} onChange={props.onPageChange} total={+totalSearchedProperty} pageSize={pageLimit} hideOnSinglePage current={nSelectedPage} defaultCurrent={nSelectedPage} showSizeChanger={false} />

            </div>
            <div className={styles.operations}>
                <div className={styles.otherOper}>
                    <Button >  <Checkbox onChange={onCheckAllChange} checked={checkAll}  > {!checkAll ? "Check all" : "Uncheck all"}
                    </Checkbox>
                    </Button>
                    <Export exportList={mergeThisRecord} />
                </div>
                <div className={styles.merge}>
                    <Button onClick={openMergeModal} className={styles.btn}> {newDefaultCheckedList.length !== 0 ? "Merge Selected?" : "Merge Record?"} </Button>
                </div>
            </div>

            <Checkbox.Group style={{ width: '100%' }} onChange={onChange} value={checkedList} >

                    {properties && properties.length !== 0 && properties.map((property, inx) => {
                    plainOptions.push(property._id)
                    //Push the data from here. Othrwise it wont work for the first render.. See above newPlainOptins variable.
                    newPlainOptins = [...new Set(plainOptions)]
                    return (
                      <SingleResult
                        key={property._id + inx}
                        value={property._id}
                        info={property}
                        onClick={() => openOverviewDrawer(property._id)}
                      />
                    )
                })
                    }

                    {properties.length === 0 && <h3 style={{ textAlign: "center", margin: "10px", fontSize: "14px" }}> No Data Found </h3>}

            </Checkbox.Group>

            <div className={styles.paginationArea} style={{ borderTop: "1px solid var(--optional-color)", paddingTop: "10px" }}>
                <p>Total records : {totalSearchedProperty}</p>
                {/* //need to add result perpage and hide that and pass the same value as the form. also add current prop. */}
                <Pagination responsive={true} onChange={props.onPageChange} total={+totalSearchedProperty} pageSize={pageLimit} hideOnSinglePage current={nSelectedPage} defaultCurrent={nSelectedPage} showSizeChanger={false} />

            </div>

            {visible && <MergeModal visible={visible} handleCancel={handleCancel} modalLoading={modalLoading} handleSubmit={handleSubmit} info={mergeThisRecord} />}

            {warningModal && <WarningModal warningModal={warningModal} handleTerminate={handleTerminate} mergerWarning={mergerWarning} />}


            </div>
            {showOverviewDrawer && selectedForOverview && <PropertyOverview closeOverviewDrawer={closeOverviewDrawer} showOverviewDrawer={showOverviewDrawer} property={selectedForOverview} />}
        </>
    )
}

export default Result;
