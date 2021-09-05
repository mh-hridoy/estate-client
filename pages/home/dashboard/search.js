import React, { useState, useEffect } from 'react'
import ProtectedPage from '../../../components/ProtectedPage'
import { Row, Col, Form, Tabs, message } from 'antd'
import styles from '../../../styles/search.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Results from '../../../components/Results'
import { SyncOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import BasicSearchForm from '../../../components/BasicSearchForm'
import AdvanceSearchForm from '../../../components/AdvanceSearchForm'

const search = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState(null)

    const token = useSelector((state) => state.user.token)
    const [selectedPage, setSelectedPage] = useState()
    const [searchValue, setSearchValue] = useState(null)
    const [searchAValue, setSearchAValue] = useState(null)
    const [isSearched, setIsSearched] = useState(false)
    const [isASearched, setIsASearched] = useState(false)
    const [limit, setLimit] = useState(10)
    const [aLimit, setALimit] = useState(10)
    const [requesteURI, setRequestedUri] = useState()
    const [changePage, setChangePage] = useState(false)
    const [resultLoading, setResultIsLoading] = useState(false)
    const [shallowUrl, setShallowUrl] = useState("")
    const [queryOfArray, setQueryOfArray] = useState([])
    const [resultLimit, setResultLimit] = useState(10)
    const user = useSelector((state) => state.user.user)


    const router = useRouter()

    const [basicForm] = Form.useForm()
    const [advanceForm] = Form.useForm()


    const { TabPane } = Tabs;

    const basicSearch = (values) => {
        setIsSearched(true)
        setSearchValue(values)
        setChangePage(false)
        setIsASearched(false)
        setSearchAValue(null)
        setShallowUrl("")
        // console.log("Clicked on basicSearch")

    };

    const advanceSearch = async (values) => {
        setIsASearched(true)
        setSearchAValue(values)
        setChangePage(false)
        setIsSearched(false)
        setSearchValue(null)
        setShallowUrl("")

        // console.log("Clicked on advanceSearch")
    };

    const basicLimitChange = (value) => {
        // console.log(value)
        setLimit(value)
        setResultLimit(value)
        // console.log(value)
    }


    const advanceLimitChange = (value) => {
        // console.log(value)
        setALimit(value)
        setResultLimit(value)
        // console.log(value)


    }

    const onPageChange = (pageNumber) => {
        setSelectedPage(pageNumber)
        setChangePage(true)
    }

    const onReset = () => {
        basicForm.resetFields();
        setShallowUrl("")
        router.replace('')

    };

    const onAReset = () => {
        advanceForm.resetFields();
        setShallowUrl("")
        router.replace('')

    };


    useEffect(() => {
        if (!changePage && !isASearched && limit && searchValue && isSearched) {
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
            arrayOfURI.push(`limit=${limit}`)
            setResultLimit(limit)
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

            setQueryOfArray(arrayOfURI)

            const URL = `http://localhost:5000/api/properties?${URI && URI}`
            const requestableURL = URL.replace(/,\s*$/, "");
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
                    }

                    )
                    message.success({ content: 'Loaded successfully!', key: "4" });
                    setIsLoading(false)
                    setResultIsLoading(false)

                    setResults(data)
                    setIsSearched(false)
                    setIsASearched(false)
                } catch (err) {
                    setResultIsLoading(false)
                    setIsLoading(false)
                    setIsSearched(false)
                    setIsASearched(false)
                    const errorMsg = err.response ? err.response.data.message : "Something went wrong!!!"
                    message.error({ content: errorMsg, key: "4" });
                }
            }

            basicSearchReq()
        }


    }, [!changePage && !isASearched && limit && searchValue && isSearched])


    useEffect(() => {
        if (isASearched && searchAValue && aLimit && !isSearched && !changePage) {
            const arrayOfURI = []
            const allSort = []
            console.log("im advanceSearchReq")


            const { fSort, fOrder, sSort, sOrder } = { ...searchAValue }

            for (const [key, value] of Object.entries(searchAValue)) {

                // it worked...
                searchAValue.fSort = undefined
                searchAValue.sSort = undefined
                searchAValue.fOrder = undefined
                searchAValue.sOrder = undefined
                searchAValue.limit = undefined


                if (searchAValue[key] !== undefined) {
                    delete searchAValue[key]
                    const iteratedData = `${key.trim()}=${value.split(' ').join("+")}`
                    arrayOfURI.push(iteratedData)
                }
            }
            arrayOfURI.push(`page=1`)

            arrayOfURI.push(`limit=${aLimit}`)
            setResultLimit(aLimit)


            //sort and push to array
            const fSortBy = fSort && `${fOrder == "ASC" ? "" : "-"}${fSort ? fSort : ""}`
            const sSortBy = sSort && `${sOrder == "ASC" ? "" : "-"}${sSort ? sSort : ""}`
            allSort.push(fSortBy, sSortBy)
            const sortBy = allSort.join(",")
            const correctedSortBy = sortBy && `sort=${sortBy ? sortBy : ""}`
            arrayOfURI.push(correctedSortBy)

            const URI = arrayOfURI.join("&")
            setRequestedUri(URI)
            setShallowUrl(URI)
            setQueryOfArray(arrayOfURI)


            const URL = `http://localhost:5000/api/properties?${URI && URI}`

            const requestableURL = URL.replace(/,\s*$/, "");
            const advanceSearchReq = async () => {
                try {

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
                    setIsSearched(false)
                    setIsASearched(false)
                } catch (err) {
                    setIsLoading(false)
                    setResultIsLoading(false)
                    setIsSearched(false)
                    setIsASearched(false)
                    const errorMsg = err.response ? err.response.data.message : "Something went wrong!!!"
                    message.error({ content: errorMsg, key: "2" });
                }
            }
            advanceSearchReq()

        }
    }, [isASearched && searchAValue && aLimit && !isSearched && !changePage])


    useEffect(() => {
        if (changePage) {

            const oldPage = queryOfArray.find((e) => {
                if (e.startsWith("page")) return e
            })

            const correctPage = `page=${selectedPage}`

            let emmitSpace = requesteURI.replace(/,\s*$/, "");
            emmitSpace = requesteURI.replace(oldPage, correctPage)
            setShallowUrl(emmitSpace)

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
                    setIsSearched(false)
                    setIsASearched(false)

                } catch (err) {
                    setResultIsLoading(false)
                    setIsLoading(false)
                    setIsSearched(false)
                    setIsASearched(false)
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

        }
    }, [shallowUrl])


    //for the reload page fetch and redirect to fecth request.

    useEffect(() => {
        const arrayOfURI = []

        if (Object.keys(router.query).length !== 0 && !isSearched && !isASearched && user != null && PerformanceNavigationTiming) {
            console.log("im onPageReloadFetch")
            let page;
            let pageLimit;
            const query = router.query

            // console.log(checkPage)

            for (const [key, value] of Object.entries(query)) {

                if (key == "page") page = value
                if (key == "limit") pageLimit = +value

                const iteratedData = `${key.trim()}=${value.split(' ').join("+")}`
                arrayOfURI.push(iteratedData)
            }
            const joinedUrl = arrayOfURI.join('&')
            setQueryOfArray(arrayOfURI)
            setResultLimit(pageLimit)
            setRequestedUri(joinedUrl)
            const requestableURL = `http://localhost:5000/api/properties?${joinedUrl}`

            const onPageReloadFetch = async () => {
                try {
                    setSelectedPage(page)
                    setResultIsLoading(true)
                    message.loading({ content: 'Loading...', key: "3" });
                    setIsLoading(true)
                    const { data } = await axios.get(requestableURL, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }, withCredentials: true,
                    }

                    )
                    message.success({ content: 'Loaded successfully!', key: "3" });
                    setIsLoading(false)
                    setResultIsLoading(false)

                    setResults(data)
                } catch (err) {
                    setResultIsLoading(false)

                    setIsLoading(false)
                    const errorMsg = err.response ? err.response.data.message : "Something went wrong!!!"
                    message.error({ content: errorMsg, key: "3" });

                }
            }

            onPageReloadFetch()
        }

    }, [Object.keys(router.query).length !== 0 && user !== null && PerformanceNavigationTiming])


    return (
        <ProtectedPage>

            <h1 style={{ textAlign: "center", textTransform: "capitalize", fontWeight: "bold" }}>Search your desire properties :</h1>

            <div className={styles.searchUi} >
                <Row gutter={15} wrap={true} justify="center">
                    <Col span={24}>

                        <Tabs type="card" size="large" animated type="card"  >
                            <TabPane tab="Basic Search" key="BasicSearch"  >
                                <BasicSearchForm basicSearch={basicSearch} isLoading={isLoading} limitChange={basicLimitChange} onReset={onReset} basicForm={basicForm} />
                            </TabPane>


                            <TabPane tab="Advance Search" key="AdvanceSearch" >
                                <AdvanceSearchForm advanceSearch={advanceSearch} limitChange={advanceLimitChange} onReset={onAReset} isLoading={isLoading} advanceForm={advanceForm} />
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
                <Results properties={results.allProperty} totalSearchedProperty={results.totalSearchedProperty}
                    limit={resultLimit}
                    basicSearch={basicSearch} onPageChange={onPageChange} selectedPage={selectedPage} />

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
