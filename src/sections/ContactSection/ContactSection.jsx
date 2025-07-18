import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";
import { GradientText, iconsData } from "../HomeSection/HomeSection";
import Lottie from "lottie-react";
import contactAnimation from "../../assets/lottieFiles/ContactUs.json";
import IconsRow from "../../components/IconsRow";
import emailjs from "@emailjs/browser";
import successAnimation from "../../assets/lottieFiles/success.json";
import IconClose from "@mui/icons-material/Close";
import CenterModal from "../../components/CenterModal";

const StyledContactSectionWrapper = styled(Box)`
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
    45deg,
    rgba(216, 190, 250, 0.56),
    rgb(255, 255, 255)
  );
  padding-bottom: 50px;
  box-shadow: 0 -6px 8px 0 rgba(184, 184, 184, 0.3);
`;

const MessageSendModal = (
  <>
    <Box sx={{ width: "100px", height: "100px", mx: "auto" }}>
      <Lottie animationData={successAnimation} loop={false} />
    </Box>
    <Typography py={2} color="#191919" fontFamily="Roboto Mono">
      Thanks for connecting! I’ll be in touch with you soon.
    </Typography>
  </>
);

const ContactSection = () => {
  const formRef = useRef();
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY, // Your Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY, // Your Template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Your Public Key
      )
      .then(
        (result) => {
          setOpenModal(true);
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong");
          console.error("EmailJS Error:", error); // 👈 This will help debug
        }
      );
  };
  return (
    <>
      <StyledContactSectionWrapper id="contact">
        <GradientText
          variant="h3"
          fontFamily="Nunito"
          fontWeight="bold"
        >
          Contact Me
        </GradientText>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { sm: "column", md: "row" },
            flexWrap: "wrap",
            width: "80%",
            paddingTop: "20px",
          }}
        >
          <Box>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                width: { sm: "100%", md: "400px" },
                boxSizing: "border-box",
                backdropFilter: "blur(10px)",
                backgroundImage: `linear-gradient(45deg,rgba(203, 168, 248, 0.56),rgb(255, 255, 255))`,
                borderRadius: "20px",
              }}
            >
              <Typography
                color="#038cfcff"
                fontFamily="Roboto Mono"
                variant="subtitle1"
                gutterBottom
              >
                You can reach me via email or drop a message below:
              </Typography>

              <Box
                component="form"
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
              >
                <TextField
                  size="small"
                  fullWidth
                  label="Your Name"
                  name="name"
                  margin="normal"
                  required
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  margin="normal"
                  required
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  margin="normal"
                  required
                />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ mt: 2, fontFamily: "Roboto Mono" }}
                  fullWidth
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ width: "400px" }}>
            <Lottie animationData={contactAnimation} loop={true} />
          </Box>
        </Box>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <Box sx={{ mt: 1 }}>
            <Typography
              color="#038cfcff"
              fontFamily="Roboto Mono"
              variant="body2"
            >
              <strong>Email:</strong> antonypraveen145@gmail.com
            </Typography>
            <Typography
              color="#038cfcff"
              fontFamily="Roboto Mono"
              variant="body2"
            >
              <strong>Phone:</strong> +91-9895625618
            </Typography>
            <Typography
              color="#038cfcff"
              fontFamily="Roboto Mono"
              variant="body2"
            >
              <strong>Location:</strong> Cochin, India
            </Typography>
          </Box>
        </Grid>
      </StyledContactSectionWrapper>

      {openModal && (
        <CenterModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          children={MessageSendModal}
        />
      )}
    </>
  );
};

export default ContactSection;
