import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
import IngredientData from './components/ingredients/IngredientsData'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout/>
        <Switch>
          <Route exact path='/'>
            <div className="App">
            </div>
          </Route>
          <Route exact path='/ingredients'>
            <IngredientData/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
