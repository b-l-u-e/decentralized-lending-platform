import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-[250px]">
      <List>
        {/* Dashboard */}
        <ListItem button component={NavLink} to="/  " activeClassName="active">
          <ListItemText primary="Dashboard" />
        </ListItem>

        <Divider />
        {/* Loans */}
        <ListItem
          button
          component={NavLink}
          to="/loans"
          activeClassName="active"
        >
          <ListItemText primary="Loans" />
        </ListItem>

        <Divider />
        <ListItem
          button
          component={NavLink}
          to="/smart-contracts"
          activeClassName="active"
        >
          <ListItemText primary="Smart Contracts" />
        </ListItem>

        <Divider />
        <ListItem
          button
          component={NavLink}
          to="/profile"
          activeClassName="active"
        >
          <ListItemText primary="Profile" />
        </ListItem>

        <Divider />
      </List>
    </nav>
  );
};

export default Sidebar;
