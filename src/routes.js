import React from 'react';
import { renderRoutes } from 'react-router-config';
import Home from './containers/Home';
import Detail from './containers/Detail';

const routes = [Home, Detail];

export default function initRenderRoutes() {
  return <>{renderRoutes(routes)}</>;
}
