import { CAMPSITES } from '../../app/shared/CAMPSITES';
import {
    Col,
} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

const CampsitesList = () => {
    if(CAMPSITES){
        return (       
            CAMPSITES.map((campsite) => {
                return (
                    <Col md='5' key={campsite.id} className='m-1'>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            }) 
        )
      } else {
          return null
      }
}

export default CampsitesList 