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

    const logementData = logement.find(item => item.id === id); //viens correspondre l'id

    if (!logementData) {
        return <div><Error/></div>;
    }

    return(
        <div>
            <Carousel images={logementData.pictures} />
            <div className="information-container">
                <div className="logement-align">
                    <Title title={logementData.title} />
                    <Host host={logementData.host} />
                </div>
                    <Location location={logementData.location} />
                <div className="logement-align">
                    <Tags tags={logementData.tags} />
                    <Rating rating={logementData.rating} />
                </div>
                <div className="logement-align dropdown-align">
                    <Dropdown title="Description" items={[logementData.description]} />
                    <Dropdown title="Équipements" items={logementData.equipments} />
                </div>  
            </div>
            
        </div>
    );
}

export default Logement;