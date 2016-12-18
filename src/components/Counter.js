import React, { PropTypes } from 'react'

const Counter = ({ count, onClick }) => {
    return (
        <div>
            <h2>Click Counter</h2>
            <div>Count: {count}</div>
            <button type="button" onClick={e => {
                onClick();
            }}>
                Click me!
            </button>
        </div>
    )
};

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Counter
