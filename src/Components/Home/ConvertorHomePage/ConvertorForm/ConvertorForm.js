import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from '../../../../api/index';
import { useHistory } from "react-router";

const ConvertorForm = () => {

    const { register, handleSubmit, watch , formState: {errors}} = useForm();
    const inputData = useSelector((state)=> state.convertors);
    console.log(inputData);
    const history = useHistory();
    useEffect(() => {
        if(!inputData.inputType)
        {
            history.push("/convertorHomePage");
        }
    },[]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("inputFile", data.inputFile[0]);
        //formData.append("path",data.inputFile[0].webkitRelativePath);
        formData.append("inputType", inputData.inputType);
        formData.append("outputType", inputData.outputType);
        console.log(data.inputFile[0].webkitRelativePath);

        // const res = await axios.post("convertDocxToPdf", formData);

        await axios.post("convertDocument"
        , formData,
        {responseType: 'blob'}
    ).then(function (response) {
            console.log(response);
            let fileName = response.headers["content-disposition"].split("filename=")[1];
            if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE variant
                window.navigator.msSaveOrOpenBlob(new Blob([response.data], {type: 'application/pdf'}),
                    fileName);
            } else {
                const url = window.URL.createObjectURL(new Blob([response.data], {type: 'application/pdf'}));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', response.headers["content-disposition"].split("filename=")[1]);
                document.body.appendChild(link);
                link.click();
            }
        }
    );
        
    };
    
    const classes = useStyles();
    return (
        <Paper className={classes.paper} xs={12} sm={12} >
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit(onSubmit)}>
                <Typography className={classes.title} variant="h5" >Convert {inputData.inputType} document to {inputData.outputType}</Typography>
                <Typography className={classes.details}variant="h6">Please select a file from your system</Typography>
                <div className={classes.fileInput}>
                    <input
                        type="file"
                        name="inputFile"
                        {...register("inputFile",{required: true})}
                        placeholder="Select file from your system that you want to convert"
                        accept={inputData.acceptKey}
                        
                    />
                    {errors.inputFile && (<p className={classes.fileInput}>Please select a file</p>)}
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default ConvertorForm
