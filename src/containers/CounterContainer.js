import { connect } from 'react-redux'
import { increment } from '../actions'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(increment())
        }
    }
};

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer
