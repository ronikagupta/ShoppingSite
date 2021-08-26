
import React, { useEffect, useState } from "react";
import Home from "./Home"
import Collection from "./Collection"
import Login from "./Login";
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

import { Button, Radio } from 'antd';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};








// const [sidebar, setSidebar] = useState(true);
const user = localStorage.token;
console.log(user, "...$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")



function App() {
  return (
    <div>

      <Router>



        <Menu mode="horizontal" theme='dark' >
          <Menu.Item className="fs-2" style={{ color: "white" }}>
            BIG Shopping
          </Menu.Item>
          <Menu.Item key="mail" style={{ marginLeft: "40%" }} className="fs-5">
            <NavLink className="Nav_link"
              activeClassName="activeRoute"
              activeStyle={{ color: 'white' }} to="/Home" >  Home</NavLink>
          </Menu.Item>

          <SubMenu title={<span>Collection</span>} className="fs-5">
            <MenuItemGroup title="">
              <Menu.Item key="setting:1"><a href="/Collection">Fashion</a></Menu.Item>
              <Menu.Item key="setting:2">Grocery</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="">
              <Menu.Item key="setting:3">Mobiles</Menu.Item>
              <Menu.Item key="setting:4">Appliances</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay" className="fs-5">
            <a href="">Contact Us</a>
          </Menu.Item>
          <Menu.Item key="alipay" className="fs-5">
            <a href=""><ShoppingCartOutlinedIcon />Cart</a>
          </Menu.Item>
          <Menu.Item key="mail" style={{ marginLeft: '' }} className="fs-5">
            <Radio.Button value="default" style={{ backgroundColor: "white" }}>Login</Radio.Button>
          </Menu.Item>
        </Menu >


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Collection" exact component={Collection} />
        </Switch>




      </Router>
      {/* )} */}
    </div>
  );
}

export default App;

