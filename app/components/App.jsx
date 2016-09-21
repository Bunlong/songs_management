import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import CategoryComponent from '../../category/components/CategoryComponent';
import ArtistComponent from '../../artist/components/ArtistComponent';

// ReactDOM.render(<CategoryComponent />, document.querySelector('.root'));

const routeConfig = [
  { path: '/',
    component: CategoryComponent
  },
  {
    path: 'artists',
    component: ArtistComponent
  }
];

ReactDOM.render(<Router history={browserHistory} routes={routeConfig} />, document.querySelector('.root'));
