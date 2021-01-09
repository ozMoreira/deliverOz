import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "./Orders";
import Navbar from "./Navbar";
import Home from "./Home";


function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
                <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;