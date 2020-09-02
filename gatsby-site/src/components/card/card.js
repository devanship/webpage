import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, CardHeader, CardContent, CardMedia, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './card.scss';

class CardComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      image: this.props.image,
      backContent: this.props.backContent,
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <Card onClick={this.handleClick}>
          <CardHeader title={this.state.title} />
          <CardMedia component="img" image={this.state.image} />
        </Card>
        <Card>
          <CardHeader 
            title={this.state.title} 
            action={
            <IconButton aria-label="cancel">
              <CloseIcon onClick={this.handleClick}/>
            </IconButton>
          }/>
          <CardContent>{this.state.backContent}</CardContent>
        </Card>
      </ReactCardFlip>
    );
  }
}

export default CardComp;
