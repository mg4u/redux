import React, { Component } from 'react';

import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle,forbiddenWord,getArticles,login,doLogin } from "./js/actions/index";
import { LoginAccount } from "./js/constants/action-types";

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:LoginAccount.email,
      password:LoginAccount.password
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { email,password } = this.state;
    const id = uuidv1();
    console.log('email,password',email,password)
    // await this.props.addArticle({  id });
    await this.props.login({ email,password });
    if(!this.props.message){
      await this.props.doLogin({ email,password });
    }
    // console.log(this.props.articles.length)
    // this.props.forbiddenWord({ message:"" });
    // await this.setState({ title: "" });
  }

  async componentDidMount(){
      console.log('componentDidMount')
      // await this.props.getArticles();
      // console.log(this.props.articles.length)
      await this.setState({
        isLoading:false
      })
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate prevProps',prevProps)
    if(this.props.logged){
      console.log('You have logged in')    
    }
  }
  
  render() {
    // console.log(this.props.articles)
    // console.log(this.props.message)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-link">
            Enter your login info
          </p>
          {this.props.message?(
            <p className="alert alert-danger">
               <code>{this.props.message}</code>.
            </p>
          ):null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group row ">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                value={this.state.password}
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
    addArticle: article => dispatch(addArticle(article)),
    login: ({email,password}) => dispatch(login({email,password})),
    doLogin: ({email,password}) => dispatch(doLogin({email,password})),
    getArticles: () => dispatch(getArticles())//,
    //forbiddenWord: message => dispatch(forbiddenWord({message:message})),
  };
}
const mapStateToProps = state => {
  return { 
    articles: state.articles,
    login_data: state.login_data,
    message:state.message
  };
};
const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
export default App;
