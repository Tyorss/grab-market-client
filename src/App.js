import './App.css';
import MainPageComponent from "./main"
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import Uploadpage from './upload';
import ProductPage from './product';
import {Button} from "antd"
import{DownloadOutlined} from '@ant-design/icons'

function App() {
  const history = useHistory();
  return (
  <div>
      <div id="header">
        <div id="header-area">
          <Link to={""}>
            <img src="images/icons/logo.png" alt="" />
          </Link>
          <Button size="large"
          onClick={function(){
            history.push('/upload')
          }}
          icon={<DownloadOutlined></DownloadOutlined>}
          >
            상품 업로드
          </Button>
        </div>
      </div>
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
    <div id="footer"></div>
   </div>
  );
}

export default App;
