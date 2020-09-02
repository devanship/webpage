import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import './text.scss';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subTitle: "",
            title: "",
            date: ""
        };
    }

    render() {
        return (
            <Typography variant="h6" className="text-comp">
                <div className="text-comp__title">{this.props.title}</div> 
                <div className="text-comp__sub-title">{this.props.subTitle}</div>
                <div className="text-comp__date">{this.props.date}</div>
                <br />
            </Typography>
        );
    }
}

export default Text;