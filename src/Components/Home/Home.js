import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Feature from './Feature/Feature';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const homeFeatures = [
        { uniqueId:'1', title: "Convertors", toLink:"/convertorHomePage", content: "Convert your documents to your require formats", buttonText: "Proceed to convert document"},
        { uniqueId:'2', title: "Compressors", toLink:"/compressorHomePage", content: "Compress your documents to occupy small space", buttonText: "Proceed to compress document"}
    ];

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    {homeFeatures.map((feature) => (
                        <Grid key={feature.uniqueId} item xs={12} sm={6}>
                            <Feature feature={feature}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
