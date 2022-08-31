import Botao2  from './components/botao';
import Header from './components/header';

function App() {

  const botoes = [ "home", "Quem somos", "contatos"]

  return (
    <Header >
      {botoes.map( (name, i) => 
        <Botao2 key={i} name={name}/>
      )}
    </Header> 
  );
}

export default App;
