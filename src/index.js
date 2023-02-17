import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme/Theme';
import { GlobalStyles } from 'utility/GlobalStyles';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<ThemeProvider theme={theme}>
		<GlobalStyles/>
    <App />
	 </ThemeProvider>
   </React.StrictMode>
);
