import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Piano from '../pages/Piano'
import Principal from '../pages/Principal'
import Cantantes from '../pages/Cantantes'

function App(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Principal}></Route>
            <Route exact path="/piano" component={Piano}></Route>
            <Route exact path="/cantantes" component={Cantantes}></Route>
        </BrowserRouter>
    )
}

export default App