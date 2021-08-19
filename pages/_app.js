import '../styles/globals.css'
import 'antd/dist/antd.min.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </>
  )
}

export default MyApp
