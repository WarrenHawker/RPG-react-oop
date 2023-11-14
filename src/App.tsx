import Board from './components/Board';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

const App = () => {
  return (
    <div className="page">
      <Header />
      <Board />
      <Footer />
    </div>
  );
};

export default App;
