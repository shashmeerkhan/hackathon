import Image from "next/image"
import art from "../public/Rectangle 6.png"
import left from "../public/Frame 8.png"
import right from "../public/Frame 9.png"
import slide from "../public/slide-numbers.png"
import btn from "../public/Frame 10.png"
import img9 from "../public/Rectangle 9.png"
import img8 from "../public/Rectangle 8.png"
import img10 from "../public/Rectangle 10.png"
import btn1 from "../public/Frame 11.png"
import sampleProject from "../public/Rectangle 12.png"; 
import project3 from "../public/image 17.png"; 
import project2 from "../public/image 16.png"; 
import project1 from "../public/image 15.png"; 
import project4 from "../public/image 18.png"; 
import project5 from "../public/Frame 11.png"; 
import contact from "../public/image 12.png"; 
import sendemail from "../public/Frame 111.png"; 



export default function Home(){
    return(
        <>
    
        
       <section className="main">
        <div className="hero">
            <div className="text-[74px]  ">Projects</div>
            <div className="lor">Lorem</div>
            <div className="sign">
            <Image src={right} alt=""/>
            <Image src={left} alt=""/>
            </div>
            <div className="slide">
            <Image src={slide} alt="" /></div>
            
            
    

        </div>
        <div className="img">
        <Image src={art} alt="" width={770} height={829}/>
        <div className="imgch">
        <Image src={btn} alt="" width={222} height={71}/>
        </div>
        </div>
       </section>
       <section>
        <div className="aboutsec">
            <div className="twopicdiv">
                <Image src={img8} alt="" width={270} height={265}/>
                <Image src={img10} alt="" width={270} height={140}/>
            </div>
            <div className="apicdiv">
            <Image src={img9} alt="" width={270} height={345}/>
            </div>
            <div className="aboutdetail">
                <h1>About</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <Image src={btn1} alt="" width={222} height={71}/>
            </div>
        </div>
       </section>
       <section>
        
       <div className="focus"><h1>Main Focus/Mission Statement</h1>
       <div className="focus1">
        <div className="cou">1</div>
       <div className="one"> ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</div>
       <div className="cou">2</div>

       <div className="two">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
        </div>
       
       </div>
       </div>
       </section>

       <section className="projects-section">
      
<div className="pro"> <h1>Projects</h1></div>


<div className="grid-contaner">
    <div className="grid-item" id="relative">
    <Image src={sampleProject} alt="" layout="responsive"/>
<div className="project-info">
    <h2>Sample Project</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
    <a href="#">Read More</a>
</div>
    </div>
    <div className="grid-item">
        <Image src={project1} alt="" width={300} height={200}/>
        
    </div>
    <div className="grid-item" id="big-grid">
        <Image src={project2} alt="" width={300} height={200}/>
      
    </div>
    <div className="grid-item">
        <Image src={project3} alt="" width={300} height={200}/>
        
    </div>
    <div className="grid-item">
        <Image src={project4} alt="" width={300} height={200}/>
        

</div>
    <div className="pro-btn">
        <Image src={project5} alt="" width={300} height={200}/>
        
    
</div>
</div>

</section>

<section>
    <h1>Contact Us</h1>
    <div className="contact">
    
    <div className="detail-contact">
    <input type="text" placeholder="Name" className="inp" required /><br />
    <input type="tel" placeholder="Phone no" className="inp" required /><br />
    <input type="email" placeholder="Email" className="inp" required /><br />
    <input type="text" placeholder="Interested In" className="inp" required /><br />
    
    <input type="text"  placeholder="Message" className="inp" id="message"  required /><br />
    <div className="btn-contact">
        <Image src={sendemail} alt="" />

    
    </div>
    </div>

    <div className="contact-img">
        <Image src={contact} alt=""/>
       
    </div>
    </div>
</section>
        </>
    )
}