/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Master from './components/Master';
import CreateProduct from './components/CreateProduct';
import DisplayProduct from './components/DisplayProdcut';
import UpdateProduct from './components/UpdateProduct';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Master} >
            <Route path="/add-item" component={CreateProduct} />
            <Route path="/display-item" component={DisplayProduct} />
            <Route path="/edit/:id" component={UpdateProduct} />
        </Route>
    </Router>,
    document.getElementById('crud-app')
);