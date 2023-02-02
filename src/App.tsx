import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './App.css';
import { ProductList } from './components/Products/ProductList';
import { Cart } from './components/Cart/Cart';
import { UserContextProvider } from './contexts/userContext';
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <ProductList />
        <div className='Cart'>
          <Cart />
        </div>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
