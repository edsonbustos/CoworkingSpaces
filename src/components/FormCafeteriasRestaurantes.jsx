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
import Card1 from "../img/Cafeterias y restaurantes con wifi/descarga.jpg";
import Card2 from "../img/Cafeterias y restaurantes con wifi/descarga (1).jpg";
import Card3 from "../img/Cafeterias y restaurantes con wifi/descarga2.jpg";
import Card4 from "../img/Cafeterias y restaurantes con wifi/descarga3.jpg";
import Card5 from "../img/Cafeterias y restaurantes con wifi/descarga4.jpg";
import Card6 from "../img/Cafeterias y restaurantes con wifi/descarga5.jpg";
import Card7 from "../img/Cafeterias y restaurantes con wifi/descarga6.jpg";
import Card8 from "../img/Cafeterias y restaurantes con wifi/descarga7.jpg";
import Card9 from "../img/Cafeterias y restaurantes con wifi/descarga8.jpg";
import Card10 from "../img/Cafeterias y restaurantes con wifi/descarga9.jpg";
import Card11 from "../img/Cafeterias y restaurantes con wifi/descarga10.jpg";
import Card12 from "../img/Cafeterias y restaurantes con wifi/descarga11.jpg";
import Card13 from "../img/Cafeterias y restaurantes con wifi/descarga12.jpg";
import Card14 from "../img/Cafeterias y restaurantes con wifi/descarga13.jpg";
import Card15 from "../img/Cafeterias y restaurantes con wifi/descarga14.jpg";


