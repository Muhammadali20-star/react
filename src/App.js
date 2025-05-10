import './App.css';
import Header from '../src/components/header/Header';
import Hero from '../src/components/hero/Hero';
import Posts from '../src/components/posts/Posts'
import Cards from '../src/components/cards/Cards'
import Footer from './components/footer/Footer';
function App() {
  return  (
    <div className="App">
      <Header />
      <Hero />
      <Posts />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;
