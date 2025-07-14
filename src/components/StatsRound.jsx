import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const StatsRoundWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: linear-gradient(
    45deg,
    rgba(0, 89, 253, 0.5),
    rgba(55, 255, 29, 0.8)
  );
  box-shadow: 0 7px 6px -4px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 0 4px 6px 4px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
`;

const StatsRound = ({ count, name, shouldAnimate }) => {
  const [countToShow, SetCountToShow] = useState(0);
  useEffect(() => {
    if (!shouldAnimate) return;
    let num = 0;
    const timer = setInterval(() => {
      if (num >= count) {
        clearInterval(timer);
      } else {
        num += 1;
        SetCountToShow(num);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [count, shouldAnimate]);

  return (
    <StatsRoundWrapper>
      <Typography
        textAlign="center"
        fontWeight="bold"
        fontFamily="Roboto Mono"
        fontSize="30px"
      >
        {countToShow}+
      </Typography>
      <Typography
        width="100px"
        textAlign="center"
        fontWeight="bold"
        fontFamily="Dancing Script"
        fontSize="22px"
      >
        {name}
      </Typography>
    </StatsRoundWrapper>
  );
};

export default StatsRound;
