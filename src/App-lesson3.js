import React from 'react';
import './App.css';


function App() {
  var a = 5;
  let name = 'Tran Truong Giang';
  var product  = {
    id: 1,
    name: 'Iphone 8 Plus',
    price: 15000000,
    status: true
  }

  var users = [
    {
      id: 1,
      name: 'A',
      age: 55
    },
    {
      id: 2,
      name: 'B',
      age: 5
    },
    {
      id: 3,
      name: 'C',
      age: 56
    }
  ]
  var elements = users.map((user,index) => {
    return  <div key={index}>
              <h5>ID: {user.id}</h5>
              <h5>Name: {user.name}</h5>
              <h5>Age: {user.age}</h5>
            </div>
  })

  return (
    <div>
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand">Title</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Home</a>
          </li>
          <li>
            <a>Link</a>
          </li>
        </ul>
      </nav>
      <div  className='ml-30'>
        {a}
        {name}
        <h3>
          ID: {product.id}<br></br>
          Name: {product.name}<br></br>
          Price: {product.price}<br></br>
          Status: {product.status ? 'Active' : 'Pending'}
        </h3>
        <br />
        {elements}
      </div>
    </div>
    
  );
}

export default App;
