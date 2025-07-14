import { Box } from "@mui/material";
import styled from "styled-components";
import StatsRound from "../../components/StatsRound";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const StatsSectionWrapper = styled(Box)`
  display: flex;
  gap: 60px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const statsData = [
  {
    name: "Projects Completed",
    count: 10,
  },
  {
    name: "Years of Experience",
    count: 3,
  },
  {
    name: "Happy Clients",
    count: 5,
  },
  {
    name: "Git Commits",
    count: 100,
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);
  return (
    <StatsSectionWrapper ref={ref}>
      {statsData.map((data, index) => (
        <StatsRound
          key={index}
          name={data.name}
          count={data.count}
          shouldAnimate={hasAnimated}
        />
      ))}
    </StatsSectionWrapper>
  );
};

export default StatsSection;
