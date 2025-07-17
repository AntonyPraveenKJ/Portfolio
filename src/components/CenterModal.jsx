import { Modal, Paper } from "@mui/material";
import IconClose from "@mui/icons-material/Close";

const CenterModal = ({ open, onClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="success-modal"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backdropFilter: "blur(3px)",
      }}
    >
      <Paper
        sx={{
          position: "relative",
          width: 300,
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          outline: "none",
        }}
        elevation={8}
      >
        <IconClose
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            cursor: "pointer",
            color: "#555",
          }}
        />
        {children}
      </Paper>
    </Modal>
  );
};

export default CenterModal;
