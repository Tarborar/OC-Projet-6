import '../styles/Card.scss'

function Card({title, cover}){
    return(
        <div className="card-container">
            <h2 className='card-container__title'>{title}</h2>
            <img src={cover} alt={title} className='card-container__image' />
        </div>
    );
}

export default Card