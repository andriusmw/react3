//import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './PageWrapper';
import PeliculasJson from './peliculas.json';
import Paginacion from './paginacion';
//Este es el array previo de películas desde donde cargamos el listado
//de pelis con la estructura del objeto película para cada elemento del 
//array y asi podemos pedirle el título, fecha etc de cada objeto(pelicula)

function App() {

	let peliculas = PeliculasJson;
  
  return (

	<PageWrapper>

			{peliculas.map(pelicula =>{
				return	<Pelicula  
			     	       titulo={pelicula.titulo} 
						   calificacion={pelicula.calificacion} 
          	 			   director={pelicula.director} 
						   actores={pelicula.actores} 
           			       fecha={pelicula.fecha} 
					   	   duracion={pelicula.duracion} 
						   img={pelicula.img}
                           descripcion={pelicula.descripcion}>
    
           			    </Pelicula>	
		    })}	

			<Paginacion pagina={1} total={4} onChange={(pagina) => {
				alert(pagina)
			}} ></Paginacion>
			

	</PageWrapper>
  ) 
}
export default App;
