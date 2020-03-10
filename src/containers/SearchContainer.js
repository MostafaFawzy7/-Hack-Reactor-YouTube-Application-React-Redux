import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const mapStateToProps = state => {
  return {
    value: state.searchValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: (term) => {
      dispatch(handleSearchChange(term));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);
