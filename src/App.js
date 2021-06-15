import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
import IngredientData from './components/ingredients/IngredientsData'
import Test from './components/Test'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/'>
                <IngredientData/>
            </Route>
            <Route exact path='/test'>
                <Test/>
            </Route>
        </Switch>
    </Router>
);
}

export default App;
