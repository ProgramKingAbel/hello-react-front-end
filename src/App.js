import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <Routes>

  <Route path="/" element={<Greeting />}>

  </Route>

</Routes>
);

export default App;
