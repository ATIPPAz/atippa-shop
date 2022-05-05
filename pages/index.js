import Link from "next/link";
import Head from "next/head";
import axios from "../axios.config";
import { useEffect,useState} from "react";
import Grid from '@mui/material/Grid';
import styled from "@emotion/styled";
import CardProduct from "../components/CardProduct/ProductCard";
import CatagoryCard from "../components/CatagoryCard/CatagoryCard";


const GridCatogory =  styled.div`
  display: flex;
  background-color: #f5f5f5;

  `

const GridProduct =  styled.div`
  display: flex;
  background-color: #f5f5f5;
  flex-wrap: wrap;
  margin: 0px auto;
  `

const Slot =  styled.div`
background-color: #C4C4C4;
width:100%;
height:100%;
margin-top:20px;
`
const Contrainer = styled.div`
width:100%;
height:100%;

`
const SuggestionSlot =  styled.div`
width:100%;
height:100%;
display: table;
padding-bottom:20px;
margin-top:20px;
background-color: #ffffff;
`
const TextSlot = styled.div`
width:100%;
height:100%;
padding:20px 0px 20px 0px;
background-color: #ffffff;
color: #757575;
`

const catagoriesData = [ 
  {
    image :'https://aumento.officemate.co.th/media/catalog/product/4/0/4007911.jpg?imwidth=640',
    name:'สายชาร์จ'
  },
  {
    image :'https://aumento.officemate.co.th/media/catalog/product/h/t/httpss3-ap-southeast-1.amazonaws.compim-prod-product-imagese691e6910e2baa62706485b7952403ae7b0e25952db5_mkp0223860dummy.jpg?imwidth=640',
    name:'หูฟัง'
  },
  {
    image :'https://lzd-img-global.slatic.net/g/p/00b01ef870da3c2be8b9979c550cdefd.png_120x120q80.jpg_.webp',
    name:'ฟิล์มมือถือ'
  },
  {
    image :'https://img.my-best.in.th/press_component/item_part_images/b92fe36cc0efbca168520df8c046b6a5.png?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip',
    name:'Powerbank'
  },
  {
    image :'https://store.ais.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/o/p/oppoa16b296x416-1.jpg',
    name:'มือถือ'
  },
  {
    image :'https://backend.central.co.th/media/catalog/product/7/2/720c926a84a6e94069c2f0e6a3004d32932131a6_mkp0602746dummy.jpg',
    name:'เคสมือถือ'
  }
]
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
       <Contrainer>
          <Slot>
            <TextSlot>
              <p>หมวดหมู่</p>
            </TextSlot>
            <GridCatogory >
              { catagoriesData.map((catagory,index)=> {
                return(
                  <CatagoryCard name={catagory.name} image={catagory.image} key={index}/>
                )
              })}
            </GridCatogory>
          </Slot>
          <Slot>
          <TextSlot>
          <p>สินค้าเเนะนำ</p>
            </TextSlot>
            <GridProduct >
              { data.map((item,index)=> {
                return(
                  <CardProduct key={index} image={item.image} title={item.title} price={item.price} category={item.category} description={item.description} rating={item.rating}/>
                )
              })}
            </GridProduct>
          </Slot>
       </Contrainer>
  );
}
