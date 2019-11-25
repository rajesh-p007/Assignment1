import React from 'react';
import Cards from './Cards';

export default class CardsList extends React.Component {
  render () {
    var array = this.props.cards.map(data => (
        <Cards key={data.id} name={data.name} username={data.username} email={data.email} street={data.address.street} suite={data.address.suite} city={data.address.city} zipcode={data.address.zipcode} phone={data.phone} website={data.website} companyName={data.company.name} catchphrase={data.company.catchPhrase} bs={data.company.bs} />
          
        
    ));
    return (
      <div>
         {array}
      </div>
    );
  }
}
