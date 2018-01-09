import React from 'react';
import { connect } from 'react-redux';
import UsersPage from '../components/pages/UsersPage';

export const UsersPageContainer = props => (<UsersPage {...props} />);

export const mapStateToProps =(store) => {
    return {};
};

export const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);