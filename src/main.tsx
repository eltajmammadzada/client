import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider theme={{
"components": {
    "Select": {
      "selectorBg": "rgba(255, 255, 255, 0)",
      "colorText": "rgb(255, 254, 254)",
      "colorTextPlaceholder": "rgba(255, 255, 255, 0.25)",
      "colorTextQuaternary": "rgba(255, 255, 255, 0.85)",
      "colorBgElevated": "rgb(218, 218, 218)",
      "colorBorder": "rgba(255, 255, 255, 0)"
    }
  }
    }}>
    <App />
    </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
