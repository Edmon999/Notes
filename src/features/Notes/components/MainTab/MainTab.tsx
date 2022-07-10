import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Container, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CreateNote from "../CreateNote/CreateNote";
import ShowNotes from "../ShowNotes/ShowNotes";
import { ROUTE_PATHS } from "../../../../rootes/rootes";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    location.pathname === ROUTE_PATHS.SHOW_NOTE || ""
      ? navigate(ROUTE_PATHS.CREATE_NOTE)
      : navigate(ROUTE_PATHS.SHOW_NOTE);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "60" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Create Note" {...a11yProps(0)} />
          <Tab label="Notes" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CreateNote />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ShowNotes />
      </TabPanel>
    </Box>
  );
}
