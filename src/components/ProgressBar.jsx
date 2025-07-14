import React, { useEffect, useState } from "react";
import { LinearProgress, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 5,
    transition: "width 1s ease-in-out",
  },
}));

const ProgressBar = ({ skill, targetValue, shouldAnimate }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let current = 0;
    const timer = setInterval(() => {
      if (current >= targetValue) {
        clearInterval(timer);
      } else {
        current += 1;
        setValue(current);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [shouldAnimate, targetValue]);

  return (
    <Box width="300px" mb={3}>
      <Box display="flex" justifyContent="space-between" mb={0.5}>
        <Typography fontFamily="Roboto Mono" color="black">{skill}</Typography>
        <Typography fontFamily="Roboto Mono" color="black">{value}%</Typography>
      </Box>
      <StyledLinearProgress variant="determinate" value={value} />
    </Box>
  );
};

export default ProgressBar;
