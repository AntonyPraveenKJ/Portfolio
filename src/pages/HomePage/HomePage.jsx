import React from "react";
import styled, { keyframes } from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import profileImage from "../../assets/images/profileImage.png";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const StyledHomePageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-image: linear-gradient(
    45deg,
    rgb(255, 255, 255),
    rgba(216, 190, 250, 0.56)
  );
`;

const float = keyframes`
0% { transform: translateY(0); }
50% { transform: translateY(-10px); }
100% { transform: translateY(0); }
`;

const StyledImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 50%;
  animation: ${float} 5s ease-in-out infinite;
  background-image: linear-gradient(
    45deg,
    rgba(0, 89, 253, 0.5),
    rgba(130, 245, 115, 0.5)
  );
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.57);
`;

const GradientText = styled(Typography)`
  background: linear-gradient(
    45deg,
    rgba(0, 89, 253, 0.5),
    rgba(130, 245, 115, 0.5)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const QuotedText = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  font-style: italic;
  position: relative;
  padding: 1.5rem 2rem;
  color: #444;
  max-width: 700px;
  margin: auto;
  //   background-color: #f9f9f9;
  //   border-left: 4px solid #ff6ec4;
  //   border-radius: 8px;
  //   box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  &::before {
    content: "“";
    font-size: 4rem;
    color: rgb(68, 68, 68);
    position: absolute;
    left: 10px;
    top: -20px;
    font-family: Georgia, serif;
  }

  &::after {
    content: "”";
    font-size: 4rem;
    color: rgb(68, 68, 68);
    position: absolute;
    right: 10px;
    bottom: -20px;
    font-family: Georgia, serif;
  }
`;

const HomePage = () => {
  return (
    <StyledHomePageBox data-testid="home-page-container">
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          marginTop: { xs: "80px", md: "80px" },
        }}
      >
        <Grid sx={{ width: { sm: "70%", md: "35%" }, textAlign: "center" }}>
          <StyledImage src={profileImage} alt="Profile" />
        </Grid>
        <Grid>
          <Typography
            sx={{
              color: "#191919",
              fontWeight: "bold",
              fontFamily: "Roboto Mono",
              fontSize: { xs: "1.5rem", md: "2.3rem" },
            }}
          >
            Hi, I'm
          </Typography>
          <GradientText
            fontFamily="Roboto Mono"
            fontWeight="bold"
            fontSize="55px"
          >
            Praveen
          </GradientText>
          <Typography
            sx={{
              color: "#191919",
              fontWeight: "bold",
              fontFamily: "Roboto Mono",
              fontSize: { xs: "1.1rem", md: "1.5rem" },
            }}
          >
            I'm a Full Stack Developer
          </Typography>
          <Box display="flex" justifyContent="start" gap={1} mt={2}>
            <IconButton
              component="a"
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#1877F2",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)", // Zoom out slightly
                },
              }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#E1306C",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)", // Zoom out slightly
                },
              }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#0A66C2",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)", // Zoom out slightly
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#333",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)", // Zoom out slightly
                },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>
      </Container>
      <QuotedText>
        I'm a passionate MERN Stack Developer with hands-on experience building
        full-stack web applications using MongoDB, Express.js, React, and
        Node.js. I specialize in creating scalable, responsive, and
        user-friendly solutions with clean code and modern design. I love
        solving real-world problems through code and continuously improving my
        skills in both frontend and backend technologies.
      </QuotedText>
    </StyledHomePageBox>
  );
};

export default HomePage;
