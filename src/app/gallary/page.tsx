import Image from "next/image"
import project1 from "../public/Rectangle 22.png"
import project2 from "../public/Rectangle 23.png"
import project3 from "../public/Rectangle 24.png"
import project4 from "../public/Rectangle 25.png"
import project5 from "../public/Rectangle 26.png"
import project6 from "../public/Rectangle 27.png"
import project7 from "../public/Rectangle 28.png"
import project8 from "../public/Rectangle 29.png"
import project9 from "../public/Rectangle 30.png"
import project10 from "../public/Rectangle 31.png"
export default function Gallary(){
    return(
        <>
        <div className="gallary">
            <h1 className="text-[64px] text-slate-400">Photos</h1>
            <h1 className="text-[40px] font-extrabold text-black">Gallary</h1>
        </div>
        <div className="gallary-img">
<Image src={project1} alt="project1"/>
<Image src={project2} alt="project2"/>
<Image src={project3} alt="project3"/>
<Image src={project4} alt="project4"/>
<Image src={project5} alt="project5"/>
<Image src={project6} alt="project6"/>
<Image src={project7} alt="project7"/>
<Image src={project8} alt="project8"/>
<Image src={project9} alt="project9"/>
<Image src={project10} alt="project10"/>

        </div>
        </>
    )
}