import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import './card.scss';

class CardComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          color: null,
          title: null,
          backContent: null,
          isFlipped: false,
          visible: false
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
            <Card className={this.props.type} onClick={this.handleClick}>
                <CardHeader title={this.props.title} />
            </Card>
            <Card className={this.props.type} onClick={this.handleClick}>
                <CardContent className="back-content">{this.props.backContent}</CardContent>
            </Card>
          </ReactCardFlip>
        );
    }
}

export default CardComp;