import React from 'react';
import {Provider} from "react-redux";
import PropTypes from "prop-types";
import {BrowserRouter} from 'react-router-dom';
import RoutesContainer from './containers/RoutesContainer';

class Root extends React.Component {
    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <RoutesContainer/>
                </BrowserRouter>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.any.isRequired,
};

export default Root;
