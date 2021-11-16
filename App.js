import React, {Component} from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import pizza from './images/pizza.png';
import carne from './images/carne.png';
import sushi from './images/sushi.png';
import {Form,FormControl,Button,InputGroup} from 'react-bootstrap';
import {ReactBingmaps} from 'react-bingmaps';



class App extends Component {

  constructor(props) {
    super(props);
    this.city = {val: ""};

    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    cards : [
      {id:0, food: "Pizzerie", image: pizza, quantità: 0},
      {id:1, food: "Ristoranti", image: carne, quantità: 0},
      {id:2, food: "Sushi", image: sushi, quantità: 0},
    ]
  }

  handleDelete = cardId =>{
    const updatedCards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards: updatedCards});
  }

  handleChange(event){
    this.setState({val: event.target.value});
  }

  render(){
      return (
        <>
        <Navbar />
        <div id='searchBar'></div>
          <div className='container'>
            <h1>What are you looking for in {this.city.val}?</h1>
            <ReactBingmaps
              bingmapKey="API KEY"
              center={[13.00,45.00]}
              width="100px"
            >
            </ReactBingmaps>
            <div class="input-group mb-3">
              <input 
              type="text" 
              className="form-control" 
              placeholder="City" 
              aria-label="Recipient's username" 
              aria-describedby="button-addon2"
              onChange={this.handleChange}
              />
              <button 
              class="btn btn-outline-secondary" 
              type="button" 
              id="button-addon2"
              onClick={this.handleQuery}
              >
              Search
              </button>
            </div>
            <hr />
              <div className='row'>
                {this.state.cards.map(card =>(
                  <Card
                  key={card.id}
                  onDelete={this.handleDelete}
                  onDecrement={this.handleDecrement}
                  card={card}/>
                ))}
              </div>
          </div>


        </>
      );
  }
}

export default App;
