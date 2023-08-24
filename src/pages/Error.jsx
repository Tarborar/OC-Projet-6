import '../styles/Error.scss';
import {Link} from 'react-router-dom'

function Error(){
    return(
        <div className="error-container">
            <h2 className="error-container__title">404</h2>
            <p className="error-container__text">Oups! La page que vous demandez n'existe pas.</p> 
            <Link to="/" className="error-container__link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error