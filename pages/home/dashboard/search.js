import React, { useState, useEffect } from 'react'
import ProtectedPage from '../../../components/ProtectedPage'
import { Row, Col, Form, Tabs, message } from 'antd'
import styles from '../../../styles/search.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Results from '../../../components/Results'
import { ConsoleSqlOutlined, SyncOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import BasicSearchForm from '../../../components/BasicSearchForm'
import AdvanceSearchForm from '../../../components/AdvanceSearchForm'

const search = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState(null)

    const token = useSelector((state) => state.user.token)
    const [selectedPage, setSelectedPage] = useState()
    const [searchValue, setSearchValue] = useState()
    const [isSearched, setIsSearched] = useState(false)
    const [isASearched, setIsASearched] = useState(false)
    const [limit, setLimit] = useState('10')
    const [requesteURI, setRequestedUri] = useState()
    const [changePage, setChangePage] = useState(false)
    const [resultLoading, setResultIsLoading] = useState(false)
    const [shallowUrl, setShallowUrl] = useState()
    // const requestdQuery = useSelector((state) => state.user.storeQuery)
    const user = useSelector((state) => state.user.user)

    const router = useRouter()

    // console.log(requestdQuery)

    const [form] = Form.useForm();
    const { TabPane } = Tabs;

    const basicSearch = (values) => {
        setSearchValue(values)
        setIsSearched(true)
    };

    const advanceSearch = async (values) => {
        setSearchValue(values)
        setIsASearched(true)

    };

    const limitChange = (value) => {
        setLimit(value)
    }

    const onPageChange = (pageNumber) => {
        setSelectedPage(pageNumber)
        setChangePage(true)
    }

    const onReset = () => {
        form.resetFields();
        setShallowUrl("")
        // setPageLoadFetch(false)
        router.replace('')
    };

    useEffect(() => {
        // const httpRequest = axios.CancelToken.source()

        if (!changePage && isSearched) {
            const arrayOfURI = []
            const allSort = []
            const { startDate, endDate, fSort, fOrder, sSort, sOrder } = { ...searchValue }

            for (const [key, value] of Object.entries(searchValue)) {
                // undefined the searchValue before the conditional loop. otherwise it wont work. 
                searchValue.fSort = undefined
                searchValue.sSort = undefined
                searchValue.fOrder = undefined
                searchValue.sOrder = undefined
                searchValue.startDate = undefined
                searchValue.endDate = undefined
                searchValue.limit = undefined

                if (searchValue[key] !== undefined) {
                    delete searchValue[key]
                    const iteratedData = `${key && key.trim()}=${value && value.split(' ').join("+")}`
                    arrayOfURI.push(iteratedData)
                }
            }
            arrayOfURI.push(`page=${"1"}`)
            arrayOfURI.push(`limit=${limit ? limit : "10"}`)

            //sort and push to array
            const fSortBy = fSort && `${fOrder == "ASC" ? "" : "-"}${fSort ? fSort : ""}`
            const sSortBy = sSort && `${sOrder == "ASC" ? "" : "-"}${sSort ? sSort : ""}`
            allSort.push(fSortBy, sSortBy)
            const sortBy = allSort.join(",")
            const correctedSortBy = sortBy && `sort=${sortBy ? sortBy : ""}`
            arrayOfURI.push(correctedSortBy)

            const newSatartDate = startDate ? new Date(startDate._d).toISOString().split('T')[0] : ""
            const newEndDate = endDate ? new Date(endDate._d).toISOString().split('T')[0] : ""
            arrayOfURI.unshift(`endDate=${newEndDate && newEndDate}`)
            arrayOfURI.unshift(`startDate=${newSatartDate && newSatartDate}`)
            const URI = arrayOfURI.join("&")
            setRequestedUri(URI)
            setShallowUrl(URI)

            const URL = `http://localhost:5000/api/properties?${URI && URI}`
            const requestableURL = URL.replace(/,\s*$/, "");
            // console.log(requestableURL)
            const basicSearchReq = async () => {
                try {
                    console.log("im basicSearchReq")

                    setSelectedPage('1')
                    setResultIsLoading(true)
                    message.loading({ content: 'Loading...', key: "4" });
                    setIsLoading(true)
                    const { data } = await axios.get(requestableURL, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }, withCredentials: true,
                        // cancelToken: httpRequest.token
                    }

                    )
                    message.success({ content: 'Loaded successfully!', key: "4" });
                    setIsLoading(false)
                    setResultIsLoading(false)

                    setResults(data)
                    // console.log(data)
                } catch (err) {
                    setResultIsLoading(false)

                    setIsLoading(false)
                    const errorMsg = err.response ? err.response.data.message : "Something went wrong!!!"
                    message.error({ content: errorMsg, key: "4" });
                }
            }

            basicSearchReq()

        } else if (!changePage && isASearched) {
            const arrayOfURI = []
            const allSort = []

            const { fSort, fOrder, sSort, sOrder } = { ...searchValue }

            for (const [key, value] of Object.entries(searchValue)) {

                // it worked...
                searchValue.fSort = undefined
                searchValue.sSort = undefined
                searchValue.fOrder = undefined
                searchValue.sOrder = undefined
                if (searchValue[key] !== undefined) {
                    delete searchValue[key]
                    const iteratedData = `${key.trim()}=${value.split(' ').join("+")}`
                    arrayOfURI.push(iteratedData)
                }
            }
            arrayOfURI.push(`page=1`)

            arrayOfURI.push(`page=${"1"}`)
            arrayOfURI.push(`limit=${limit ? limit : "10"}`)

            //sort and push to array
            const fSortBy = fSort && `${fOrder == "ASC" ? "" : "-"}${fSort ? fSort : ""}`
            const sSortBy = sSort && `${sOrder == "ASC" ? "" : "-"}${sSort ? sSort : ""}`
            allSort.push(fSortBy, sSortBy)
            const sortBy = allSort.join(",")
            const correctedSortBy = sortBy && `sort=${sortBy ? sortBy : ""}`
            arrayOfURI.push(correctedSortBy)

            const URI = arrayOfURI.join("&")
            setShallowUrl(URI)

            const URL = `http://localhost:5000/api/properties?${URI && URI}`

            const requestableURL = URL.replace(/,\s*$/, "");
            const advanceSearchReq = async () => {
                try {
                    console.log("im advanceSearchReq")

                    setResultIsLoading(true)
                    setSelectedPage('1')
                    message.loading({ content: 'Loading...', key: "2" });
                    setIsLoading(true)
                    const { data } = await axios.get(requestableURL, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    message.success({ content: 'Loaded successfully!', key: "2" });
                    setIsLoading(false)
                    setResultIsLoading(false)

                    setResults(data)
                    // console.log(data)
                } catch (err) {
                    setIsLoading(false)
                    setResultIsLoading(false)
                    const errorMsg = err.response ? err.response.data.message : "Something went wrong!!!"
                    message.error({ content: errorMsg, key: "2" });
                }
            }
            advanceSearchReq()

        }
        // return () => {

        //     httpRequest.cancel('Cancelled previous request due to new request')
        // }
    }, [!changePage && isSearched, searchValue, isASearched])


    useEffect(() => {
        if (changePage) {
            // console.log(selectedPage)
            const modifyURI = requesteURI && requesteURI.replace("page=1", `page=${selectedPage ? selectedPage : ""}`)
            setShallowUrl(modifyURI && modifyURI)

            const emmitSpace = modifyURI && modifyURI.replace(/,\s*$/, "");

            const requestableURL = `http://localhost:5000/api/properties?${emmitSpace}`

            const onChangeSearch = async () => {
                setResultIsLoading(true)
                try {
                    message.loading({ content: 'Loading...', key: "1" });
                    setIsLoading(true)
                    const { data } = await axios.get(requestableURL, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    message.success({ content: 'Loaded successfully!', key: "1" });
                    setIsLoading(false)
                    setResultIsLoading(false)
                    setResults(data)
                    console.log('Im onPageChange')

                    // console.log(data)
                } catch (err) {
                    setResultIsLoading(false)
                    setIsLoading(false)
                    const errorMsg = err.response ? err.response.data.message : "Something went wrong!!!"
                    message.error({ content: errorMsg, key: "1" });
                }
            }
            onChangeSearch()
        }
    }, [changePage, selectedPage])


    useEffect(() => {
        if (shallowUrl) {
            const modifiedShollowUrl = shallowUrl.replace(/,\s*$/, "")
            router.push(`?${modifiedShollowUrl}`, undefined, { shallow: true })

            // setPageLoadFetch(true)
        }
    }, [shallowUrl])


    //for the reload page fetch and redirect to fecth request.
    useEffect(() => {
        const arrayOfURI = []
        if (!isSearched && !isASearched && user !== null && !changePage && Object.keys(router.query).length !== 0) {

            const query = router.query

            for (const [key, value] of Object.entries(query)) {

                if (query[key] !== undefined) {
                    delete query[key]
                    const iteratedData = `${key.trim()}=${value.split(' ').join("+")}`
                    arrayOfURI.push(iteratedData)
                }
            }
            const joinedUrl = arrayOfURI.join('&')
            setRequestedUri(joinedUrl)
            const requestableURL = `http://localhost:5000/api/properties?${joinedUrl}`

            // console.log(joinedUrl)
            const onPageReloadFetch = async () => {
                try {
                    console.log("im onPageReloadFetch")
                    setSelectedPage('1')
                    setResultIsLoading(true)
                    message.loading({ content: 'Loading...', key: "3" });
                    setIsLoading(true)
                    const { data } = await axios.get(requestableURL, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }, withCredentials: true,
                        // cancelToken: httpRequest.token
                    }

                    )
                    message.success({ content: 'Loaded successfully!', key: "3" });
                    setIsLoading(false)
                    setResultIsLoading(false)

                    setResults(data)
                    // console.log(data)
                } catch (err) {
                    setResultIsLoading(false)

                    setIsLoading(false)
                    const errorMsg = err.response ? err.response.data.message : "Something went wrong!!!"
                    message.error({ content: errorMsg, key: "3" });
                }
            }

            onPageReloadFetch()
        }

    }, [!isSearched && !isASearched && user !== null && !changePage && Object.keys(router.query).length !== 0])






    return (
        <ProtectedPage>

            <h1 style={{ textAlign: "center", textTransform: "capitalize", fontWeight: "bold" }}>Search your desire properties :</h1>

            <div className={styles.searchUi} >
                <Row gutter={15} wrap={true} justify="center">
                    <Col span={24} >

                        <Tabs type="card" size="large" animated>
                            <TabPane tab="Basic Search" key="BasicSearch">
                                <BasicSearchForm basicSearch={basicSearch} isLoading={isLoading} limitChange={limitChange} onReset={onReset} form={form} />
                            </TabPane>


                            <TabPane tab="Advance Search" key="AdvanceSearch">
                                <AdvanceSearchForm advanceSearch={advanceSearch} limitChange={limitChange} onReset={onReset} form={form} isLoading={isLoading} />
                            </TabPane>

                        </Tabs>

                    </Col>
                </Row>

            </div>

            {resultLoading && <div style={{ textAlign: "center", width: "100%", height: "45px", display: "flex", alignItems: "center", justifyContent: "center" }} >
                <SyncOutlined spin style={{ fontSize: "30px" }} />
            </div>}

            {!resultLoading && results && results.totalCount !== 0 &&
                <div className="result">
                <Results properties={results.allProperty} totalSearchedProperty={results.totalSearchedProperty} limit={limit} basicSearch={basicSearch} onPageChange={onPageChange} selectedPage={selectedPage} />

                </div>
            }

            {results && results.totalCount == 0 &&
                <div className="zeroResult" style={{ textAlign: "center" }} >
                    <h3>No Result Found</h3>
                </div>
            }

            <div className={styles.bottomPart}>

            </div>

        </ProtectedPage >
    )
}

export default search
