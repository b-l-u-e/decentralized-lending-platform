import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="user-account-sidebar">
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
            </List>

            <Divider /></nav>
    );
};

export default Sidebar;
