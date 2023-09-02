import './App.css';
import MainPageComponent from "./main"
import { Switch, Route } from 'react-router-dom';
import Uploadpage from './upload';
import ProductPage from './product';

function App() {
  return (
  <div>
    <Switch>
      <Route exact={true} path={"/"}>
        <MainPageComponent></MainPageComponent>
      </Route>
      <Route exact={true} path={"/product"}>
        <ProductPage></ProductPage>
      </Route>
      <Route exact={true} path={"/upload"}>
        <Uploadpage></Uploadpage>
      </Route>
    </Switch>
   </div>
  );
}

export default App;
