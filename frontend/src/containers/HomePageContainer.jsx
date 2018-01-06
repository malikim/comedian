import React from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/pages/HomePage';

export const HomePageContainer = props => (<HomePage {...props} />);

export const mapStateToProps =(store) => {
    return {};
};

export const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);