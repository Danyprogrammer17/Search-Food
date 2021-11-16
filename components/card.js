import React, {Component} from 'react';

class Card extends Component {
  render(){
      return(
      <div className='col'>
        <div className="card" style={{width: '12rem' , textAlign: 'center'}}>
        <button onClick={()=>this.props.onSearch(this.props.card)} className="btn btn-success">
        Trova <span className="badge bg-light text-dark">{this.props.card.quantità}</span></button>
          <img src={this.props.card.image} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{this.props.card.food}</h5>
                <p className="card-text"></p>
                  <div className='col'>
                  <p></p>
                  </div>
            </div>
          </div>
      </div>
      );
  }
}

export default Card;
