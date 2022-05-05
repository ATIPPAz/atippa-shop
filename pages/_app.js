import Footer from "../components/Footer"
import DefaultLayout from "../components/Layout";
import Nav from "../components/Nav";
import '../styles/Grobal.css'

function  Myapp({Component,pageProps}){
  // <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet" />
  const Layout = Component.Layout || DefaultLayout;
  return (
  <>
  <Nav/>
  <Layout>
    <Component {...pageProps}/>
  </Layout>
  <Footer/>
  </>
  ) 
}
export default Myapp 