import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    axios
    .get('https://599d6a620a785b0011f4f6c8.mockapi.io/users')
    .then(
      (response) => 
      this.setState({
        data : response.data
      })
    )
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <h1> Fetching Data using Axios </h1> 
        <p>
          {this.state.data.map (
            (item) => 
            <div key={item.name}>{item.name}</div>
          )}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
