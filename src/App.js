import React, {useState} from 'react'
import Plants from './components/Plants'
import Layout from './components/Layout'
import Title from './components/Title'
import NavBar from './components/NavBar'

const App = () => {
  const [plants, setPlants] = useState([
  { name: 'Twin Sunflower ', price: 10 +' 💰', img: '/products/twin-sunflower.jpg' },
  { name: 'Bonk Choy ', price: 30 +' 💰', img: '/products/bonk-choy.jpg' },
  { name: 'Bloomerang ', price: 15 +' 💰', img: '/products/bloomerang.jpg' },
])
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false) 
  
  const addToCart = (product) => {
    if (cart.find(x => x.name === product.name)) {
      const newCart = cart.map(x => x.name === product.name ? ({...x, quantity: x.quantity + 1}) : x)
        setCart(newCart);
    } else {
      setCart([ ...cart, {...product, quantity: 1,}])
    }
  }

  const openCart = () => {
    if (!cart.length) {
      return
    }
    setIsCartOpen(!isCartOpen);
  }

  return(
    <div>
      <Layout>  
        <NavBar 
        cart = { cart }
        isCartOpen = { isCartOpen }
        openCart = { openCart }
        />
        <Title/>
        <Plants 
        addToCart = { addToCart }
        plants = { plants }
        />
      </Layout>
    </div>
  ) 
}

export default App