import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Função mount não é necessária aqui pois o container será renderizado
// assim que iniciada a aplicação diferentemente dos outros mfes
// que iremos controlar seu momento de exibição
ReactDOM.render(<App />, document.querySelector('#root'))