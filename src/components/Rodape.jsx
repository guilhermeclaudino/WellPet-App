import { Link } from 'react-router-dom'
import wallpaperpet from "../assets/wallpaperpet.png"

export default function rodape() {
    return(
        <div className='bg-laranjaescuro w-full h-[129px]'>
            <img src={wallpaperpet} alt="Pata de Pet" />
            <img src={wallpaperpet} alt="Pata de Pet" />
            <img src={wallpaperpet} alt="Pata de Pet" />
            <img src={wallpaperpet} alt="Pata de Pet" />
        </div>
    )
}