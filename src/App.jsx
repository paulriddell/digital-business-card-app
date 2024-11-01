import './App.css'
import Info from './components/Info'
import Interests from './components/Interests'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="container">
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
    </>
  )
}

export default App
