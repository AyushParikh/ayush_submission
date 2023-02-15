import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.min.css'

import Router from "./router";
import { createRoot } from 'react-dom/client';

const App = () => (
  <BrowserRouter>
      <Router />
  </BrowserRouter>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
