import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
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
                <Typography className="card__title">{this.props.title}</Typography>
            </Card>
            <Card className={this.props.type} onClick={this.handleClick}>
                {this.props.backContent}
            </Card>
          </ReactCardFlip>
        );
    }
}

export default CardComp;