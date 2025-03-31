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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      {/* Repeat the above Card component for the other cards */}
      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
          <Card.Link href="#" className="card-link">Card Link</Card.Link>
          <Card.Link href="#" className="card-link">Another Link</Card.Link>
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