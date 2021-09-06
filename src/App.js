import React, { useState } from 'react';
import { Home, Pins, Lists, Map, Share, Profile } from './pages';
import { Header, Modal } from './layout';
import './styles/app.css';
import { Switch, Route } from 'react-router-dom';

function App() {

    const [ModalClose, setModalClose] = useState(false);

    const handleModalClose = () => {
        setModalClose(!ModalClose)
    }

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }


    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" ><Home /> </Route>
                <Route path="/pins" ><Pins /></Route>
                <Route path="/lists" ><Lists /></Route>
                <Route path="/map" ><Map /></Route>
                <Route path="/share" ><Share /></Route>
                <Route path="/profile" ><Profile /></Route>
            </Switch>
            {/* <Modal isItOpen={ModalClose} updateOpen={handleModalClose} /> */}

        </>
    )
}

export default App;
