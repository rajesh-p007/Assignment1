import React from 'react';
import CardsList from './CardsList';
import Api from '../data/Api';

export default class MainPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: [],
        
      };
    }

    componentDidMount() {
      Api.getAllCards(data => this.setState({ cards: data}));
      
    }
    render() {

      return (
        <div>
                <CardsList cards={this.state.cards} />
        </div>
      );
    }
}
