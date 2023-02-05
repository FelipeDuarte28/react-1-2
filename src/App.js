import { useState } from 'react'
import Login from './components/Login';
import Alert from './components/Alert';

function App() {
  const [alertApp, setAlertApp] = useState({mensaje: '', color: ''})

  return (
    <div>
      <h1>Desafio 2</h1>
      <Login setAlertApp={setAlertApp} />
      <Alert alertApp={alertApp}/>
    </div>
  );
}

export default App;