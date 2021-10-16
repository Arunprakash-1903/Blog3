import Header from '../components/Header'
import '../styles/globals.css'
import Footer from '../components/footer'
import Links from "../components/Links"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
    <Links/>
      <main className='container'>
        <Component {...pageProps} />
      </main>
      <div className="button_container">
        <div className="button_top">
        <img className="Arrow" src="/images/posts/ArrowUp.png" alt="dgs" />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MyApp