import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '.components/BusinessList/BusinessList';
import SearchBar from '.components/SearchBar/SearchBar';

const business = [
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
 name: 'MarginOtto Pizzeria',
 address: '1010 Paddington Way',
 city: 'Flavortown',
 state: 'NY',
 zipCode: '10101',
 category: 'Italian',
 rating: 4.5,
 reviewCount: 90
];

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
];
/*
Under the business object, create a businesses array.
The array should hold six instances of the business object.
*/

<Greeting myInfo={["top", "secret", "lol"]} />
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
   render() {
     return (
  <div className="BusinessList">
  <Business />
       <Business />
       <Business />
       <Business />
       <Business />
       <Business />
     </div>
  );
}
}


 class SearchBar extends React.Component {
   renderSortByOptions() {
     return
     Object.keys(sortByOptions).map(sortByOptions => {
       let sortByOptionValue =
       sortByOptions[sortByOption];
       return
       <li
          key={sortByOptionValue}>{sortByOption}
       </li>;
     });
   }
   render() {
     return (
       <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let's Go</a>
    </div>
</div>
);
}
};

/* check if .map() method is being called properly
*/

render() {
  <div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList />
</div>
}

export class BusinessList extends React.Component;
export class SearchBar extends React.Component;
export default class App extends Component {

}
