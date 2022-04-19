import styleds from "@emotion/styled"
import Image from "next/image";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const ImageContrainer = styleds.div`
contentAlign:center;
margin:20px;
width:100%;
height:100%;
border-radius:10px;
background-color: #FFFFFF;
position: relative;
`
const Info = styleds.div`
margin:20px;`

const Contrainer = styleds.div`
width:100%;
height:300px;
background-color: #F5F5F5;
border-radius:10px;
margin-top: 20px;
word-wrap: break-word;
overflow: auto;
`
const GridDescibe = styleds.div`
margin:20px;
`

const CardProduct = (prop) => {
  console.log(prop)
  return(
    <Contrainer>
      <Grid container spacing={1}>
      <Grid item xs={6}>
        <ImageContrainer>
        <Image  src={prop.image} alt="product" layout='fill'objectFit='contain'/>
      </ImageContrainer>
      </Grid>
      <Grid  item xs={6}>
        <Info>
      <p>ชื่อ {prop.title}</p>
      <p>ราคา {prop.price} บาท</p>
      <p>ประเภท {prop.category}</p>
        </Info>
      </Grid>
      </Grid>
     
      <GridDescibe>
      <p>Rating :{prop.rating.rate}  ขายได้ {prop.rating.count} ชิ้น</p>
      <p>รายละเอียด</p>
     
      <p>Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆLorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ </p>
      
      </GridDescibe>
      
      
      
    </Contrainer>
  )
}
export default CardProduct;