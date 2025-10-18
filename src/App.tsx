import './App.css';
import {Header} from './components/Header';
import {ThemeProvider} from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
