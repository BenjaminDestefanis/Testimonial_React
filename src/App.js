import './App.css';
import Testimonial from './Components/Testimonial';
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'

function App() {
  return (
    <div className="App">
      
      <div className='main-container'>
        <h1>Pagina de Testimonios Creada con React.js</h1>

        <Testimonial 
          name="Benjamin Baigorria"
          charge="Full Stack Web Developer"
          imagen={img1}
        />

        <Testimonial 
          name="Francisco Quiroga"
          charge="Back-End Developer"
          imagen={img2}
        />

        <Testimonial 
          name="Maria Rosa"
          charge="Front-End Developer"
          imagen={img3}
        />
      </div>

      

      
      
     

    </div>
  );
}

export default App;

//Componente Funcional / Componente de Clase
