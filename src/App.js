import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BasicExample from './card';
import { Row, Col } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './navbar';
import CardComponent from './component';
import ModalExample from './footer';


function App() {
  const watches = [
    {
      name: "G-Shock Casio 08",
      price: "$600",
      caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName:
        "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
      category: "Women's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2020/12/BA-110RG-1ADR-1.jpg",
    },
     {
      name: "G-shock Casio 09 ",
      price: "$600",
      caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img: "https://iwc.com.pk/wp-content/uploads/2022/01/GM-S2100-3ADR-1.jpg",
    },
    {
      name: "G-shock Casio 10 ",
      price: "$600",
      caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img:"https://iwc.com.pk/wp-content/uploads/2023/03/GMA-S2100-1ADR.jpg"
    },
    {
      name: "G-shock Casio 11 ",
      price: "$600",
      caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img:"https://iwc.com.pk/wp-content/uploads/2023/03/GA-2000S-1ADR.jpg"
    },
    {
      name: "G-shock Casio 12 ",
      price: "$600",
      caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img:"https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100-1A3DR.jpg"
    },
   {
      name: "G-shock Casio 13 ",
      price: "$600",
      caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",

      fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
      category: "Men's Watch",
      color: [, "golden", "silver"],
      Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
      img:"https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100FR-5ADR.jpg"
    },
]


return (
  

  
  <div className="App">
    <div>
      <Example/>
    </div>
    <div>
      <CardComponent/>
    </div>
    
    <Row>
      {
      watches.map((watch, index) => {
        return (
          <Col key={index} xs={4} sm={4} md={6} lg={4}>
            <BasicExample
              title={watch.name}
              img={watch.img}
              caption={watch.caption}
            />
          </Col>
        );
      })}
    </Row>
    {/* footer  */}
 <div>
  <ModalExample/>
 </div>

    
  </div>
  
);
}

export default App;