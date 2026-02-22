import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import rv from "../../Assets/Projects/rv.png";
import henryGameZone from "../../Assets/Projects/henry_game_zone.png";
// import suicide from "../../Assets/Projects/suicide.png";
import pokemons from "../../Assets/Projects/pokemon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis ultimos <strong className="purple">Trabajos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui dejo algunos de mis recientes desarrollos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={henryGameZone}
              isBlog={false}
              title="Henry Game-Zone"
              description="E-commerce de videojuegos, diferentes medios de pago integrados, cards individuales con descripcion y trailer de cada juego, carrito de compras, favoritos, perfil personalizable y más! Construido con React, Node.js, Postgress, Javascript, Bootstrap, CSS."
              ghLink="https://github.com/caroescalante/PF-Henry-GameZone-1"
              demoLink="https://pf-henry-game-zone-1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemons}
              isBlog={false}
              title="Pokemons"
              description="Proyecto de casas de Pokemons, es una web donde podrás ver todos los pokemons, filtrarlos, ordenarlos, buscar por nombre. Puedes crear tu propio pokemon, y navegar con el paginador. Construido con React, Node.js, Postgress, Javascript, CSS, HTML"
              ghLink="https://github.com/caroescalante/PI-Pokemons"
              demoLink="https://pi-pokemons-rose.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rv}
              isBlog={false}
              title="Landing RV"
              description="Landing para la empresa RV. Se trata de una landing de 3 secciones con toda la informacion necesaria para sentirte seguro de contratar sus servicios. Construida con React, Javascript, Bootstrap, CSS."
              ghLink="https://github.com/caroescalante/RV-WebC"
              demoLink="https://rv-web-c.vercel.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
