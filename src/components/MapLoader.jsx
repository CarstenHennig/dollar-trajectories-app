import { useState, useEffect } from "react";
import Pic1 from "./images/01-joachim.png";
import Pic2 from "./images/02-pagnia.png";
import Pic3 from "./images/03-southAmerica.png";
import Pic4 from "./images/06-cameroonCoast.png";
import Pic5 from "./images/UsCongress.jpg";
import "../App.css";
import { InfoBox1, InfoBox2, InfoBox3, InfoBox4, InfoBox5 } from "./InfoBox1";
import VideoPlayer from "./VideoPlayer";
import Image1 from "./images/Jachymov-Joachimsthaler.jpeg";
import Image2 from "./images/SpanienPhilippstaler.jpeg";
import Image3 from "./images/SouthAmerica-spain-real.jpeg";
import Image4 from "./images/WestAfrica-CFA.jpeg";
import Image5 from "./images/silver-dollars-new.jpg";

export default function MapLoader() {
  return <ClickHandler />;
}

function ClickHandler() {
  const locations = [
    {
      place: "Jachymov",
      URL: `${Pic1}`,
      image: `${Image1}`,
      info: `${InfoBox1.description}`,
      lat: 50.3585,
      lng: 12.9347,
    },
    {
      place: "Spain",
      URL: `${Pic2}`,
      image: `${Image2}`,
      info: `${InfoBox2.description}`,
      lat: 40.416775,
      lng: -3.70379,
    },
    {
      place: "South America",
      URL: `${Pic3}`,
      image: `${Image3}`,
      info: `${InfoBox3.description}`,
      lat: -23.533773,
      lng: -46.62529,
    },
    {
      place: "Cameroon",
      URL: `${Pic4}`,
      image: `${Image4}`,
      info: `${InfoBox4.description}`,
      lat: 4.061536,
      lng: 9.786072,
    },
    {
      place: "United States",
      URL: `${Pic5}`,
      image: `${Image5}`,
      info: `${InfoBox5.description}`,
      lat: 38.897957,
      lng: -77.03656,
    },
  ];

  const [localeIndex, setLocaleIndex] = useState(0);
  const [number, setNumber] = useState(1);
  const [activePoint, setActivePoint] = useState(locations[0]);

  return (
    <div className="container">
      <h1>(1) History of the U.S. Dollar</h1>
      <div className="titles">
        <h2>Timeline</h2>
        <h2>Locale: {activePoint.place} </h2>
        <h2>Info Card</h2>
      </div>
      <div className="mainContents">
        <div className="leftInfo">
          <ul>
            <li>
              <button
                className="selected"
                onClick={() => {
                  setActivePoint(locations[0]);
                }}
              >
                <h3>Jachymov (Tolar)</h3>
              </button>
            </li>
            <li>
              <button
                className="selected"
                onClick={() => {
                  setActivePoint(locations[1]);
                }}
              >
                <h3>Spain (Taler)</h3>
              </button>
            </li>
            <li>
              <button
                className="selected"
                onClick={() => {
                  setActivePoint(locations[2]);
                }}
              >
                <h3>South America (Silver coins)</h3>
              </button>
            </li>
            <li>
              <button
                className="selected"
                onClick={() => {
                  setActivePoint(locations[3]);
                }}
              >
                <h3>West Africa (Ndola)</h3>
              </button>
            </li>
            <li>
              <button
                className="selected"
                onClick={() => {
                  setActivePoint(locations[4]);
                }}
              >
                <h3>USA (Dollar)</h3>
              </button>
              <br />
              <br />
              <div className="videoFrame">
                <VideoPlayer />
              </div>
            </li>
          </ul>
        </div>
        <div className="centerInfo">
          {/* <img src={activePoint.URL} />{" "} */}
          <Map activePoint={activePoint} />
        </div>
        <div className="rightInfo">
          <img id="image-info-card" src={activePoint.image} />
          <div
            className="infoBoxed"
            dangerouslySetInnerHTML={{ __html: activePoint.info }}
          >
            {/* {activePoint.info} */}
          </div>
        </div>
      </div>
    </div>
  );
}

let map;

function Map(props) {
  useEffect(() => {
    map &&
      map.panTo({ lat: props.activePoint.lat, lng: props.activePoint.lng });
  }, [props.activePoint]);
  useEffect(() => {
    map = new window.google.maps.Map(document.getElementById("maphere"), {
      center: { lat: props.activePoint.lat, lng: props.activePoint.lng },
      zoom: 12,
    });
  }, []);
  return <div id="maphere" style={{ width: "auto-Fit", height: "600px" }} />;
}
