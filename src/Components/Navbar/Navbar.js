import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import friend from "../../Images/friend.jfif";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Mera Dost</Typography>
                <img className={classes.image} src={friend} alt="friend" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
            <div>
                <Button component={Link} to="/aboutUs" variant="contained" color="primary">About Us</Button>
            </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
