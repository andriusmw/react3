export default function Paginacion(props) {

    //props.pagina , etc
    //lo que le hemos puesto a la etiqueta Paginacion en app.js se lo pasamos
    //aquí como propiedades del div/objeto Paginacion.

    const getPaginas = () => {
        const resultado = [];
        for (var i =0; i < props.total; i++){
         resultado.push( 
                <a onClick={props.onChange} 
                className={props.pagina === (i + 1) ? "active" :  ""}
                 href="#"> {(i + 1)} </a>)
            }
        return resultado;
    }

    //Esta funcionalidad es para el listado de páginas.

    return  (
    <div className="topbar-filter">
       
        <div className="pagination2">
             <span>Page {props.pagina} of {props.total}:</span>
     
                     
           {getPaginas()}
           
        </div>
    </div>)  
}