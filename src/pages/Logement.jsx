import { useParams } from "react-router-dom";
import Carousel from '../components/Carousel';
import Title from '../components/Title';
import Location from '../components/Location';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';
import logement from '../datas/logements.json';
import '../styles/Logement.scss';

import Error from '../pages/Error';

function Logement(){
    const { id } = useParams();

    const logementData = logement.find(item => item.id === id); //vient correspondre l'id

    if (!logementData) {
        return <div><Error/></div>;
    }

    return(
        <div>
            <Carousel images={logementData.pictures} />
            <div className="information-container">
                <div className="information-container__all-align">
                    <div className="information-container__all-align--information">
                        <Title title={logementData.title} />
                        <Location location={logementData.location} />
                        <Tags tags={logementData.tags} />
                    </div>
                    <div className="information-container__all-align--social">
                        <Host host={logementData.host} />
                        <Rating rating={logementData.rating} />
                    </div>
                </div>
                <div className="information-container__logement-align dropdown-align">
                    <Dropdown title="Description" items={[logementData.description]} className="logement-dropdown-size"/>
                    <Dropdown title="Équipements" items={logementData.equipments} className="logement-dropdown-size"/>
                </div>  
            </div>
        </div>
    );
}

export default Logement;