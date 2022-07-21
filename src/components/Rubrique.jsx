import { offre } from '../data';
import ServItem from './ServItem';


const Rubrique = () => {
    return (
        <div className='containerHome'>
            {offre.map(item=>(
                <ServItem item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Rubrique;