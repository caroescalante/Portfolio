import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola!, Mi nombre es <span className="purple">Carolina Escalante </span>
            soy de <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            Actualmente trabajo como full stack developer en Patagonia IT Soluciones Empresariales.
            <br />
            Soy estudiante de Ingenieria en Sistemas de Informacion en la UTN.
            <br />
            <br />
            A parte de programar, te dejo algunas actividades que me encantan hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Acrobacias en telas
            </li>
            <li className="about-activity">
              <ImPointRight /> Correr
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar con mi perrita
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Los que pueden imaginar cualquier cosa, pueden crear lo imposible"{" "}
          </p>
          <footer className="blockquote-footer">Alan Turing</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
