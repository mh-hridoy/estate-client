import '../styles/globals.css'
import 'antd/dist/antd.min.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress"
import StoreProvider from '../store/store'
import "mapbox-gl/dist/mapbox-gl.css"

const progress = new ProgressBar({
  size: 2,
  color: "rgba(255,0,0,0.5)",
  className: "bar-of-progress",
  delay: 100,
});


function MyApp({ Component, pageProps }) {

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);


  return (
    <>
      <StoreProvider>
        <Header />
        <Component {...pageProps} />

        <Footer />

      </StoreProvider>
    </>
  )
}

export default MyApp
