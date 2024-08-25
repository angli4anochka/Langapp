
import {BADGES} from '../../mock/AchievementsData';


function Achievements() {
    return (
        <div>
            {BADGES.map(badge => <img src={badge.imgSrc} alt={badge.name} key={badge.name}/>)}
        </div>
    );
}

export default Achievements;
