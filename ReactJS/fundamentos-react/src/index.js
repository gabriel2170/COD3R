
import App from './App'
import ReactDOM from 'react-dom'
import './index.css'

const tag = <h1>Hello</h1>

ReactDOM.render(

  /*utilizando <></> nao é possivel para colocar atributos dentro
    Voce teria que utilizar o ReactFragment para poder englobar as outras tags e 
    colocar atributos 
  */
  
  <App/>
  ,
  document.getElementById('root')




)