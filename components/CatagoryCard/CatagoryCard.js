import styleds from "@emotion/styled"
import Image from "next/image";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const ImageContrainer = styleds.div`
contentAlign:center;
width:75px;
height:75px;
background-color: #FFFFFF;
position: relative;
`
const P = styleds.div`
text-align:center;
`

const Contrainer = styleds.div`
width:100px;
height:95px;
background-color: #ffffff;
margin:1px 1px 1px 0px;
justify-content:center;
`

const CatagoryCard = (prop) => {
  return(
    <Contrainer>
      
        <ImageContrainer>
        <Image  src={prop.image }  alt="product" layout='fill' objectFit='contain'/>
      </ImageContrainer>
    <P>
     {prop.name}
    </P>
     
    
        
    </Contrainer>
  )
}
export default CatagoryCard;