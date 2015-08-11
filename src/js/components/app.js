var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('./header/app-header.js');

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

module.exports = App;
