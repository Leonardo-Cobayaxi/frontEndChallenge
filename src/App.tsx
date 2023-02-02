import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './App.css';
import { ProductList } from './components/Products/ProductList';
import { Cart } from './components/Cart/Cart';
import { UserContextProvider } from './contexts/userContext';
import { createGlobalStyle } from 'styled-components'
const GLobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,h2,h3,h4,span,p,button {
  font-family: Montserrat
}
button:hover{
  cursor:pointer
}
h1,h2,h3,h4,span,p:hover{
  cursor:default
}
`
function App() {
  return (


    <div className="App">
      <UserContextProvider>
        <GLobalStyle />
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
