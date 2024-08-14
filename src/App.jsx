import Home from '../src/components/Home'
import Hero from '../src/components/Hero/Hero'
import About from '../src/components/About/about'
import Education from '../src/components/education/education'
import Contacst from "./components/contact/Contact.jsx"

function App() {
    return (
        <div className='home_conteny_box'>

        <div className='components_container'>
            <Home />
            <Hero />
            <About />
            <Education />
            <Contacst />
        </div>
        </div>
    )
}
export default App  