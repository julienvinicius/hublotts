import {Container,Navbar} from 'react-bootstrap'
import {sampleProducts} from './data'

function App() {
  return (
     <div className="d-flex flex-column vh-100">
      <header>
        <Navbar className='navbar-custom' bg="dark" variant='dark' expand="lg">
          <Container>
            <Navbar.Brand className='navbar-brand'>Hublot</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main>
        <ul>
        {sampleProducts.map((product) => (
          <li key={product.slug}>
            <img src={product.image} alt={product.name} className="product-image"></img>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
          </li>
        ))}
        </ul>
        </main>
      <footer>direitos reservados</footer>
   </div>
  )
}

export default App
