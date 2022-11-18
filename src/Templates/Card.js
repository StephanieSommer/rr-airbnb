import "./Card.css"
import Image from "../Components/Image";
import Icon from "../Components/Icon"
import MoreBtn from "../Components/MoreBtn"

const Card = () => {
    return ( 
        <article className="Card">
            <Image />
                <div className="Bluebox">
                    <Icon />
                    <MoreBtn />
                </div>
        </article>
     );
}
 
export default Card;