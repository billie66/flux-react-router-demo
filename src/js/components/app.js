var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var Header = require('./header/app-header.js');
var Catalog = require('./catalog/app-catalog');
var Cart = require('./cart/app-cart');
var CatalogDetail = require('./product/app-catalogdetail');

var App = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Header />

        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Catalog} />
    <Route name="cart" path="/cart" handler={Cart}/>
    <Route name="item" path="/item/:itemId" handler={CatalogDetail}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
