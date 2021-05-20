import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import Feature from '../Feature/Feature';

const ConvertorHomePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const convertorHomePageFeatures = [
        { uniqueId:'1', title: "Docx To Pdf Convertor", inputType: ".docx", outputType: ".pdf", acceptKey: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", content: "Convert your MS word document of .docx type to PDF document of .pdf type", buttonText: "Proceed to docx to pdf convertor"},
        { uniqueId:'2', title: "Doc to Pdf Convertor", inputType: ".doc", outputType: ".pdf", acceptKey: "application/msword", content: "Convert your MS word document of .doc type to PDF document of .pdf type", buttonText: "Proceed to doc to pdf convertor"},
        { uniqueId:'3', title: "Pptx to Pdf Convertor", inputType: ".pptx", outputType: ".pdf", acceptKey: "application/vnd.openxmlformats-officedocument.presentationml.presentation", content: "Convert your MS Powerpoint Presentation document of .pptx type to PDF document of .pdf type", buttonText: "Proceed to pptx to pdf convertor"},
        { uniqueId:'4', title: "Ppt to Pdf Convertor", inputType: ".ppt", outputType: ".pdf", acceptKey: "application/vnd.ms-powerpoint", content: "Convert your MS Powerpoint Presentation document of .ppt type to PDF document of .pdf type", buttonText: "Proceed to ppt to pdf convertor"},
        { uniqueId:'5', title: "Odt to Pdf Convertor", inputType: ".odt", outputType: ".pdf", acceptKey: "application/vnd.oasis.opendocument.text", content: "Convert your OpenDocument text document of .odt type to PDF document of .pdf type", buttonText: "Proceed to odt to pdf convertor"},
        { uniqueId:'6', title: "Png to Pdf Convertor", inputType: ".png", outputType: ".pdf", acceptKey: "image/png", content: "Convert your PNG image file of .png type to PDF document of .pdf type", buttonText: "Proceed to png to pdf convertor"},
        { uniqueId:'7', title: "Jpeg/Jpg to Pdf Convertor", inputType: ".jpeg", outputType: ".pdf", acceptKey: "image/jpeg", content: "Convert your JPEG/JPG image file of .jpeg/.jpg type to PDF document of .pdf type", buttonText: "Proceed to jpeg/jpg to pdf convertor"}
        //{ uniqueId:'6', title: "Pdf to Docx Convertor", inputType: ".pdf", outputType: ".docx", acceptKey: "application/pdf", content: "Convert your Pdf document to MS word document format of .docx", buttonText: "Proceed to pdf to docx convertor"}
    ];

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                    {convertorHomePageFeatures.map((feature) => (
                        <Grid key={feature.uniqueId} item xs={12} sm={6}>
                            <Feature feature={feature} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grow>
    )
}

export default ConvertorHomePage
