import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from './Searchbar/SearchBar';

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

export default App;

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

 module.exports=BusinessList;

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

module.exports=SearchBar;

render() {
  <div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList />
</div>
}
