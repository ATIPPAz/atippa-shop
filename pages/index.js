import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import axios from "../axios.config";
import { useEffect,useState} from "react";
import Grid from '@mui/material/Grid';
import styled from "@emotion/styled";
import CardProduct from "../components/CardProduct/ProductCard";

const GridCustom = styled(Grid)(() => ({
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:'auto',
  marginBottom:'auto',
  contentAlign:"center",
  }))
  
const CatalogParagraph = styled.p`
background-color: #C4C4C4;
width:100%;
height:36px;
text-align:left;
text-justify:center;
margin-bottom:2px;`
const CatalogSlot =  styled.div`
background-color: #C4C4C4;
width:100%;
height:195px;
margin:0px;
`
const SuggestionSlot =  styled.div`
width:100%;
height:100%;
display: table;
padding-bottom:20px;
margin:0px;
`
const SuggestionParagraph = styled.p`
background-color: #C4C4C4;
width:100%;
height:36px;
display: table;
text-align:left;
text-justify:center;
margin-bottom:2px;`
const Para = styled.p`
width:100%;
height:36px;
display: table-cell;
vertical-align: middle;`
export default function Index() {
  async function fetchData() {
    const response = await axios.get('/products');
    await setData(response.data);
  }
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData()
  },[])
  if(!data){
    return <div>Loading ... </div>
  }
  return (
    <div>
       
      <Head>
      <title>Index</title>

      </Head>
      <Layout>
       <CatalogParagraph>
         <p>หมวดหมู่สินค้า</p>
       </CatalogParagraph>
       <CatalogSlot>

         </CatalogSlot>
       <SuggestionParagraph>
         <Para>
         สินค้าแนะนำ
         </Para>
       </SuggestionParagraph>
       <SuggestionSlot>
       <Grid container spacing={2} >
        {data.map( (item,idx) => {
           return (
            
            <GridCustom  item xs={3}  key={idx} >
              <CardProduct image={item.image} title={item.title} price={item.price} category={item.category} description={item.description} rating={item.rating}/>
            </GridCustom>
              
              //  <CardProduct key={idx} prop={item}/>
            )
        })}
        {data.map( (item,idx) => {
           return (
            
            <GridCustom  item xs={3}  key={idx} >
              <CardProduct image={item.image} title={item.title} price={item.price} category={item.category} description={item.description} rating={item.rating}/>
            </GridCustom>
              
              //  <CardProduct key={idx} prop={item}/>
            )
        })}
        {data.map( (item,idx) => {
           return (
            
            <GridCustom  item xs={3}  key={idx} >
              <CardProduct image={item.image} title={item.title} price={item.price} category={item.category} description={item.description} rating={item.rating}/>
            </GridCustom>
              
              //  <CardProduct key={idx} prop={item}/>
            )
        })}
        {data.map( (item,idx) => {
           return (
            
            <GridCustom  item xs={3}  key={idx} >
              <CardProduct image={item.image} title={item.title} price={item.price} category={item.category} description={item.description} rating={item.rating}/>
            </GridCustom>
              
              //  <CardProduct key={idx} prop={item}/>
            )
        })}
        </Grid>
       </SuggestionSlot>
      </Layout>

    </div>
  );
}