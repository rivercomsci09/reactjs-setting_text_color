import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
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
            ],
            isActive: true
        };
        this.onSetState = this.onSetState.bind(this);
    }

    onSetState = () => {
        // if(this.state.isActive){
        //     this.setState({
        //         isActive : false
        //     })
        // } else {
        //     this.setState({
        //         isActive : true
        //     })
        // }

        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        var elements = this.state.products.map((product, index) => {
            let result = '';
            if (product.status) {
                result = <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                        <span className="label label-info">{product.price}</span>
                    </td>
                </tr>

            }
            return result;

        }
        )

        return (

            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand">STATE 222</a>
                </nav>
                <div className="container">
                    <div className="row">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elements}
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-large btn-block btn-primary" onClick = {this.onSetState}>
                            Active: {this.state.isActive === true ? 'true' : 'false'}
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
