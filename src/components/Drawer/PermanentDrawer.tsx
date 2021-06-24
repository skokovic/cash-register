import * as React from "react";

import Drawer from "@material-ui/core/Drawer";

import Toolbar from "@material-ui/core/Toolbar";

import Divider from "@material-ui/core/Divider";

import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { blue } from "@material-ui/core/colors";
import styled from "@emotion/styled";
import DrawerList from "./DrawerList";
import { Link } from "react-router-dom";

export const drawerWidth = 240;

const MyDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: "border-box";
  }
`;

const CashAppLogo = styled(LocalAtmIcon)`
  font-size: 40px;
  color: ${blue[500]};
`;

const PermanentDrawer = () => {
  return (
    <MyDrawer variant="permanent" anchor="left">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Link to="/">
          <CashAppLogo />
        </Link>
      </Toolbar>
      <Divider />
      <DrawerList />
    </MyDrawer>
  );
};

export default PermanentDrawer;
