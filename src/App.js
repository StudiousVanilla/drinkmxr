import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
import IngredientData from './components/ingredients/IngredientsData'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/'>
                <IngredientData/>
            </Route>
        </Switch>
    </Router>
);
}

export default App;