const constCard1 = () => {
  Swal.fire({
    title: "El Rincón del Sabor",
    text: "Un espacio minimalista, con decoración moderna y una selección de cafés de origen único, donde los clientes pueden disfrutar de una experiencia de cata de cafés. Ideal para los amantes del buen café.",
    footer: 'Contactenos Tel: 612 345 678 Facebook: El_Rincón_delSabor / Instagram: El_Rincón_delSabor'
    
 
  });
};
const constCard2 = () => {
    Swal.fire({
      title: "",
      text: "Un lugar que evoca nostalgia, con muebles antiguos y una atmósfera relajada. Ofrecen una mezcla de café clásico y pasteles caseros, inspirados en los cafés europeos.",
      footer: 'Contactenos Tel: 55 1234 5678  Facebook:  / Instagram: '
      
   
    });
  };
  const constCard3 = () => {
    Swal.fire({
      title: "",
      text: "Un espacio que promueve la sostenibilidad, con muebles reciclados, productos orgánicos y un menú que incluye opciones veganas y sin gluten.",
      footer: 'Contactenos Tel: 9 11 1234 5678  Facebook:  / Instagram: '
      
   
    });
  };
  const constCard4 = () => {
    Swal.fire({
      title: "",
      text: "Un espacio acogedor que invita a leer, con estanterías llenas de libros para que los clientes disfruten mientras toman su café. La decoración suele ser acogedora y tranquila.",
      footer: 'Contactenos Tel: 57 1 2345678  Facebook:  / Instagram: '
      
   
    });
  };
  const constCard5 = () => {
    Swal.fire({
      title: "",
      text: " Un lugar en el que las paredes están llenas de arte local y las mesas están decoradas con piezas de diseño moderno. Perfecto para los amantes del arte y la cultura.",
      footer: 'Contactenos Tel: 56 9 8765 4321 Facebook:  / Instagram: '
      
   
    });
  };
  const constCard6 = () => {
    Swal.fire({
      title: "",
      text: "Un lugar innovador que combina la ciencia y la gastronomía para ofrecer experiencias culinarias sorprendentes, como espumas, geles y platos desestructurados.",
      footer: 'Contactenos Tel: 51 1 2345678 Facebook:  / Instagram: '
      
   
    });
  };
  const constCard7 = () => {
    Swal.fire({
      title: "",
      text: "Un espacio informal donde los comensales disfrutan de una variedad de pequeños platillos, típicos de la cocina española. Suele tener un ambiente relajado, ideal para compartir entre amigos.",
      footer: 'Contactenos Tel: 1 202-555-0123 Facebook:  / Instagram: '
      
   
    });
  };
  const constCard8 = () => {
    Swal.fire({
      title: "",
      text: "Un restaurante que mezcla diferentes tradiciones culinarias, como la japonesa y la mexicana, ofreciendo platos innovadores y sorprendentes.",
      footer: 'Contactenos Tel: 11 91234-5678 Facebook:  / Instagram: '
      
   
    });
  };
  const constCard9 = () => {
    Swal.fire({
      title: "",
      text: "Un ambiente rústico y acogedor, donde los platos principales son carnes a la parrilla, asadas con un toque especial, acompañadas de guarniciones y salsas.",
      footer: 'Contactenos Tel: 44 20 7946 0958 Facebook:  / Instagram: '
      
   
    });
  };
  const constCard10 = () => {
    Swal.fire({
      title: "",
      text: "Un lugar con un enfoque en la nutrición y el bienestar, que ofrece opciones orgánicas, veganas, sin gluten y bajas en calorías.",
      footer: 'Contactenos Tel: 33 1 70 18 56 78  Facebook:  / Instagram: '
      
   
    });
  };
  const constCard11 = () => {
    Swal.fire({
      title: "",
      text: "Con una atmósfera relajada y decoraciones marinas, este restaurante se especializa en platos de mariscos frescos, como ceviches, langostas y camarones.",
      footer: 'Contactenos Tel:  Facebook:  / Instagram: '
      
   
    });
  };
  const constCard12 = () => {
    Swal.fire({
      title: "",
      text: "Un espacio con una decoración minimalista y elegante, donde los comensales disfrutan de sushi de alta calidad y platos japoneses tradicionales.",
      footer: 'Contactenos Tel: 06 12345678  Facebook:  / Instagram: '
      
   
    });
  };
  const constCard13 = () => {
    Swal.fire({
      title: "",
      text: "Un restaurante clásico con una decoración inspirada en Italia, donde los platos principales son pizzas, pastas frescas y una variedad de antipastos.",
      footer: 'Contactenos Tel:  4 1234 5678 Facebook:  / Instagram: '
      
   
    });
  };
  const constCard14 = () => {
    Swal.fire({
      title: "",
      text: "Un restaurante dedicado a la cocina completamente vegana, que ofrece platos innovadores, saludables y sabrosos con ingredientes frescos y locales.",
      footer: 'Contactenos Tel:  Facebook: 495 123-45-67 / Instagram: '
      
   
    });
  };
  const constCard15 = () => {
    Swal.fire({
      title: "",
      text: "Elegante y sofisticado, con un menú que incluye clásicos como el foie gras, coq au vin y crème brûlée, en un ambiente romántico y refinado.",
      footer: 'Contactenos Tel:  Facebook: 567 123-45-67  / Instagram: '
      
   
    });
  };



