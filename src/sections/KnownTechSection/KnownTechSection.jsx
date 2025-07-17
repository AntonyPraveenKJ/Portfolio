import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { GradientText, QuotedText } from "../HomeSection/HomeSection";
import Lottie from "lottie-react";
import devSkillsAnimation from "../../assets/lottieFiles/developerSkills.json";
import reactIcon from "../../assets/images/react.svg";
import jsIcon from "../../assets/images/javascript.svg";
import tsIcon from "../../assets/images/typescript.svg";
import nodeIcon from "../../assets/images/nodedotjs.svg";
import mongoIcon from "../../assets/images/mongodb.svg";
import expressIcon from "../../assets/images/express.svg";
import nextIcon from "../../assets/images/nextdotjs.svg";
import muiIcon from "../../assets/images/mui.svg";
import htmlIcon from "../../assets/images/html5.svg";
import cssIcon from "../../assets/images/css.svg";
import bsIcon from "../../assets/images/bootstrap.svg";
import figmaIcon from "../../assets/images/figma.svg";
import jestIcon from "../../assets/images/jest.svg";
import gitIcon from "../../assets/images/github.svg";
import queryIcon from "../../assets/images/reactquery.svg";
import reduxIcon from "../../assets/images/redux.svg";

const icons = [
  { name: "JavaScript", src: jsIcon, alt: "js-icon" },
  { name: "TypeScript", src: tsIcon, alt: "ts-icon" },
  { name: "React Js", src: reactIcon, alt: "react-icon" },
  { name: "Node Js", src: nodeIcon, alt: "node-icon" },
  { name: "MongoDB", src: mongoIcon, alt: "mongo-icon" },
  { name: "Express Js", src: expressIcon, alt: "express-icon" },
  { name: "Next Js", src: nextIcon, alt: "next-icon" },
  { name: "Redux", src: reduxIcon, alt: "redux-icon" },
  { name: "React Query", src: queryIcon, alt: "query-icon" },
  { name: "MUI", src: muiIcon, alt: "mui-icon" },
  { name: "HTML5", src: htmlIcon, alt: "html-icon" },
  { name: "CSS", src: cssIcon, alt: "css-icon" },
  { name: "Bootstrap", src: bsIcon, alt: "bootstrap-icon" },
  { name: "Figma", src: figmaIcon, alt: "figma-icon" },
  { name: "Jest", src: jestIcon, alt: "jest-icon" },
  { name: "Git", src: gitIcon, alt: "git-icon" },
];

const KnownTechSectionWrapper = styled(Box)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;

const StyledTechIconImage = styled.img`
  width: 30px;
  height: 30px;
`;

const KnownTechSection = () => {
  return (
    <KnownTechSectionWrapper id="technologies">
      <GradientText
        textAlign="center"
        variant="h2"
        fontFamily="Dancing Script, cursive"
        fontWeight="bold"
        paddingBottom="20px"
      >
        Known Technologies
      </GradientText>
      <QuotedText
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Empowering ideas through clean code and modern web technologies.
      </QuotedText>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
          width: "80%",
          marginTop: "20px",
        }}
      >
        <Grid sx={{ width: "300px", height: "300px" }}>
          <Lottie animationData={devSkillsAnimation} loop={true} />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            width: "500px",
          }}
        >
          {icons.map((icon, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                flexDirection: "column",
                width: "100px",
                height: "100px",
                backgroundColor: "white",
                boxShadow: "0 4px 6px -4px rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.5s ease",
                },
              }}
            >
              <StyledTechIconImage src={icon.src} alt={icon.alt} />
              <Typography fontSize="15px" color="#191919" mt="10px">
                {icon.name}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Box>
    </KnownTechSectionWrapper>
  );
};

export default KnownTechSection;
