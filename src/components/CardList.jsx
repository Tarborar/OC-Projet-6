import logement from '../datas/logements.json'
import {Link} from 'react-router-dom'
import Card from './Card'
import '../styles/CardList.scss'

function CardList(){
    return(
        <div className='cardlist-container'>
            {logement.map(({id, title, cover}) => (
                <Link key={id} to={`/logement/${id}`}><Card cover={cover} title={title} /></Link> 
            ))}
        </div>
    );
}

export default CardList