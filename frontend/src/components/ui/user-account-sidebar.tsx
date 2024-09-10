import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="w-[250px]">
            <List>
                {/* Dashboard */}
                <ListItem button component={NavLink} to="/  " activeClassName="active">
                    <ListItemText primary="Dashboard" />
                </ListItem>

                {/* Transactions */}
                <ListItem button component={NavLink} to="/transactions" activeClassName="active">
                    <ListItemText primary="Transactions" />
                </ListItem>

                {/* Loans */}
                <ListItem button component={NavLink} to="/loans" activeClassName="active">
                    <ListItemText primary="Loans" />
                </ListItem>

                <ListItem button component={NavLink} to="/ask-ai" activeClassName="active">
                    <ListItemText primary="Ask AI" />
                </ListItem>
            </List>

            <Divider /></nav>
    );
};

export default Sidebar;
