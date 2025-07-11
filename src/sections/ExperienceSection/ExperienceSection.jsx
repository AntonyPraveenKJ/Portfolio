import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { GradientText, QuotedText } from "../HomeSection/HomeSection";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 0px 20px;
  background: #f8f9fa;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 900px;
  margin: auto;
`;

const Card = styled(motion.div)`
  background: #ffffff;
  border-left: 5px solid #0059fd;
  border-radius: 10px;
  padding: 20px 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    top: 20px;
    left: -11px;
    position: absolute;
    background-color: #0059fd;
    border-radius: 50%;
    border: 4px solid #fff;
  }
`;

const Position = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 4px;
  color: #333;
`;

const Company = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 10px;
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #444;
`;

const ExperienceSectionWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const experiences = [
  {
    position: "Associate IT Consultant",
    company: "Bhaviaans Technologies pvt.ltd",
    duration: "Feb 2025 – Present",
    description:
      "Developed dashboards for IoT lighting systems using React and Material UI. Implemented roles/permissions, wrote unit tests in Jest, and worked in a micro frontend architecture.",
  },
  {
    position: "Junior IT Consultant",
    company: "Infenox Technologies pvt.ltd",
    duration: "Aug 2023 – Jan 2025",
    description:
      "Worked on a B2C storefront using React and Bootstrap. Focused on responsive layouts, internationalization, and product filtering logic for an e-commerce site.",
  },
  {
    position: "Frontend Intern",
    company: "Infenox Technologies pvt.ltd",
    duration: "Mar 2023 – July 2023",
    description:
      "Worked on a B2C storefront using React and Bootstrap. Focused on responsive layouts, internationalization, and product filtering logic for an e-commerce site.",
  },
];

const ExperienceSection = () => {
  return (
    <ExperienceSectionWrapper>
      <GradientText
        variant="h2"
        fontFamily="Dancing Script, cursive"
        fontWeight="bold"
      >
        Experience
      </GradientText>
      <QuotedText
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Every project is an opportunity to learn, grow, and build something
        meaningful — not just for users, but for myself as a developer.
      </QuotedText>
      <Section>
        <Timeline>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Position>{exp.position}</Position>
              <Company>{exp.company}</Company>
              <Duration>{exp.duration}</Duration>
              <Description>{exp.description}</Description>
            </Card>
          ))}
        </Timeline>
      </Section>
    </ExperienceSectionWrapper>
  );
};

export default ExperienceSection;
