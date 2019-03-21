import React, { Component } from 'react';

import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle,forbiddenWord } from "./js/actions/index";

import logo from './logo.svg';
import './App.css';

class AppComponent extends Component {
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
    // this.props.forbiddenWord({ message:"" });
    this.setState({ title: "" });
  }

  async componentDidMount(){
      await this.setState({
        isLoading:false
      })
  }

  render() {
    // console.log(this.props.articles)
    // console.log(this.props.message)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.props.message?(
            <p>
              Edit <code>{this.props.message}</code>.
            </p>
          ):null}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React {this.props.articles.length}
          </a>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={this.state.title}
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



function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))//,
    //forbiddenWord: message => dispatch(forbiddenWord({message:message})),
  };
}
const mapStateToProps = state => {
  return { 
    articles: state.articles,
    message:state.message
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
export default App;
