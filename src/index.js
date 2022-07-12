import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const title = 'TS practice';

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<App title={title} />);

module.hot.accept();
