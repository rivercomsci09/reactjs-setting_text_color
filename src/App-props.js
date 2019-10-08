import React, {Component} from 'react';
import './App.css';
import Product from './Product'


class App extends Component {
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
              <a className="navbar-brand">Props</a>
            </nav>
            <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Product name='Iphone 6 Plus' price='150000' image='https://cdn.didongthongminh.vn/upload_images/2017/10/iphoneX-silver-300x400.png'></Product>
                    <Product name='Iphone 7 Plus' price='120000' image='https://cdn.didongthongminh.vn/upload_images/2017/10/iphoneX-silver-300x400.png'></Product>
                    <Product name='Iphone 8 Plus' price='160000' image='https://cdn.didongthongminh.vn/upload_images/2017/10/iphoneX-silver-300x400.png'></Product>
                    <Product name='Iphone XXXX Plus' price='180000' image='https://cdn.didongthongminh.vn/upload_images/2017/10/iphoneX-silver-300x400.png'></Product> 
                  </div>
                </div>
            </div>
         
            <nav className="navbar navbar-inverse">
              <a className="navbar-brand">Props 222</a>
            </nav>
            <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {elements}
                  </div>
                </div>
            </div>
          </div>
        );
    }
}

export default App;
