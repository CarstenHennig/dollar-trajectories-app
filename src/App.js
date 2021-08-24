import React from 'react';
import './App.css';
import { Card, Spinner, Table } from 'react-bootstrap';
import Image from "./components/images/Joachimstaler.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import MapLoader from './components/MapLoader';

function App() {


  return (
    <div>
 <Table striped bordered hover>
   <thead>
     <tr>
       <td ><h1>Timeline</h1> </td>
       <td><h1>{MapLoader}</h1></td>
       <td><h1>Info Card</h1></td>
     </tr>
   </thead>
   <tbody>
     <tr>
      <td>
        <p>It all began at St Joachim's Valley</p>
       <p>The night was bright </p>
       <p>Hawaii went up in flames</p>
      </td>
      <td className="Genesis">
        <h2>Load Earth here</h2>
         <Spinner animation="grow" variant="primary" size="20rem"/>
      </td>
      <td>
       <Card variant="success" style={{ width: '30rem' }}>
  <Card.Img variant="top" src={Image} style={{height:"300px", objectFit:"fil"}} />
  <Card.Body>  
    <Card.Title as="h3" >Dollar History</Card.Title>
    <Card.Text style={{textAlign:"justify", width:"400px"}}>
      
      <p>The incredible history of the U.S. Dollar: The mother of probably the most important currency in the world is the "Tolar", a silver coin from St. Joachimstal in Bohemia (today: Czech Republic).</p>
      <p>
        The silver from the Ore Mountains between Germany and the Czech Republic was already world-famous and sought after as a commodity at that time. Linguistically, it was not far from "Tolar" to "Dollar", but the first silver coins of this coinage first had to assert themselves in the turmoil of the Renaissance in the 15th and 16th century...
      </p>
    </Card.Text>
   
  </Card.Body>
</Card>
      </td>

     </tr>

   </tbody>

 </Table>
    </div>
  );
}

export default App;