function FormCafeteriasRestaurantes() {
  return (
    <div>
     <header><Header/></header>

     <div className="card-container">
     <Card className="card">
          <Card.Img variant="top" src={Card1} />
          <Card.Body>
            <Card.Title className="card-title">El Rincón del Sabor</Card.Title>
            <Card.Text className="card-text">
              Disfruta de tu comida mientras navegas sin interrupciones, ideal para trabajar o estudiar en un ambiente relajado.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Puntarenas, Quepos</ListGroup.Item>
            <ListGroup.Item>Lunes a Viernes: 11:00 AM - 10:00 PM Sábados: 12:00 PM - 11:00 PM Domingos: Cerrado</ListGroup.Item>
            <ListGroup.Item>Gratis</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#" onClick={constCard1} className="card-link">Mas informacion</Card.Link>
            
          </Card.Body>
        </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card2} />
        <Card.Body>
          <Card.Title className="card-title">Café y Cultura</Card.Title>
          <Card.Text className="card-text">
          Ambiente tranquilo y cómodo para realizar tus tareas mientras disfrutas de un café o un almuerzo delicioso.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Heredia , Santo Domingo</ListGroup.Item>
          <ListGroup.Item>Lunes a Domingo: 9:00 AM - 9:00 PM</ListGroup.Item>
          <ListGroup.Item>Gratis</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard2} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card3} />
        <Card.Body>
          <Card.Title className="card-title">Sabor a Tradición</Card.Title>
          <Card.Text className="card-text">
          Combina lo mejor de la tecnología y la gastronomía, con Wi-Fi rápido y menús deliciosos para todos los gustos.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Puntarenas ,Quepos</ListGroup.Item>
          <ListGroup.Item>Lunes a Domingo: 9:00 AM - 9:00 PM</ListGroup.Item>
          <ListGroup.Item>Precio 2 mil / 4$ , incluye bebida.</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard3} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card4}  />
        <Card.Body>
          <Card.Title className="card-title">La Casa del Café</Card.Title>
          <Card.Text className="card-text">
          Si necesitas concentrarte en tu trabajo o hacer una videollamada con Wi-Fi este es el lugar perfecto para ti.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Heredia , Santa Bárbara</ListGroup.Item>
          <ListGroup.Item>Lunes a Domingo: 8:00 AM - 11:00 PM</ListGroup.Item>
          <ListGroup.Item>Gratis</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard4} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card5} />
        <Card.Body>
          <Card.Title className="card-title">Café del Sol</Card.Title>
          <Card.Text className="card-text">
          Con Wi-Fi confiable y un ambiente acogedor, puedes disfrutar de una comida deliciosa mientras avanzas en tus proyectos.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Guanacaste ,Cañas</ListGroup.Item>
          <ListGroup.Item>Lunes a Viernes: 11:00 AM - 10:00 PM

Sábados: 12:00 PM - 11:00 PM

Domingos: Cerrado</ListGroup.Item>
          <ListGroup.Item>Gratis</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard5} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card6} />
        <Card.Body>
          <Card.Title className="card-title">El Refugio del Gusto</Card.Title>
          <Card.Text className="card-text">
            Para que puedas disfrutar de una buena comida mientras te mantienes conectado.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>San José ,Santa Ana</ListGroup.Item>
          <ListGroup.Item>Lunes a Jueves: 6:00 PM - 11:00 PM

Viernes y Sábados: 1:00 PM - 12:00 AM

Domingo: 1:00 PM - 10:00 PM</ListGroup.Item>
          <ListGroup.Item> 1$ por hora</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard6} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card7}/>
        <Card.Body>
          <Card.Title className="card-title">La Trattoria del Centro</Card.Title>
          <Card.Text className="card-text">
          Si estás buscando un lugar donde puedas trabajar fuera de casa, te ofrecemos el ambiente ideal para hacerlo.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>San José ,Santa Ana</ListGroup.Item>
          <ListGroup.Item>Lunes a Domingo: 8:00 AM - 11:00 PM</ListGroup.Item>
          <ListGroup.Item>Precio 3 mil / 6$ , incluye Cafe.</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard7} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card8}/>
        <Card.Body>
          <Card.Title className="card-title">La Cocina de la Abuela</Card.Title>
          <Card.Text className="card-text">
          Si estás buscando un lugar donde puedas trabajar fuera de casa, te ofrecemos el ambiente ideal para hacerlo.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>San José ,Santa Ana</ListGroup.Item>
          <ListGroup.Item>Lunes a Domingo: 8:00 AM - 11:00 PM</ListGroup.Item>
          <ListGroup.Item>Precio 3 mil / 6$ , incluye Cafe.</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard8} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card9} />
        <Card.Body>
          <Card.Title className="card-title">Bistro & Pan</Card.Title>
          <Card.Text className="card-text">
          Perfecto para quienes necesitan un espacio para reuniones informales, con Wi-Fi gratuito y una comida exquisita.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Limón , Guácimo </ListGroup.Item>
          <ListGroup.Item>Lunes a Domingo: 8:00 AM - 11:00 PM</ListGroup.Item>
          <ListGroup.Item>Gratis</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard9} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card10} />
        <Card.Body>
          <Card.Title className="card-title">El Jardín Secreto</Card.Title>
          <Card.Text className="card-text">
          Encuentra el equilibrio perfecto entre trabajo y ocio, disfrutando de tu comida favorita mientras navegas o trabajas.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Guanacaste ,Santa Cruz</ListGroup.Item>
          <ListGroup.Item>Lunes a Domingo: 9:00 AM - 9:00 PM</ListGroup.Item>
          <ListGroup.Item>Precio $2 , incluye Cafe.</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard10} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card11} />
        <Card.Body>
          <Card.Title className="card-title">Café Delicias</Card.Title>
          <Card.Text className="card-text">
          La mejor combinación para un almuerzo productivo o una tarde de café, con Wi-Fi que te permite conectarte sin interrupciones.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cartago , Paraíso </ListGroup.Item>
          <ListGroup.Item>Lunes a Jueves: 6:00 PM - 11:00 PM

