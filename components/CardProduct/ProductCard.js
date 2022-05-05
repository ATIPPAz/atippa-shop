import styleds from "@emotion/styled"
import Image from "next/image";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const ImageContrainer = styleds.div`
contentAlign:center;
width:146.2px;
height:75px;
background-color: #FFFFFF;
position: relative;
`

const P = styleds.div`
text-align:center;
width:146.2px;
`
const Contrainer = styleds.div`
width:232px;
height:200px;
flex: 0 3 auto;
flex-wrap: nowrap;
background-color: #FFFFFF;
margin: 5px;
word-wrap: break-word;
overflow: hidden;
`


const CardProduct = (prop) => {
  return(
    <Contrainer>
      
        <ImageContrainer>
        <Image  src={prop.image} alt="product" layout='fill'objectFit='contain'/>
      </ImageContrainer>
     
       <P>
       ชื่อ {prop.title}
      ราคา {prop.price} บาท
      ประเภท {prop.category}
       </P>
     
       
    
    </Contrainer>
  )
}
export default CardProduct;