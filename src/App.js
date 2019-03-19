import React, { Component } from 'react';

import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

import logo from './logo.svg';
import './App.css';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}
const mapStateToProps = state => {
  return { articles: state.articles };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }

  async componentDidMount(){

    let baseUrl='https://my-website.com/api_v1/',
    headers= {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'api':'API_KEY'
    }
    let url=`${baseUrl}getCats/0`,
        body=`item_code=1&item_active=2`;
      console.log('url',url,body);//return;
      let response = await fetch(url, {
           mode: 'cors',
          method: 'GET',
          headers: headers
      })
      let responseJson = await response.json()
      console.log('categories ',responseJson)
      await this.setState({
        isLoading:false
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
              SAVE
            </button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
