import { useState } from "react"
 import Pic1 from "./images/01-joachim.png" 
 import Pic2 from "./images/02-pagnia.png"
 import Pic3 from "./images/03-southAmerica.png"
 import Pic4 from "./images/04-backToPagnia.png"
 import Pic5 from "./images/05-westAfrica.png"
 import Pic6 from "./images/06-cameroonCoast.png"
 import '../App.css';
 import { InfoBox1 } from "./InfoBox1"
 import { Button, ButtonGroup,Table, ListGroup,ListGroupItem, Card } from "react-bootstrap"
 import 'bootstrap/dist/css/bootstrap.min.css';


 export default function MapLoader() {
	 
	return(
		<ClickHandler/>
	)
 }

function ClickHandler() {

	const [localeIndex, setLocaleIndex]=useState(0)

	const [number, setNumber]=useState(1)

	const locations = [
		{place:"Jachymov", URL:`${Pic1}`,info:`${InfoBox1.description}` },
		{place:"Berlin", URL:`${Pic2}`,info: `${InfoBox1.description}`},
		{place:"Madrid", URL:`${Pic3}`,info: `${InfoBox1.description}`},
		{place:"Rio", URL:`${Pic4}`,info: `${InfoBox1.description}`},
		{place:"Ghana", URL:`${Pic5}`,info: `${InfoBox1.description}`},
		{place:"Cameroon", URL:`${Pic6}`,info: `${InfoBox1.description}`},		


	]

	return(

		(
			locations.map((location, index)=>{
				if (localeIndex===index) {
					return<div key={index}>

						<Table>
							<thead>
								<tr>
									<td>
										TIMELINE
									</td>
									<td>
										LOCALE
									</td>
									<td>
										Info Card
									</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="MapDisplay1">
										{location.place}
									</td>
									<td className="MapDisplay">
										<img src={location.URL}/>
									</td>
									<td className="MapDisplay2">
										<Card>
											<Card style={{ width: '18rem' }}>
   <Card.Img variant="top" style={{width:"fit-content", objectFit: "none"}} src={`https://picsum.photos/283/300?random=${number}`}/>
   <Card.Body>
    <Card.Title style={{color: "seagreen", border:"1px solid", width:"fit-content"}} >Get Random Entries</Card.Title>
    <Card.Text>
     	{location.info}
    </Card.Text>
    </Card.Body>
	</Card>	
	</Card>
</td>
</tr>
</tbody>
</Table>
<ListGroup className="list-group-flush">
    <ListGroupItem>{location.place}</ListGroupItem>
    <ListGroupItem variant="info">
		<Button variant="outline-primary" onClick={()=> {
		setLocaleIndex(localeIndex +1)
			setNumber(number+1)
		}} >Load Next</Button>
	 <Button variant="outline-primary" onClick={(e)=> 
		setLocaleIndex(localeIndex -1)} >Load Prev</Button>
	</ListGroupItem>  
  </ListGroup> 
					</div>
					
				}
			})
		)
		
	)
	
} 