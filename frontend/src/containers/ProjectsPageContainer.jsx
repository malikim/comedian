import React from 'react';
import { connect } from 'react-redux';
import ProjectsPage from '../components/pages/ProjectsPage';

export const ProjectsPageContainer = props => (<ProjectsPage {...props} />);

export const mapStateToProps =(store) => {
    return {};
};

export const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPageContainer);