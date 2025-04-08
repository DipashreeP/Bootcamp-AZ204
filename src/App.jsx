import { useState } from 'react'
import './App.css'
import CustomerForm from './components/CustomerForm'

function App() {
  const [coffeesServed, setCoffeesServed] = useState(0)
  const quotes = [
    "Coffee : because adulting is hard",
    "But first, coffee",
    "Life happens, coffee helps",
    "Rise and grind",
    "Coffee is a language in itself"
  ]
  const [currentQuote, setCurrentQuote] = useState(quotes[0])

  const serveCoffee = () => {
    setCoffeesServed(coffeesServed + 1)
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  return (
    <div className="cafe-app">
      <header>
        <h1>
          <span className="coffee-emoji">☕</span>
          Le Petit Noir
        </h1>
        <p className="tagline">"Your neighborhood coffee heaven!!"</p>
      </header>

      <main>
        <div className="coffee-counter">
          <h2>Coffees Served Today:</h2>
          <div className="count">{coffeesServed}</div>
          <button onClick={serveCoffee}>Serve Coffee</button>
        </div>

        <div className="quote-section">
          <p className="quote">"{currentQuote}"</p>
        </div>

        <CustomerForm />
      </main>

      <footer>
        <p>Open daily from 7am to 7pm</p>
      </footer>
    </div>
  )
}

export default App
