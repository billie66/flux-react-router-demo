var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/app')
var Catalog = require('./components/catalog/app-catalog');
var Cart = require('./components/cart/app-cart');
var CatalogDetail = require('./components/product/app-catalogdetail');

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Catalog} />
    <Route name="cart" path="/cart" handler={Cart}/>
    <Route name="item" path="/item/:itemId" handler={CatalogDetail}/>
  </Route>
);
