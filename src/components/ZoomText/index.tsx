import Text from "../Text";
import Zoom from "../Zoom";
import { ImageContainer, ImageTextContainer, TextContainer } from "./styles";

interface ImageTextProps {
  imgleft?: boolean;
  image: string;
  altImage: string;
  children: JSX.Element | JSX.Element[] | string;
}

function ZoomText({
  imgleft = false,
  image,
  altImage,
  children,
}: ImageTextProps) {
  return (
    <ImageTextContainer imgleft={imgleft ? "true" : undefined}>
      <TextContainer>
        <Text>{children}</Text>
      </TextContainer>
      <ImageContainer imgleft={imgleft ? "true" : undefined}>
        <Zoom image={image} alt={altImage} />
      </ImageContainer>
    </ImageTextContainer>
  );
}

export default ZoomText;
