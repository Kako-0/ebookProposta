import { useState, useContext, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Typography } from "@mui/material";
import RefContext from "../../contexts/ReferenceContext";
import IconButton from "../IconButton";
import Leitor from "../Leitor/SpeechSynteshis";
import { HeaderBox } from "./styles";
import References from "./references";
import Credits from "./credits";
import Menu from "./menu";
import Summary from "./summary";
import Pages from "./pages";

interface DrawerItemProps {
  idItem: string;
  nameItem: string;
  item: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

// Items do drawer
function DrawerItem({
  idItem,
  item,
  set,
  nameItem,
  children,
}: DrawerItemProps) {
  return (
    <Drawer
      anchor="left"
      open={item}
      onClose={() => {
        set(!item);
      }}
      id={idItem}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <HeaderBox>
        <IconButton
          label="Fechar"
          type="close"
          onClick={() => {
            set(!item);
          }}
        />
        <Typography className="headerText" variant="body1">
          {nameItem}
        </Typography>
        <Box className="leitorContainer noRead">
          <Leitor component={`#${idItem}`} />
        </Box>
      </HeaderBox>
      {children}
    </Drawer>
  );
}

function DrawerInfo() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [refs, setRefs] = useState(false);
  const [creds, setCreds] = useState(false);
  const [summary, setSummary] = useState(false);
  const [pages, setPages] = useState(false);

  const { reference, setReference } = useContext(RefContext);

  useEffect(() => {
    const openDrawer = (key: number) => {
      if (key === 0) return;
      setOpen((prevOpen) => !prevOpen);
      setSelected(key);
      setRefs((prevRefs) => !prevRefs);
    };
    openDrawer(reference);
    setReference(0);
  }, [reference, setReference]);

  useEffect(() => {
    if (selected !== 0 && refs) {
      const drawerContainer = document.getElementById("DrawerContainer");
      if (drawerContainer) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const refId = document.getElementById(`reference-${selected}`)!;
        refId.scrollIntoView();
      }
    }
  }, [refs, selected]);

  return (
    <>
      <IconButton
        label="Menu do infográfico"
        type="menu"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      />
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(!open)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Menu
          open={open}
          setOpen={setOpen}
          setCreds={setCreds}
          creds={creds}
          setRefs={setRefs}
          refs={refs}
          pages={pages}
          setPages={setPages}
          summary={summary}
          setSummary={setSummary}
        />

        <DrawerItem
          nameItem="Créditos"
          set={setCreds}
          item={creds}
          idItem="CreditosContainer"
        >
          <Credits />
        </DrawerItem>

        <DrawerItem
          nameItem="Referências"
          set={setRefs}
          item={refs}
          idItem="ReferenciasContainer"
        >
          <References />
        </DrawerItem>

        <DrawerItem
          nameItem="Páginas"
          set={setPages}
          item={pages}
          idItem="PaginasContainer"
        >
          <Pages />
        </DrawerItem>

        <DrawerItem
          nameItem="Sumário"
          set={setSummary}
          item={summary}
          idItem="SumarioContainer"
        >
          <Summary />
        </DrawerItem>
      </Drawer>
    </>
  );
}

export default DrawerInfo;