Viernes y Sábados: 1:00 PM - 12:00 AM

Domingo: 1:00 PM - 10:00 PM</ListGroup.Item>
          <ListGroup.Item>Gratis</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard11} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card12} />
        <Card.Body>
          <Card.Title className="card-title">La Cueva del Chef</Card.Title>
          <Card.Text className="card-text">
          Ofrecemos un ambiente cómodo y tranquilo para realizar tu trabajo o estudiar mientras disfrutas de una buena comida.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Alajuela , San Ramón</ListGroup.Item>
          <ListGroup.Item>Lunes a Domingo: 9:00 AM - 9:00 PM</ListGroup.Item>
          <ListGroup.Item>Gratis</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard12} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card13}/>
        <Card.Body>
          <Card.Title className="card-title">Sabores y Sentimientos</Card.Title>
          <Card.Text className="card-text">
          Ya sea que estés trabajando en un proyecto personal o profesional,te brindamos la comodidad y conexión que necesitas.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>San José ,Desamparados </ListGroup.Item>
          <ListGroup.Item>Lunes a Viernes: 12:00 PM - 10:00 PM

Sábados: 1:00 PM - 11:00 PM

Domingos: Cerrado</ListGroup.Item>
          <ListGroup.Item>Gratis</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard13} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top" src={Card14}  />
        <Card.Body>
          <Card.Title className="card-title">Café y Compañía</Card.Title>
          <Card.Text className="card-text">
          No solo servimos platos deliciosos, sino que también ofrecen Wi-Fi gratuito para que puedas disfrutar de tu tiempo allí mientras trabajas.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Alajuela , San Ramón</ListGroup.Item>
          <ListGroup.Item>Lunes a Viernes: 12:00 PM - 10:00 PM

Sábados: 1:00 PM - 11:00 PM

Domingos: Cerrado</ListGroup.Item>
          <ListGroup.Item>Gratis</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard14} className="card-link">Mas informacion</Card.Link>
          
        </Card.Body>
      </Card>

      <Card className="card">
        <Card.Img variant="top"src={Card15} />
        <Card.Body>
          <Card.Title className="card-title">El Banquete</Card.Title>
          <Card.Text className="card-text">
          Perfecto para quienes necesitan conectarse mientras disfrutan de una rica comida, estos lugares combinan lo mejor de ambos mundos.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>San José ,Escazú </ListGroup.Item>
          <ListGroup.Item>Lunes a Viernes: 11:00 AM - 10:00 PM

Sábados: 12:00 PM - 11:00 PM

Domingos: Cerrado</ListGroup.Item>
          <ListGroup.Item>Gratis</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Link href="#" onClick={constCard15} className="card-link">Mas informacion</Card.Link>
          
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
      </footer>
    </div>
  );
}

export default FormCafeteriasRestaurantes;
