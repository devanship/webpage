import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ReactCardFlip from 'react-card-flip';
import './Card.scss';

class CardComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          type: null,
          title: null,
          backContent: null,
          isFlipped: false,
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
              <CardContent>
                  <Typography className="card__title">{this.props.title}</Typography>
              </CardContent>
            </Card>
            <Card className={this.props.type}>
              <CardContent className="back-content">
                <CloseIcon onClick={this.handleClick}></CloseIcon>
                {this.props.backContent}
              </CardContent>
            </Card>
          </ReactCardFlip>
        );
    }
}

export default CardComp;