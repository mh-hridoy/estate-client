import { Modal, Image, Spin, message, Tabs, Affix } from "antd"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { propertyModalHandler } from "../../store/mapSlice"
import axios from "axios"
import { LoadingOutlined } from "@ant-design/icons"
import PropertyMap from "../SingleProperty/PropertyMap"

const MapPropertyModal = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const [propertyData, setPropertyData] = useState(null)
  const showPropertyModal = useSelector((state) => state.map.showPropertyModal)
  const propertyId = useSelector((state) => state.map.modalPropertyId)
  const {TabPane} = Tabs

  useEffect(() => {
    if (propertyId) {
      const singlePropertyData = async () => {
        try {
          setIsLoading(true)
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_MAIN_PROXY}/single-property-map/${propertyId}`,
            { withCredentials: true }
          )

          setPropertyData(data)
          setIsLoading(false)
        } catch (err) {
          console.log(err)
          setIsLoading(false)
          message.error(
            err.response ? err.response.data.message : "Something went wrong!!!"
          )
        }
      }

      singlePropertyData()
    }
  }, [])

  return (
    <Modal
      footer={null}
      width={"85vw"}
      style={{ top: 4, padding: 0 }}
      bodyStyle={{
        padding: 0,
        position: "fixed",
        backgroundColor: "#fff",
        width: "85vw",
        height: "99vh",
      }}
      visible={showPropertyModal}
      onCancel={() =>
        dispatch(propertyModalHandler({ showPropertyModal: false }))
      }
    >
      {isLoading && propertyData == null ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 50, fontWeight: "bolder", color: "#57033E" }}
                spin
              />
            }
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            className="imageAndMapSection"
            style={{ height: "100%", width: "55%" }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                height: "100%",
                overflow: "auto",
                flexWrap: "wrap",
              }}
            >
              {propertyData && propertyData.propertyImages.length !== 0 ? (
                <>
                  {propertyData.propertyImages.map((image, index) => {
                    return (
                      <Image
                        key={index}
                        src={image.Location}
                        height={index == 0 ? "400px" : "200px"}
                        width={index == 0 ? "100%" : "50%"}
                        style={{ padding: index == 0 ? "0px" : "5px" }}
                      />
                    )
                  })}
                </>
              ) : (
                <>
                  <div style={{ height: "100%", width: "100%" }}>
                    <PropertyMap
                      lat={propertyData && propertyData.geo.lat}
                      long={propertyData && propertyData.geo.long}
                      isSat={true}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="propertyInfoSection"
            style={{
              height: "100%",
              width: "45%",
              overflow: "auto",
              padding: "0 10px",
              marginTop: 0,
            }}
          >
            <div
              style={{
                position: "sticky",
                top: 0,
                backgroundColor: "white",
                zIndex: 500,
                padding: "20px 0px",
              }}
            >
              <h1 style={{ fontWeight: "bolder", padding: 0 }}>
                $
                {propertyData &&
                  propertyData.countyValue !== undefined &&
                  propertyData.countyValue
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </h1>
              <h4
                style={{
                  textAlign: "end",
                  padding: 0,
                  marginRight: 10,
                  marginTop: -20,
                  fontWeight: "400",
                }}
              >
                Bed : {propertyData && propertyData.bed} | Bath :
                {propertyData && propertyData.bath} | SQF :{" "}
                {propertyData &&
                  propertyData.totalSqf !== undefined &&
                  propertyData.totalSqf
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </h4>
              <h4>
                {propertyData && propertyData.propertyAddress}
                {propertyData && "," + " " + propertyData.city}
                {propertyData && "," + " " + propertyData.state}
                {propertyData && " " + propertyData.zip}
              </h4>
              <h3 style={{ fontWeight: "200" }}>
                {propertyData && propertyData.PropertyDescription}
              </h3>
            </div>
              <Tabs defaultActiveKey="overview" centered>
                <TabPane key="overview" tab="Overview">
                  <div>
                    In ut aute commodo mollit sint nisi. Eiusmod sunt et esse
                    proident aliquip mollit aliquip eiusmod amet enim quis sint.
                    Elit culpa ad elit consequat nulla et amet et nostrud. Sint
                    est ullamco in ad. Dolor consectetur commodo velit aute esse
                    eiusmod occaecat adipisicing magna est dolore. Est eiusmod
                    ad occaecat voluptate cupidatat dolor voluptate. Id anim est
                    nulla occaecat nostrud ad in tempor. Officia labore pariatur
                    nostrud officia cillum. Labore voluptate quis consectetur
                    esse labore ex non sunt nulla consequat in nulla. Anim sunt
                    id ea aute consectetur aute tempor laboris aliqua labore
                    deserunt aliquip labore. Consectetur reprehenderit quis duis
                    nostrud. Aliqua est enim minim anim aliqua culpa dolore
                    officia id. Excepteur ea Lorem officia minim non quis
                    ullamco magna officia ex voluptate esse qui. Ut Lorem ea
                    cupidatat cillum Lorem est eu eu. Sint veniam Lorem eiusmod
                    non officia tempor eiusmod mollit duis cupidatat ut. Qui
                    Lorem cupidatat exercitation quis aliqua commodo. Officia
                    veniam enim velit nisi eiusmod et et anim irure laborum.
                    Mollit consectetur ut commodo excepteur veniam ex ullamco
                    irure laboris amet non. Dolor aute qui nostrud labore
                    consequat ex minim quis culpa velit fugiat reprehenderit
                    minim. Laboris exercitation et non non magna laboris commodo
                    reprehenderit ut aliqua est est id aliquip. Laborum minim
                    nostrud fugiat ipsum deserunt culpa esse est minim eu
                    exercitation. Excepteur sit fugiat exercitation aute
                    pariatur velit pariatur cupidatat adipisicing. Fugiat id
                    eiusmod laboris ut labore. Fugiat exercitation officia duis
                    commodo laboris aliqua fugiat ex tempor voluptate
                    adipisicing. Est ut laboris culpa in nostrud culpa ad enim
                    eiusmod non sit dolor consectetur in. Ipsum aliquip quis
                    nisi tempor reprehenderit eu est commodo adipisicing
                    proident aliqua. Labore cupidatat sint amet ullamco
                    voluptate. Do in ad adipisicing occaecat voluptate minim
                    dolore officia labore culpa est. Anim fugiat voluptate esse
                    veniam consequat. Est pariatur incididunt reprehenderit in
                    nostrud officia est cupidatat id mollit. Aliquip incididunt
                    cillum reprehenderit dolor proident. Sit qui officia est
                    mollit excepteur magna non ullamco proident exercitation
                    enim officia eiusmod. Voluptate est ipsum est exercitation
                    consequat incididunt adipisicing commodo aute sint. Nisi
                    laboris velit est amet. Velit consequat incididunt eiusmod
                    pariatur quis deserunt nisi. In minim velit duis elit
                    occaecat dolore minim. Nostrud labore exercitation ut
                    reprehenderit. Proident velit adipisicing nostrud ut
                    reprehenderit sunt laboris officia ullamco qui non
                    reprehenderit. Eu proident aliqua consequat proident quis
                    consectetur enim consequat duis. Sunt minim cupidatat
                    exercitation do velit minim et. Cupidatat ullamco ipsum duis
                    incididunt ipsum. Ea velit eiusmod pariatur dolor ea quis
                    qui pariatur tempor velit. Veniam laborum velit cupidatat
                    veniam consectetur deserunt anim. Amet esse laboris
                    voluptate occaecat adipisicing duis officia.
                  </div>
                </TabPane>

                <TabPane key="features" tab="Fact And Features">
                  <div>
                    {" "}
                
                    non officia tempor eiusmod mollit duis cupidatat ut. Qui
                    Lorem cupidatat exercitation quis aliqua commodo. Officia
                    veniam enim velit nisi eiusmod et et anim irure laborum.
                    Mollit consectetur ut commodo excepteur veniam ex ullamco
                    irure laboris amet non. Dolor aute qui nostrud labore
                    consequat ex minim quis culpa velit fugiat reprehenderit
                    minim. Laboris exercitation et non non magna laboris commodo
                    reprehenderit ut aliqua est est id aliquip. Laborum minim
                    nostrud fugiat ipsum deserunt culpa esse est minim eu
                    exercitation. Excepteur sit fugiat exercitation aute
                    pariatur velit pariatur cupidatat adipisicing. Fugiat id
                    eiusmod laboris ut labore. Fugiat exercitation officia duis
                    commodo laboris aliqua fugiat ex tempor voluptate
                    adipisicing. Est ut laboris culpa in nostrud culpa ad enim
                    eiusmod non sit dolor consectetur in. Ipsum aliquip quis
                    nisi tempor reprehenderit eu est commodo adipisicing
                    proident aliqua. Labore cupidatat sint amet ullamco
                    voluptate. Do in ad adipisicing occaecat voluptate minim
                    dolore officia labore culpa est. Anim fugiat voluptate esse
                    veniam consequat. Est pariatur incididunt reprehenderit in
                    nostrud officia est cupidatat id mollit. Aliquip incididunt
                    cillum reprehenderit dolor proident. Sit qui officia est
                    mollit excepteur magna non ullamco proident exercitation
                    enim officia eiusmod. Voluptate est ipsum est exercitation
                    consequat incididunt adipisicing commodo aute sint. Nisi
                    laboris velit est amet. Velit consequat incididunt eiusmod
                    pariatur quis deserunt nisi. In minim velit duis elit
                    occaecat dolore minim. Nostrud labore exercitation ut
                    reprehenderit. Proident velit adipisicing nostrud ut
                    reprehenderit sunt laboris officia ullamco qui non
                    reprehenderit. Eu proident aliqua consequat proident quis
                    consectetur enim consequat duis. Sunt minim cupidatat
                    exercitation do velit minim et. Cupidatat ullamco ipsum duis
                    incididunt ipsum. Ea velit eiusmod pariatur dolor ea quis
                    qui pariatur tempor velit. Veniam laborum velit cupidatat
                    veniam consectetur deserunt anim. Amet esse laboris
                    voluptate occaecat adipisicing duis officia.
                  </div>
                </TabPane>

                <TabPane key="homeValue" tab="Home Value">
                  <div>
                    {" "}
                 
                    voluptate. Do in ad adipisicing occaecat voluptate minim
                    dolore officia labore culpa est. Anim fugiat voluptate esse
                    veniam consequat. Est pariatur incididunt reprehenderit in
                    nostrud officia est cupidatat id mollit. Aliquip incididunt
                    cillum reprehenderit dolor proident. Sit qui officia est
                    mollit excepteur magna non ullamco proident exercitation
                    enim officia eiusmod. Voluptate est ipsum est exercitation
                    consequat incididunt adipisicing commodo aute sint. Nisi
                    laboris velit est amet. Velit consequat incididunt eiusmod
                    pariatur quis deserunt nisi. In minim velit duis elit
                    occaecat dolore minim. Nostrud labore exercitation ut
                    reprehenderit. Proident velit adipisicing nostrud ut
                    reprehenderit sunt laboris officia ullamco qui non
                    reprehenderit. Eu proident aliqua consequat proident quis
                    consectetur enim consequat duis. Sunt minim cupidatat
                    exercitation do velit minim et. Cupidatat ullamco ipsum duis
                    incididunt ipsum. Ea velit eiusmod pariatur dolor ea quis
                    qui pariatur tempor velit. Veniam laborum velit cupidatat
                    veniam consectetur deserunt anim. Amet esse laboris
                    voluptate occaecat adipisicing duis officia.
                  </div>
                </TabPane>

                <TabPane key="priceAndTaxes" tab="Price And Taxes">
                  <div>
                    {" "}
              
                    ullamco magna officia ex voluptate esse qui. Ut Lorem ea
                    cupidatat cillum Lorem est eu eu. Sint veniam Lorem eiusmod
                    non officia tempor eiusmod mollit duis cupidatat ut. Qui
                    Lorem cupidatat exercitation quis aliqua commodo. Officia
                    veniam enim velit nisi eiusmod et et anim irure laborum.
                    Mollit consectetur ut commodo excepteur veniam ex ullamco
                    irure laboris amet non. Dolor aute qui nostrud labore
                    consequat ex minim quis culpa velit fugiat reprehenderit
                    minim. Laboris exercitation et non non magna laboris commodo
                    reprehenderit ut aliqua est est id aliquip. Laborum minim
                    nostrud fugiat ipsum deserunt culpa esse est minim eu
                    exercitation. Excepteur sit fugiat exercitation aute
                    pariatur velit pariatur cupidatat adipisicing. Fugiat id
                    eiusmod laboris ut labore. Fugiat exercitation officia duis
                    commodo laboris aliqua fugiat ex tempor voluptate
                    adipisicing. Est ut laboris culpa in nostrud culpa ad enim
                    eiusmod non sit dolor consectetur in. Ipsum aliquip quis
                    nisi tempor reprehenderit eu est commodo adipisicing
                    proident aliqua. Labore cupidatat sint amet ullamco
                    voluptate. Do in ad adipisicing occaecat voluptate minim
                    dolore officia labore culpa est. Anim fugiat voluptate esse
                    veniam consequat. Est pariatur incididunt reprehenderit in
                    nostrud officia est cupidatat id mollit. Aliquip incididunt
                    cillum reprehenderit dolor proident. Sit qui officia est
                    mollit excepteur magna non ullamco proident exercitation
                    enim officia eiusmod. Voluptate est ipsum est exercitation
                    consequat incididunt adipisicing commodo aute sint. Nisi
                    laboris velit est amet. Velit consequat incididunt eiusmod
                    pariatur quis deserunt nisi. In minim velit duis elit
                    occaecat dolore minim. Nostrud labore exercitation ut
                    reprehenderit. Proident velit adipisicing nostrud ut
                    reprehenderit sunt laboris officia ullamco qui non
                    reprehenderit. Eu proident aliqua consequat proident quis
                    consectetur enim consequat duis. Sunt minim cupidatat
                    exercitation do velit minim et. Cupidatat ullamco ipsum duis
                    incididunt ipsum. Ea velit eiusmod pariatur dolor ea quis
                    qui pariatur tempor velit. Veniam laborum velit cupidatat
                    veniam consectetur deserunt anim. Amet esse laboris
                    voluptate occaecat adipisicing duis officia.
                  </div>
                </TabPane>

                <TabPane key="nearBySchool" tab="Nearby School">
                  <div>
                    {" "}
                 
                    officia id. Excepteur ea Lorem officia minim non quis
                    ullamco magna officia ex voluptate esse qui. Ut Lorem ea
                    cupidatat cillum Lorem est eu eu. Sint veniam Lorem eiusmod
                    non officia tempor eiusmod mollit duis cupidatat ut. Qui
                    Lorem cupidatat exercitation quis aliqua commodo. Officia
                    veniam enim velit nisi eiusmod et et anim irure laborum.
                    Mollit consectetur ut commodo excepteur veniam ex ullamco
                    irure laboris amet non. Dolor aute qui nostrud labore
                    consequat ex minim quis culpa velit fugiat reprehenderit
                    minim. Laboris exercitation et non non magna laboris commodo
                    reprehenderit ut aliqua est est id aliquip. Laborum minim
                    nostrud fugiat ipsum deserunt culpa esse est minim eu
                    exercitation. Excepteur sit fugiat exercitation aute
                    pariatur velit pariatur cupidatat adipisicing. Fugiat id
                    eiusmod laboris ut labore. Fugiat exercitation officia duis
                    commodo laboris aliqua fugiat ex tempor voluptate
                    adipisicing. Est ut laboris culpa in nostrud culpa ad enim
                    eiusmod non sit dolor consectetur in. Ipsum aliquip quis
                    nisi tempor reprehenderit eu est commodo adipisicing
                    proident aliqua. Labore cupidatat sint amet ullamco
                    voluptate. Do in ad adipisicing occaecat voluptate minim
                    dolore officia labore culpa est. Anim fugiat voluptate esse
                    veniam consequat. Est pariatur incididunt reprehenderit in
                    nostrud officia est cupidatat id mollit. Aliquip incididunt
                    cillum reprehenderit dolor proident. Sit qui officia est
                    mollit excepteur magna non ullamco proident exercitation
                    enim officia eiusmod. Voluptate est ipsum est exercitation
                    consequat incididunt adipisicing commodo aute sint. Nisi
                    laboris velit est amet. Velit consequat incididunt eiusmod
                    pariatur quis deserunt nisi. In minim velit duis elit
                    occaecat dolore minim. Nostrud labore exercitation ut
                    reprehenderit. Proident velit adipisicing nostrud ut
                    reprehenderit sunt laboris officia ullamco qui non
                    reprehenderit. Eu proident aliqua consequat proident quis
                    consectetur enim consequat duis. Sunt minim cupidatat
                    exercitation do velit minim et. Cupidatat ullamco ipsum duis
                    incididunt ipsum. Ea velit eiusmod pariatur dolor ea quis
                    qui pariatur tempor velit. Veniam laborum velit cupidatat
                    veniam consectetur deserunt anim. Amet esse laboris
                    voluptate occaecat adipisicing duis officia.
                  </div>
                </TabPane>

                <TabPane key="homesForYou" tab="Homes For You">
                  <div>
                    {" "}
                  
                    commodo laboris aliqua fugiat ex tempor voluptate
                    adipisicing. Est ut laboris culpa in nostrud culpa ad enim
                    eiusmod non sit dolor consectetur in. Ipsum aliquip quis
                    nisi tempor reprehenderit eu est commodo adipisicing
                    proident aliqua. Labore cupidatat sint amet ullamco
                    voluptate. Do in ad adipisicing occaecat voluptate minim
                    dolore officia labore culpa est. Anim fugiat voluptate esse
                    veniam consequat. Est pariatur incididunt reprehenderit in
                    nostrud officia est cupidatat id mollit. Aliquip incididunt
                    cillum reprehenderit dolor proident. Sit qui officia est
                    mollit excepteur magna non ullamco proident exercitation
                    enim officia eiusmod. Voluptate est ipsum est exercitation
                    consequat incididunt adipisicing commodo aute sint. Nisi
                    laboris velit est amet. Velit consequat incididunt eiusmod
                    pariatur quis deserunt nisi. In minim velit duis elit
                    occaecat dolore minim. Nostrud labore exercitation ut
                    reprehenderit. Proident velit adipisicing nostrud ut
                    reprehenderit sunt laboris officia ullamco qui non
                    reprehenderit. Eu proident aliqua consequat proident quis
                    consectetur enim consequat duis. Sunt minim cupidatat
                    exercitation do velit minim et. Cupidatat ullamco ipsum duis
                    incididunt ipsum. Ea velit eiusmod pariatur dolor ea quis
                    qui pariatur tempor velit. Veniam laborum velit cupidatat
                    veniam consectetur deserunt anim. Amet esse laboris
                    voluptate occaecat adipisicing duis officia.
                  </div>
                </TabPane>
              </Tabs>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default MapPropertyModal
