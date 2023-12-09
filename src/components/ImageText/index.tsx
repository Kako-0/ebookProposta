import Text from "../Text";
import { ImageContainer, ImageTextContainer, TextContainer } from "./styles";

interface ImageTextProps {
  imgleft?: boolean;
  image: string;
  altImage: string;
  children: JSX.Element | JSX.Element[] | string;
}

function ImageText({
  imgleft = false,
  image,
  altImage,
  children,
}: ImageTextProps) {
  return (
    <ImageTextContainer
      imgleft={imgleft ? "true" : undefined}
      className="imagetext"
    >
      <TextContainer className="text">
        <Text>{children}</Text>
      </TextContainer>
      <ImageContainer imgleft={imgleft ? "true" : undefined} className="img">
        <img src={image} alt={altImage} />
      </ImageContainer>
    </ImageTextContainer>
  );
}

export default ImageText;
