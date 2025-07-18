import React, { useEffect, useRef, useState } from "react";
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
import IconsRow from "../../components/IconsRow";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import handWave from "../../assets/lottieFiles/handWave.json";
import bgBlob from "../../assets/images/low-poly-grid-haikei.svg";

const MotionGrid = motion.create(Grid);

const StyledHomePageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
      45deg,
      rgba(216, 190, 250, 0.56),
      rgb(255, 255, 255)
    ),
    url(${bgBlob}); /* no backticks here */

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 4px 0 8px 2px rgba(151, 151, 151, 0.3);
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const TypingText = styled.h3`
  background-color: red;
  display: inline-block;
  white-space: pre;
  border-right: 2px solid rgba(0, 0, 0, 1);
  padding-right: 4px;
  margin: 0;
  animation: ${blink} 1s step-end infinite;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.84),
    rgba(5, 5, 5, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  font-family: Roboto Mono;
  font-size: 20px;

  @media (min-width: 600px) {
    font-size: 26px;
  }

  @media (min-width: 900px) {
    font-size: 32px;
  }
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

export const GradientText = styled(Typography)`
  background: linear-gradient(
    45deg,
    rgba(0, 89, 253, 0.76),
    rgba(41, 252, 13, 0.93)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const QuotedText = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.7;
  font-style: italic;
  position: relative;
  padding: 1.5rem 2rem;
  color: rgba(43, 42, 42, 1);
  max-width: 700px;
  margin: auto;

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

export const iconsData = [
  {
    icon: <LinkedInIcon fontSize="small" />,
    link: import.meta.env.VITE_LINKEDIN_ID,
    color: "#0A66C2",
  },
  {
    icon: <GitHubIcon fontSize="small" />,
    link: import.meta.env.VITE_GIT_ID,
    color: "#333",
  },
];

const HomeSection = () => {
  const fullText = "Let Me Introduce Myself!";
  const [displayedText, setDisplayedText] = useState("");
  const [showQuote, setShowQuote] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = indexRef.current;
      if (i < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(i));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowQuote(true), 500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledHomePageBox id="home">
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
        <MotionGrid
          sx={{ width: { sm: "70%", md: "35%" }, textAlign: "center" }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <StyledImage src={profileImage} alt="Profile" />
        </MotionGrid>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <GradientText
                fontFamily="Roboto Mono"
                fontWeight="bold"
                fontSize="55px"
              >
                Praveen
              </GradientText>
              <Grid
                sx={{
                  width: "55px",
                  marginTop: "7px",
                }}
              >
                <Lottie animationData={handWave} loop={true} />
              </Grid>
            </Grid>

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
            <Box display="flex" justifyContent="start" gap={1}>
              {iconsData.map((iconData, index) => (
                <IconsRow
                  key={index}
                  icon={iconData.icon}
                  link={iconData.link}
                  color={iconData.color}
                />
              ))}
            </Box>
          </Grid>
        </motion.div>
      </Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <TypingText>{displayedText}</TypingText>
      </Box>
      {showQuote && (
        <QuotedText
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          I'm a passionate MERN Stack Developer with hands-on experience
          building full-stack web applications using MongoDB, Express.js, React,
          and Node.js. I specialize in creating scalable, responsive, and
          user-friendly solutions with clean code and modern design. I love
          solving real-world problems through code and continuously improving my
          skills in both frontend and backend technologies.
        </QuotedText>
      )}
    </StyledHomePageBox>
  );
};

export default HomeSection;
