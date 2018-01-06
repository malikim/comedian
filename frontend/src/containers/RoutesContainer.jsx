import React from "react";
import { connect } from "react-redux";
import Routes from "../routes";
import {withRouter} from "react-router-dom";

export const RoutesContainer = props => (<Routes {...props} />);

export const mapStateToProps = () => {
    return {};
};

export const mapDispatchToProps = () => {
    return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoutesContainer));
