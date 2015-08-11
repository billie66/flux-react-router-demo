var React = require('react');
var AppStore = require('../../stores/app-store.js');
var AddToCart = require('../catalog/app-addtocart.js')
var StoreWatchMixin = require('../../mixins/StoreWatchMixin');
var Link = require('react-router').Link;

function getCatalogItem(component){
  var thisItem;
  AppStore.getCatalog().forEach(function(item){
    /* react router access url params {this.props.params.paramName}
    * https://github.com/rackt/react-router/blob/0.13.x/docs/guides/overview.md#dynamic-segments
    */
    if(item.id.toString() === component.props.params.itemId){
      thisItem = item;
    }
  });
  return {item: thisItem};
}

var CatalogDetail = React.createClass({
  mixins:[StoreWatchMixin(getCatalogItem)],
  render:function(){
    return (
        <div>
          <h2>{this.state.item.title}</h2>
          <img src={this.state.item.img} alt="" />
          <p>{this.state.item.description}</p>
          <p>${this.state.item.cost} <span className="text-success">{this.state.item.inCart && '(' + this.state.item.qty + ' in cart)'}</span></p>
          <div className="btn-group btn-group-sm">
          <AddToCart item={this.state.item} />
          <Link to="/" className="btn btn-default">Continue Shopping</Link>
          </div>
        </div>
    );
  }
});

module.exports = CatalogDetail;
