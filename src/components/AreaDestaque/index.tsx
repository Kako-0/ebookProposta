import { Box } from "@mui/material";

interface AreaDestaqueProps {
  image: string;
  altImg: string;
  destaques: {
    left: string;
    top: string;
    content: JSX.Element | JSX.Element[] | string;
  }[];
}

function AreaDestaque({ image, altImg, destaques }: AreaDestaqueProps) {
  return (
    <Box>
      <img src={image} alt={altImg} />
      {destaques.map((marker, index) => {
        return <div key={`asd${index + 1}`} />;
      })}
    </Box>
  );
}
export default AreaDestaque;
