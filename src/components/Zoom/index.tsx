import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useState } from "react";
import IconButton from "../IconButton";
import {
  BtnContainer,
  ButtonStyled,
  Container,
  StyledAppBar,
  ZoomedContainer,
  ZoomedImage,
} from "./styles";

interface ZoomProps {
  image: string;
  alt: string;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />;
});

function Zoom({ image, alt = "" }: ZoomProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ButtonStyled onClick={handleClickOpen}>
        <img src={image} alt={alt} />
      </ButtonStyled>
      <Container>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <StyledAppBar>
            <BtnContainer>
              <IconButton type="close" onClick={handleClose} label="Fechar" />
            </BtnContainer>
          </StyledAppBar>
          <ZoomedContainer>
            <ZoomedImage src={image} />
          </ZoomedContainer>
        </Dialog>
      </Container>
    </>
  );
}

export default Zoom;
