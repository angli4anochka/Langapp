import eagle from './img/eagle.png'
import deer from "./img/deer.png"
import pinkpeople from "./img/pinkpeople.png"


function Achievements() {
    return (
        <div>
        <table>
            <tbody>
                <tr>
                    <td>
                        <img src={eagle} alt="Eagle" width="100" height="100" />
                    </td>
                    <td>
                        <img src={deer} alt="Eagle" width="100" height="100" />
                    </td>
                    <td>
                        <img src={pinkpeople} alt="Eagle" width="100" height="100" />
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Achievements
