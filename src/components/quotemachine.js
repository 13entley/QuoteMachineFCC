/**
 * Created by 13entley on 13/06/2018.
 */
import React from 'react'
import PropTypes from 'prop-types';

const QuoteMachine = (props) => {
    return (
        <div className="quote-box">
            <div className="text">
                <span>{props.quote.quote}</span>
            </div>
            <div className="author">
                <span >{props.quote.author}</span>
            </div>
        </div>
    );
};

QuoteMachine.propTypes = {
    quote: PropTypes.object.isRequired
};

export default QuoteMachine;