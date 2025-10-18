import './App.css';
import {CardsContainer} from './components/CardsContainer';
import {Header} from './components/Header';
import {ThemeProvider} from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col">
        <Header />
        <CardsContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
