import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import CategoryComponent from '../../category/components/CategoryComponent';
import ArtistComponent from '../../artist/components/ArtistComponent';
import Home from './Home';

const routeConfig = [
  { path: '/',
    component: Home,
    childRoutes: [
      { path: 'categories', component: CategoryComponent },
      { path: 'artists', component: ArtistComponent },
    ]
  }
];

ReactDOM.render(<Router history={browserHistory} routes={routeConfig} />, document.querySelector('.root'));
