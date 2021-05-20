import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Feature from '../Feature/Feature';

const CompressorHomePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const compressorHomePageFeatures = [
        { uniqueId:'1', title: "Pdf Compressor", inputType: ".pdf", acceptKey: "application/pdf", content: "Compress your PDF document to smaller size", buttonText: "Proceed to pdf compressor"},
        //{ uniqueId:'2', title: "Pptx Compressor", inputType: ".pptx", acceptKey: "application/vnd.openxmlformats-officedocument.presentationml.presentation", content: "Compress your MS Powerpoint Presentation document of .pptx type to smaller size", buttonText: "Proceed to pptx compressor"},
        //{ uniqueId:'3', title: "Ppt Compressor", inputType: ".ppt", acceptKey: "application/vnd.ms-powerpoint", content: "Compress your MS Powerpoint Presentation document of .ppt type to smaller size", buttonText: "Proceed to ppt compressor"},
        { uniqueId:'4', title: "Png Compressor", inputType: ".png", acceptKey: "image/png", content: "Compress your PNG image file to smaller size", buttonText: "Proceed to png compressor"},
        { uniqueId:'5', title: "Jpeg/Jpg Compressor", inputType: ".jpeg", acceptKey: "image/jpeg", content: "Compress your JPEG/JPG image file to smaller size", buttonText: "Proceed to jpeg/jpg compressor"}
    ];

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    {compressorHomePageFeatures.map((feature) => (
                        <Grid key={feature.uniqueId} item xs={12} sm={6}>
                            <Feature feature={feature} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grow>
    )
}

export default CompressorHomePage
