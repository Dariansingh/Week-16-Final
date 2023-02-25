
import {Data} from '../data/bios-data'
import { useParams } from "react-router-dom";
import "../style/bios.css";


export default function Bios() {
    let { id } = useParams(); 

    return(
        <div className='bios'>
            <div className='left-half'>
                <h1 className='header'> { Data[id].firstname + " " + Data[id].lastname }  </h1>
                <a className='img-container'>
                    <img className='bios-img' alt="bios-photo" src={Data[id].imageUrl}/>
                </a>
            </div>
            <div className='right-half'>
                <p>
                    {Data[id].description}
                </p>
            </div>
        </div>
    )
}