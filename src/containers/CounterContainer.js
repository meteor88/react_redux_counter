import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// store 에 있는 state => props 로 사용
const mapStateToProps = (state) => {
  return {
    number: state.number_data.number,
    color: state.color_data.color
  }
};

// store 에 있는 actions => props 로 사용 
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
      const color = getRandomColor();
      dispatch(actions.setColor(color));
    }
  }
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;