// TODO remove, this demo shouldn't need to reset the theme.

import React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Avatar,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "../assets/logo.jpg";

// imports tinyComponentes
import Copyright from "../tinycomponents/Copyrigth";
import StyledAppBar from "../tinycomponents/StyledAppBar";
import StyledDrawner from "../tinycomponents/StyledDranwer";

//import componentes
import Demo from "./Demo";
import theme from "../theme/Theme";
const LandingPage = () => {
  const projects = [
    {
      name: "Proyecto 1",
      description: "Descripción del proyecto 1...",
      technologies: "React, Node.js, MongoDB",
      repoLink: "https://github.com/tu-usuario/proyecto1",
    },
    {
      name: "Proyecto 2",
      description: "Descripción del proyecto 2...",
      technologies: "Angular, Express, MySQL",
      repoLink: "https://github.com/tu-usuario/proyecto2",
    },
  ];

  return (
    <>
      <Container
        sx={{
          bgcolor: "primary.main",
          width: "100%",
          maxWidth: "1536px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "antiquewhite",
            alignContent: "center",
            alignItems: 'center',
          }}
        >
          <Box sx={{ backgroundColor: "red" , width:'20%',}}>
            <img src="logo" alt="Descripción de la imagen" />
          </Box>
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "white",
              p: 4,
              textAlign: "center",
              backgroundColor: "blue",
              width:'80%',
            }}
          >
            <Typography variant="h1">Bienvenido a Mi Portafolio</Typography>
            <Typography variant="h2">Desarrollador Full Stack</Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
              Contáctame
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Avatar
            src="/static/images/avatar/1.jpg"
            alt="Mi Foto"
            sx={{ width: 100, height: 100, m: "auto" }}
          />
          <Typography variant="h2">Sobre Mí</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Soy un desarrollador full stack con experiencia en diversas
            tecnologías como React, Node.js, Angular, y más...
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link href="https://github.com/tu-usuario" target="_blank">
              <GitHubIcon fontSize="large" />
            </Link>
            <Link href="https://linkedin.com/in/tu-usuario" target="_blank">
              <LinkedInIcon fontSize="large" />
            </Link>
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h2" textAlign="center">
            Proyectos
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
                  <Typography variant="h5">{project.name}</Typography>
                  <Typography variant="body1">{project.description}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tecnologías: {project.technologies}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.repoLink}
                    sx={{ mt: 1 }}
                  >
                    Ver Código
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Copyright />
      </Container>
    </>
  );
};

export default LandingPage;
