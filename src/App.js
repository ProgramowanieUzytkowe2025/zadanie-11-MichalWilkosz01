import logo from './logo.svg';
import './App.css';
import { AppList } from './AppList';
import { AppTitle } from './AppTitle';

function App() {
  return (
    <div>
      <AppTitle>
        <strong>Aplikacja ToDo</strong>
      </AppTitle>
      <AppList />
    </div>
  );
}

export default App;
