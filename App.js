import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '.components/BusinessList/BusinessList';
import SearchBar from '.components/Searchbar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class BusinessList extends React.Component {
   render() { return
  <div className="BusinessList">
    <Business />
    <Business />
    <Business />
    <Business />
    <Business />
    <Business />>
  </div>
   }
 }

 class SearchBar extends React.Component {
   renderSortByOptions() {
     return
     Object.keys(sortByOptions).map(sortByOptions => {
       let sortByOptionValue =
       sortByOptions[sortByOption];
       return <li key={sortByOptionValue}> {sortByOption} </li>;
     });
   }
   render() {
     return <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      <{renderSortByOptions}/>
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Lets Go</a>
    </div>
</div>
   }
 };

render() {
  <div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList />
</div>
}

module.exports=BusinessList;
module.exports=SearchBar;
export default class App extends Component {

}
