import DefaultPage from "../../components/DefaultPage";
import CascateBox from "../../components/CascateBox";
import ColorBox from "../../components/ColorBox";
import ContourBox from "../../components/ContourBox";
import IconBox from "../../components/IconBox";
import Simple from "../../components/Simple";
import Slide from "../../components/Slide";
import TabBox from "../../components/TabBox";
import Zoom from "../../components/Zoom";
import img from "./Frame 4.png";
import img2 from "./pag4_img1.jpg";
import ImageText from "../../components/ImageText";
import ZoomText from "../../components/ZoomText";
import MatrixButtonsBox from "../../components/MatrixButtonsBox";

function Page1() {
  return (
    <DefaultPage title="Turismo Acessível">
      <CascateBox title="!">
        Portanto o turismo é um direito de todos os cidadãos e deve seguir os
        documentos normativos que garantem a acessibilidade em viagens com
        autonomia e segurança.
      </CascateBox>
      <ColorBox whiteText>
        Portanto o turismo é um direito de todos os cidadãos e deve seguir os
        documentos normativos que garantem a acessibilidade em viagens com
        autonomia e segurança.
      </ColorBox>
      <ContourBox>
        Portanto o turismo é um direito de todos os cidadãos e deve seguir os
        documentos normativos que garantem a acessibilidade em viagens com
        autonomia e segurança.
      </ContourBox>
      <IconBox icon="citar">
        Portanto o turismo é um direito de todos os cidadãos e deve seguir os
        documentos normativos que garantem a acessibilidade em viagens com
        autonomia e segurança.
      </IconBox>
      <Simple>
        Portanto o turismo é um direito de todos os cidadãos e deve seguir os
        documentos normativos que garantem a acessibilidade em viagens com
        autonomia e segurança.
      </Simple>
      <Slide
        items={[
          { text: "conteudo do slide 1" },
          {
            text: (
              <>
                conteudo do <b>slide 2</b>
              </>
            ),
          },
          { text: "conteúdo do slide 3" },
        ]}
      />
      <TabBox items={[<>Conteudo 1</>, <>conteudo 2</>]} whiteText />

      <Zoom image={img} alt="" />

      <ImageText image={img} altImage="">
        <p>
          Portanto o turismo é um direito de todos os cidadãos e deve seguir os
          documentos normativos que garantem a acessibilidade em viagens com
          autonomia e segurança.
        </p>
        <p>
          Portanto o turismo é um direito de todos os cidadãos e deve seguir os
          documentos normativos que garantem a acessibilidade em viagens com
          autonomia e segurança.
        </p>
      </ImageText>
      <ZoomText imgleft image={img} altImage="">
        <p>
          Portanto o turismo é um direito de todos os cidadãos e deve seguir os
          documentos normativos que garantem a acessibilidade em viagens com
          autonomia e segurança.
        </p>
        <p>
          Portanto o turismo é um direito de todos os cidadãos e deve seguir os
          documentos normativos que garantem a acessibilidade em viagens com
          autonomia e segurança.
        </p>
      </ZoomText>

      <MatrixButtonsBox
        image={img2}
        altImage="imagedesc"
        data={[
          "Portanto o turismo ",
          "é um direito de todos os cidadãos ",
          "s cidadãos e deve seguir os documentos normativos que gara",
          "autonomia e segurança.",
        ]}
      />
    </DefaultPage>
  );
}

export default Page1;
