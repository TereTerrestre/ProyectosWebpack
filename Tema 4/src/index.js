import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const rootElement = document.getElementById ('root');
const root= ReactDOMClient.createRoot
(rootElement);
root.render(
    <h1>Hola React con Webpack</h1>
)

