import React from "react";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { Link, history, useHistory } from "react-router-dom";
import { goToConvertorForm } from "../../../actions/convertors";
import { goToCompressorForm } from "../../../actions/compressor";

const Feature = ({feature }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const openConvertorForm = () => {
        console.log(`Open convertor form for ${feature.inputType} to ${feature.outputType}`);
        const inputData = { inputType: feature.inputType, outputType: feature.outputType,  acceptKey: feature.acceptKey };
        dispatch(goToConvertorForm(inputData, history));
    }

    const openCompressorForm = () => {
        console.log(`Open compressor form for ${feature.inputType} to ${feature.outputType}`);
        const inputData = { inputType: feature.inputType, outputType: null, acceptKey: feature.acceptKey };
        dispatch(goToCompressorForm(inputData, history));
    }
    
    return (
        <Card className={classes.card}>
                <Typography className={classes.title} variant="h5" >{feature.title}</Typography>
                <CardContent>
                    <Typography className={classes.details} variant="body1" color="textPrimary" component="p" >{feature.content}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions} >
                    {feature.toLink ? (
                         <Button size="small" variant="contained" color="primary" component={Link} to={feature.toLink} fullWidth>
                            {feature.buttonText}
                         </Button>
                        ) : (
                        <Button size="small" variant="contained" color="primary" fullWidth onClick={feature.outputType ? openConvertorForm : openCompressorForm}>
                           {feature.buttonText}
                         </Button>
                        )
                    }
                </CardActions>
        </Card>
    );
}

export default Feature;