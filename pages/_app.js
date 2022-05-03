import Footer from "../components/Footer"
import {DefaultLayout} from "../components/Layout";
import Nav from "../components/Nav";

function  Myapp({Component,pageProps}){
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