import '../styles/globals.css'
import 'antd/dist/antd.min.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import StoreProvider from '../store/store'


const progress = new ProgressBar({
  size: 3,
  color: "red",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


function MyApp({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-left"
        autoClose={3500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <Footer />
      </StoreProvider>
    </>
  )
}

export default MyApp
