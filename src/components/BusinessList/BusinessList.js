import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
componentDidMount(){
console.log(this.props);
}
render() {
return (
<div className="BusinessList">
  <ul>{this.props.business.map(place => {
  return <li>{place.address}</li>
  <li>{place.city}</li>
  <li>{place.state}</li>
  <li>{place.zipCode}</li>
  })}
  </ul>
</div>
);
        <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
      </div>
      <div className="Business-reviews">
        <h3>{this.props.business.category}</h3>
        <h3 className="rating">
        {this.props.business.rating}</h3>
      <p>{this.props.business.reviewCount}</p>
      </div>
     </div>
  );
}
}

export default BusinessList;
