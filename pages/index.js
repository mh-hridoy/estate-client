import { Row, Col } from 'antd'
import CarouselSection from '../components/CarouselSection'
import ShowMore from 'react-show-more';


const Homepage = () => {

  return (
    <>
      <Row>
        <CarouselSection />
      </Row>

      <Row align="center" justify="center" >
        <Col gutter={2} xs={22} className="introduction">
          <ShowMore lines={3}
            more='Show more'
            less='Show less' >
            <p>
              <strong> Lorem ipsum </strong>: dolor sit amet consectetur adipisicing elit. Iusto blanditiis vel animi eaque tempore, reprehenderit consequatur doloribus ratione. Quos velit obcaecati vel tempora pariatur a iure dolorem quaerat, sed blanditiis exercitationem id, inventore ipsum architecto corrupti libero minima illum. Nihil eum numquam minima expedita repudiandae, necessitatibus vitae quo consequuntur nobis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio minima voluptatibus, ea temporibus eligendi et. Ut, saepe! Ipsam quo doloremque beatae veniam. Possimus, deserunt eveniet recusandae fugiat hic numquam ullam quidem molestias eius mollitia, sint totam impedit? Error quos nesciunt expedita unde id? Ullam beatae consequatur quam tempora velit?.
            </p>
          </ShowMore>
        </Col>

      </Row>


    </>

  )

}

export default Homepage