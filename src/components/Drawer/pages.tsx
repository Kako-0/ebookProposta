import { ButtonProps, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DataEbook from "../../routes/data";
import { PagesBox, PagesButton } from "./styles";

function LinkButton<C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PagesButton {...props} />;
}

function Pages() {
  const { totalPages } = DataEbook;
  const pages = Array.from({ length: totalPages });
  return (
    <PagesBox>
      {pages.map((_, index) => {
        return (
          <LinkButton
            key={`page-${index + 1}`}
            component={Link}
            to={`/${index === 0 ? "" : index}`}
            disableFocusRipple
          >
            <Typography className="numPage">
              {index === undefined ? 1 : index + 1}
            </Typography>
          </LinkButton>
        );
      })}
    </PagesBox>
  );
}

export default Pages;
