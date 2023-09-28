
import Card from './components/Card'
import './App.css'

function App() {

  
  let chickenDesc = 'Try out our new series of fleshy, spicy Chicken Dishes made by our highlt qualified chefs';

  let PizzaDesc = 'Visit our brand new series of Piiza collection specially baked for you with love and care';

  const pizzaImg = 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60'

  const chickenImg = 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGRpc2hlc3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'

  return (
    <>
      <div className='mainDiv'>
          <Card title = "Pizza" imgSource = {pizzaImg} description = {chickenDesc}/>
          <Card title = "Chicken" imgSource = {chickenImg} description = {PizzaDesc}/>
      </div>
    </>
  )
}

export default App
