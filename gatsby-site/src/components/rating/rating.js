import React, { Component } from 'react';
import { Box, Typography} from "@material-ui/core/"
import Rating from '@material-ui/lab/Rating'
import './rating.scss';

class RatingComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tech: "",
            value: ""
        };
    }

    render() {
        return (
            <Box className="rating-comp" component="span">
                <Typography className="rating-comp__legend" component="legend">{this.props.tech}</Typography>
                <Rating className="rating-comp__rating" name="read-only" value={this.props.value} readOnly size="large" />
            </Box>
        );
    }
}

export default RatingComp;
