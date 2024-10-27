import Image from "next/image";
import project1 from "../public/image 30.png"; 
import project2 from "../public/image 32.png"; 
import project3 from "../public/image 33.png"; 
import { StaticImageData } from "next/image";

type IData = { heading: string; detail: string; img: StaticImageData };

const Daata: IData[] = [
  {
    heading: "Project 1",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.",
    img: project1,
  },
  {
    heading: "Project 2",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.",
    img: project2,
  },
  {
    heading: "Project 3",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.",
    img: project3,
  },
];

export default function Projects() {
  return (
    <>
      <div className="projectpage">
        <h1 className="text-[64px] text-slate-400 ml-[150px]">our</h1>
        <h1 className="text-[40px] font-extrabold text-black ml-[150px]">Projects</h1>
      </div>

      {Daata.map((Id, index) => (
        <div className="parent1" key={index}>
          <div className="project1">
            <Image src={Id.img} alt={Id.heading} layout="responsive" />
          </div>
          <div className="project-info1">
            <h2>{Id.heading}</h2>
            <p>{Id.detail}</p>
            <a href="#">Read More</a>
          </div>
        </div>
      ))}
    </>
  );
}
