import React from 'react';
import Header from "./Header";
import "../styles/Inicio.css";
import { Link } from "react-router-dom";
import "boxicons";
import FormCards from './FormCards';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "boxicons";
import "../styles/Cards.css";
import Swal from "sweetalert2";
import BibliotecaCard1 from "../img/Biblioteca/descarga.jpg";
import BibliotecaCard2 from "../img/Biblioteca/descarga1.jpg";
import BibliotecaCard3 from "../img/Biblioteca/descarga2.jpg";
import BibliotecaCard4 from "../img/Biblioteca/descarga3.jpg";
import BibliotecaCard5 from "../img/Biblioteca/descarga4.jpg";
import BibliotecaCard6 from "../img/Biblioteca/descarga5.jpg";
import BibliotecaCard7 from "../img/Biblioteca/descarga6.jpg";
import BibliotecaCard8 from "../img/Biblioteca/descarga7.jpg";
import BibliotecaCard9 from "../img/Biblioteca/descarga8.jpg";
import BibliotecaCard10 from "../img/Biblioteca/descarga9.jpg";
import BibliotecaCard11 from "../img/Biblioteca/descarga10.jpg";
import BibliotecaCard12 from "../img/Biblioteca/descarga11.jpg";
import BibliotecaCard13 from "../img/Biblioteca/descarga12.jpg";
import BibliotecaCard14 from "../img/Biblioteca/descarga13.jpg";
import BibliotecaCard15 from "../img/Biblioteca/descarga14.jpg";

function FormBibliotecas() {
  return (
    <div> <header><Header/></header>

  
<div className="card-container">
      <Card className="card">
        <Card.Img variant="top" src={BibliotecaCard1} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard1} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      {/* Repeat the above Card component for the other cards */}
      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard2} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard2} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard3} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard3} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard4} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard4} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard5} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard5} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard6} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard6} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard7} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard7} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard8} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard8} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard9} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard9} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard10} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard10} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard11} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard11} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard12} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard12} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard13} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard13} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard14} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard14} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
      <Card.Img variant="top" src={BibliotecaCard15} />
        <Card.Body>
          <Card.Title className="card-title">Card Title</Card.Title>
          <Card.Text className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={BibliotecaCard15} className="card-link">Mas informacion</Card.Link>
        </Card.Body>
      </Card>
    </div>

     
     
    <footer>
       <div className="footer-container">
         <div className="footer-links">
           <p id="copy">&copy; 2025 CoworkingSpaces.</p>
           <p>
             <Link to="/privacy">Privacidad</Link> |{" "}
             <Link to="/terms">Términos</Link> |{" "}
             <Link to="/site-map">Mapa del sitio</Link>
           </p>
         </div>

         <div className="footer-social">
           <p>Síguenos:</p>
           <a
             target="_blank"
             href="https://www.instagram.com"
             rel="noopener noreferrer"
           >
             <box-icon
               type="logo"
               name="instagram-alt"
               aria-label="Instagram Icon"
             ></box-icon>
           </a>
           <a
             target="_blank"
             href="https://www.facebook.com"
             rel="noopener noreferrer"
           >
             <box-icon
               type="logo"
               name="facebook-circle"
               aria-label="Facebook Icon"
             ></box-icon>
           </a>
         </div>
       </div>
     </footer></div>
  )
}

export default FormBibliotecas