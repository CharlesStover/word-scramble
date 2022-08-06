import type { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../features/home';

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index />
      </Routes>
    </BrowserRouter>
  );
}
