export default function Pelicula(props) {
    return(

        <div className="movie-item-style-2">
        <img src={props.img} alt=""/>
        <div className="mv-item-infor">
            <h6>
                <a href="moviesingle.html">
                    {props.titulo}
                </a>
            </h6>
            <p className="rate">
                <i className="ion-android-star"></i>
                <span> {props.calificacion} </span> /10
            </p>
            <p className="describe"> {props.children} </p>
            <p className="run-time"><b>Duracion:</b> {props.duracion}   
                <span>MMPA: PG-13 </span> 
                <b>Fecha:</b> {props.fecha}
            </p>
            <p><b>Director:</b>  {props.director} </p>
            <p><b>Stars: </b> {props.actores}  </p>
        </div>
    </div>
    
    )
}