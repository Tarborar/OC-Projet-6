import '../styles/Banner.scss'
import { useLocation } from 'react-router-dom';

function Banner({ bannerClass }){
    const location = useLocation();

    return(
        <div className={`banner-container ${bannerClass}`}>
        {location.pathname === '/' && (
            <h1 className='banner-container__text'>Chez vous, partout et ailleurs</h1>
        )}
    </div>
    )
}

export default Banner