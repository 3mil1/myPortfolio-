import React from "react";
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import {Header} from "./components/header/header";
import {Main} from "./components/main/main";



function App() {
    return (
        <div className={"MainContainer"}>
            <CssBaseline />
            <Container maxWidth='xl'>
                <main>
                    <Box ml={12} mr={12} tyle={{ backgroundColor: '#F9FAFF'}}>
                        <Header/>
                        <Main/>
                        {/*<Footer/>*/}
                    </Box>
                </main>
            </Container>
        </div>
    );
}

export default App;
