import React, {Component} from 'react';

class Product extends Component {

    constructor(props){
      super(props);
      // this.onAddToCart = this.onAddToCart.bind(this);
    }
    onAddToCart(){
        alert('By successful! ' + this.props.name);
    }
    onAddToCart2 = () => {
      alert('By successful! ' + this.props.name);
    }

    render(){
        return(
         <div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="thumbnail">
                <img src={this.props.image} alt={this.props.name} />
                <div className="caption">
                  <h3>{this.props.name}</h3>
                  <p>
                    {this.props.price}
                  </p>
                  <p>
                    <a className="btn btn-primary" onClick={this.onAddToCart2}>By Now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Product;
