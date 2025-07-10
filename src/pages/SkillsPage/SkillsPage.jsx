import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Lottie from "lottie-react";
import animation from "../../assets/animation.json";
import ProgressBar from "../../components/ProgressBar";
import { useInView } from "react-intersection-observer";

const StyledSkillsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
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

const skills = [
  { skill: "React.js", value: 90 },
  { skill: "Node.js", value: 80 },
  { skill: "MongoDB", value: 75 },
  { skill: "JavaScript", value: 85 },
  { skill: "HTML/CSS", value: 95 },
];

const SkillsPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, thereshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);
  return (
    <StyledSkillsWrapper ref={ref}>
      <GradientText
        variant="h2"
        fontFamily="Dancing Script, cursive"
        fontWeight="bold"
      >
        Skills
      </GradientText>
      <Box
        width="80%"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "wrap",
          height: { sm: "300px", md: "400px" },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { sm: "70%", md: "50%" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {skills.map(({ skill, value }) => (
            <ProgressBar key={skill} skill={skill} targetValue={value} shouldAnimate={hasAnimated} />
          ))}
        </Grid>
        <Grid
          sx={{
            width: { sm: "30%", md: "50%" },
            paddingBottom: { sm: "50px", md: "90px" },
          }}
        >
          <Lottie animationData={animation} loop={true} />
        </Grid>
      </Box>
    </StyledSkillsWrapper>
  );
};

export default SkillsPage;
