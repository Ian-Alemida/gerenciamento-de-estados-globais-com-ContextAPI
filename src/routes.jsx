import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserConntext } from 'Common/Context/Usuario'

function Router() {
  const [nome, setNome] = useState('');
  const [saldo, setSaldo] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UserConntext.Provider value={{nome, setNome, saldo, setSaldo}}>
            <Login/>
          </UserConntext.Provider>
        </Route>
        <Route path="/feira">
          <Feira />
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;