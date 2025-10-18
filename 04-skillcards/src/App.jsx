import React from "react";
import Card from "./components/Card";

const App = () => {
  const people = [
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jennifer Carter",
    pay: "$45/hr",
    workType: "Freelancer",
    speciality: "Epic Coder",
    skill1: "UI/UX Design",
    skill2: "Prototyping",
    skill3: "Figma",
    numbers: 7,
    description: "Jennifer is an interactive designer who is really awesome at what she does."
  },
  {
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Michael Brown",
    pay: "$60/hr",
    workType: "Remote Developer",
    speciality: "Full Stack Developer",
    skill1: "React",
    skill2: "Node.js",
    skill3: "MongoDB",
    numbers: 5,
    description: "Michael builds fast, scalable web apps with cutting-edge tech."
  },
  {
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Sophia Green",
    pay: "$38/hr",
    workType: "Freelancer",
    speciality: "Graphic Designer",
    skill1: "Photoshop",
    skill2: "Illustrator",
    skill3: "Brand Identity",
    numbers: 3,
    description: "Sophia creates visually stunning designs with a creative touch."
  },
  {
    img: "https://randomuser.me/api/portraits/men/64.jpg",
    name: "Liam Johnson",
    pay: "$70/hr",
    workType: "Contractor",
    speciality: "Backend Engineer",
    skill1: "Python",
    skill2: "Django",
    skill3: "APIs",
    numbers: 4,
    description: "Liam designs secure and efficient backend systems for global clients."
  },
  {
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Emily Davis",
    pay: "$50/hr",
    workType: "Freelancer",
    speciality: "Content Strategist",
    skill1: "SEO",
    skill2: "Copywriting",
    skill3: "Social Media",
    numbers: 6,
    description: "Emily crafts compelling content that drives engagement and growth."
  },
  {
    img: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Ethan Miller",
    pay: "$42/hr",
    workType: "Freelancer",
    speciality: "Mobile Developer",
    skill1: "Flutter",
    skill2: "Firebase",
    skill3: "UI Design",
    numbers: 5,
    description: "Ethan builds sleek mobile apps with excellent performance."
  },
  {
    img: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Ava Robinson",
    pay: "$55/hr",
    workType: "Remote Designer",
    speciality: "Product Designer",
    skill1: "Wireframing",
    skill2: "Prototyping",
    skill3: "User Research",
    numbers: 3,
    description: "Ava designs meaningful digital experiences with user empathy."
  },
  {
    img: "https://randomuser.me/api/portraits/men/81.jpg",
    name: "Noah Williams",
    pay: "$48/hr",
    workType: "Freelancer",
    speciality: "Frontend Developer",
    skill1: "HTML",
    skill2: "CSS",
    skill3: "JavaScript",
    numbers: 5,
    description: "Noah turns designs into responsive, high-performance web pages."
  },
  {
    img: "https://randomuser.me/api/portraits/women/74.jpg",
    name: "Isabella Moore",
    pay: "$52/hr",
    workType: "Freelancer",
    speciality: "Digital Marketer",
    skill1: "Google Ads",
    skill2: "Analytics",
    skill3: "Email Campaigns",
    numbers: 7,
    description: "Isabella helps brands grow through smart, data-driven marketing."
  },
  {
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "William Anderson",
    pay: "$65/hr",
    workType: "Consultant",
    speciality: "Cloud Architect",
    skill1: "AWS",
    skill2: "DevOps",
    skill3: "Kubernetes",
    numbers: 4,
    description: "William designs scalable cloud solutions for enterprise clients."
  }
];

  return (
    <div className="parent">
      {people.map(function(elem){
        return <Card img={elem.img} name={elem.name} pay={elem.pay} work={elem.workType} speciality={elem.speciality} skill1={elem.skill1} skill2={elem.skill2} skill3={elem.skill3} num={elem.numbers} des={elem.description}/>
      })}
    </div>
  );
};

export default App;
