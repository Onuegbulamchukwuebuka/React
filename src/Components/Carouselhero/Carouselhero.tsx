import Carousel from "react-bootstrap/Carousel";
import firstslide from "../../Assets/water.jpg";
import firstslide2 from "../../Assets/image2.jpg";
import firstslide3 from "../../Assets/rail.jpg";
import "./Carouselhero.css";

function Carouselhero() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="img-div">
          <img src={firstslide} alt="" />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-div">
          <img src={firstslide2} alt="" />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-div">
          <img src={firstslide3} alt="" />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselhero;
