import { Link } from "react-router-dom";

const ServItem = ({item}) => {
    return (
        <>
            <Link to={item.lien} className="article">
                <div className='artbkg' style={{backgroundImage:`linear-gradient(-15deg, #FFFFFF00 65%, #000000), url(${item.bgi})`}}>
                        <div className="artitle" style={{color:item.homoHeadColor}}>
                            <h3>{item.title}</h3>
                        </div>
                </div>
                <div>
                    <p className="artserv">{item.desc}</p>
                </div>
                <span id="plus">Détails...</span>
            </Link>
        </>
    );
};

export default ServItem;