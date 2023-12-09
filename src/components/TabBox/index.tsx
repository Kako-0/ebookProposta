import { useState } from "react";
import Text from "../Text";
import { TabContent, TabsContainer, TabsNav, TabTitle } from "./styles";

type TabType = string | JSX.Element;
interface TabBoxProps {
  items: (string | JSX.Element)[];
  whiteText?: boolean;
}

function TabBox({ items, whiteText }: TabBoxProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_: React.ChangeEvent<object>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <TabsContainer>
      <TabsNav
        value={activeTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        selectionFollowsFocus
      >
        {items.map((_: TabType, index: number) => (
          <TabTitle
            disableFocusRipple
            key={`Tab-${index + 1}`}
            label={index + 1}
            tabIndex={0}
            className={activeTab === index ? "active" : ""}
            sx={{
              color: whiteText ? "#fff" : "",
            }}
          />
        ))}
      </TabsNav>
      <TabContent className="noRead">
        <Text>{items[activeTab]}</Text>
      </TabContent>
      <div className="leitor">
        <p>Conteúdo do Tab:</p>
        {items.map((e, i) => (
          <p key={`${i + 1}`}>{e}</p>
        ))}
      </div>
    </TabsContainer>
  );
}

export default TabBox;
