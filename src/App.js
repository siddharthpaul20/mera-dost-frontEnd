import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Home from "./Components/Home/Home";
import ConvertorHomePage from "./Components/Home/ConvertorHomePage/ConvertorHomePage";
import ConvertorForm from "./Components/Home/ConvertorHomePage/ConvertorForm/ConvertorForm";
import CompressorHomePage from "./Components/Home/CompressorHomePage/CompressorHomePage";
import CompressorForm from "./Components/Home/CompressorHomePage/CompressorForm/CompressorForm";

const App = () => {
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/aboutUs" exact component={AboutUs} />
                    <Route path="/convertorHomePage" exact component={ConvertorHomePage} />
                    <Route path="/compressorHomePage" exact component={CompressorHomePage} />
                    <Route path="/convertorFormPage" exact component={ConvertorForm} />
                    <Route path="/compressorFormPage" exact component={CompressorForm} />
                </Switch>
            </Container>
       </BrowserRouter>
    )
}

export default App
