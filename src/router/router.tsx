import * as React from "react";
import { Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HeaderNav from "../common-components/HeaderNav";
import Heroes from "../pages/hero/Heroes";
import Villains from "../pages/villain/Villains";
import EditHero from "../pages/hero/EditHero";
import EditVillain from "../pages/villain/EditVillain";

const Router = () => {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Route path="/heroes" component={Heroes} />
      <Route path="/villains" component={Villains} />
      <Route path="/edit-hero/:id" component={EditHero} />
      <Route path="/edit-villain/:id" component={EditVillain} />
      <Redirect from="/" to="/heroes" />
    </BrowserRouter>
  );
};

export default Router;
