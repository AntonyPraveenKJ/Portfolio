import React from "react";
import styled, { keyframes } from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import profileImage from "../../assets/images/profileImage.jpeg";
import Container from "@mui/material/Container";

const StyledHomePageBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to left,
    rgba(231, 252, 229, 0.7),
    rgba(13, 222, 250, 0.56)
  );
`;

const float = keyframes`
0% { transform: translateY(0); }
50% { transform: translateY(-10px); }
100% { transform: translateY(0); }
`;

const StyledImage = styled.img`
  width: 40%;
  height: auto;
  border-radius: 50%;
  animation: ${float} 5s ease-in-out infinite;
  border: 5px solid white;
`;

const GradientText = styled(Typography)`
background: linear-gradient(45deg,rgb(0, 89, 253),rgb(130, 245, 115));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
color: transparent;
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
        }}
      >
        <Grid textAlign="center" sx={{ flex: 1 }}>
          <StyledImage src={profileImage} alt="Profile" />
        </Grid>
        <Grid>
          <Typography variant="h2">Hi, I'm</Typography>
          <GradientText variant="h1">Praveen</GradientText>
        </Grid>
      </Container>
    </StyledHomePageBox>
  );
};

export default HomePage;
