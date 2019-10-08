import React, {Component} from 'react';
import './App.css';
import Product from './Product'

class App extends Component {

    constructor(props){
      super(props);
      this.onAddProduct = this.onAddProduct.bind(this);
    }
    onAddProduct(){
      alert(this.refs.name.value);
    }
    onClick(){
      alert('asasd');
  }
    render(){
        var products = [
            {
              id: 1,
              name: 'Iphone 6 Plus',
              price: 16500000,
              status: true,
              image: 'https://cdn.didongthongminh.vn/upload_images/2017/10/iphoneX-silver-300x400.png'
            },
            {
              id: 2,
              name: 'Iphone 7 Plus',
              price: 16500000,
              status: true,
              image: 'https://cdn.didongthongminh.vn/upload_images/2017/10/iphoneX-silver-300x400.png'
            },
            {
              id: 3,
              name: 'Iphone 8 Plus',
              price: 16500000,
              status: true,
              image: 'https://cdn.didongthongminh.vn/upload_images/2017/10/iphoneX-silver-300x400.png'
            },
            {
              id: 1,
              name: 'Iphone 26 Plus',
              price: 16500000,
              status: false,
              image: 'https://cdn.didongthongminh.vn/upload_images/2017/10/iphoneX-silver-300x400.png'
            }
          ]

          var elements = products.map((product,index) => {
                if(product.status){
                return <Product name={product.name} image={product.image} status={product.status} key={index}/>
                }
                
            }
          )
        return(
          
         
          
            <div>
                 <nav className="navbar navbar-inverse">
                <a className="navbar-brand">Props 222</a>
                </nav>
                <div className="container">
                    <div className="row">
                       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                              <h3 className="panel-title">Thêm sản phẩm</h3>
                            </div>
                            <div className="panel-body">
                              <div className="form-group">
                                <label>Tên sảm phẩm</label>
                                <input type="text" className="form-control" id="" placeholder="Input field" ref='name'/>
                              </div>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Lưu</button>
                        </div>
                          
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {elements}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className="btn btn-success" onClick={this.onClick}>Click Me</button>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className="btn btn-success" onClick={this.onClick}>Click Me</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
