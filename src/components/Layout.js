import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
import IngredientData from './ingredients/IngredientsData'



const Layout = () => {

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <div className="App"></div>
                </Route>
                <Route exact path='/ingredients'>
                    <IngredientData/>
                </Route>
            </Switch>
        </Router>
    );
}
 
export default Layout;