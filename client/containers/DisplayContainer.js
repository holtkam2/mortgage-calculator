import { connect } from 'react-redux';
import DisplayComponent from '../components/DisplayComponent';
import {} from '../actions/index';

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
	currentNumber: state.numbers.currentNumber,
	previousNumber: state.numbers.previousNumber,
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);