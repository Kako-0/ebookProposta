import { Box } from "@mui/material";
import { useState } from "react";
import IconButton from "../IconButton";
import Text from "../Text";
import { SlideContainer, SliderContent, TextContainer } from "./styles";
import { ColorTypes } from "../../utils/GlobalTypes";

interface SlideProps {
  color?: ColorTypes;
  items: {
    img?: string;
    altImg?: string;
    text: string | JSX.Element;
  }[];
}

function SlideContent(props: { content: string | JSX.Element }) {
  const { content } = props;
  return (
    <TextContainer>
      <Text>{content}</Text>
    </TextContainer>
  );
}

function Slide({ items, color = "primary.main" }: SlideProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevClick = () => {
    setActiveSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveSlide((prev) =>
      prev === items.length - 1 ? items.length - 1 : prev + 1
    );
  };

  return (
    <SlideContainer>
      <Box className="noRead">
        <IconButton
          type="previous"
          onClick={handlePrevClick}
          label="Slide anterior"
          disabled={activeSlide === 0}
        />
      </Box>
      <SliderContent
        sx={{
          borderColor: (theme) =>
            theme.themeMode === "contrast" ? "#fff" : `${color}`,
        }}
        className="noRead"
      >
        {items[activeSlide].img && (
          <img src={items[activeSlide].img} alt={items[activeSlide].altImg} />
        )}
        <SlideContent key={activeSlide} content={items[activeSlide].text} />
      </SliderContent>
      <Box className="noRead">
        <IconButton
          type="next"
          onClick={handleNextClick}
          label="Slide seguinte"
          disabled={activeSlide === items.length - 1}
        />
      </Box>
      <div className="leitor">
        <p>Conteúdo do slide:</p>
        {items.map((e, i) => (
          <p key={`${i + 1}`}>
            {e.text},{e.altImg || ""}
          </p>
        ))}
      </div>
    </SlideContainer>
  );
}

export default Slide;
