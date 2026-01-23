// react arrow function export component - rafce
import react from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
const App = (props) => {
  const users = [
    {
      name: "Ava Thompson",
      job: "Graphic Designer",
      description: "Creates visual content and brand identities.",
      followers: 12800,
      likes: 5400,
      profilePic:
        "https://i.pinimg.com/736x/cf/6e/c4/cf6ec445df41899479978aa16f05c996.jpg",
    },
    {
      name: "Liam Carter",
      job: "Frontend Developer",
      description: "Builds responsive interfaces and interactive UI features.",
      followers: 9400,
      likes: 3100,
      profilePic: "https://i.pinimg.com/736x/ca/81/08/ca810811f3e85220193f9afdbeb3f7a9.jpg",
    },
    {
      name: "Sophia Bennett",
      job: "Content Writer",
      description: "Writes SEO articles and compelling scripts.",
      followers: 15600,
      likes: 8700,
      profilePic: "https://i.pinimg.com/736x/50/07/78/5007789a808ce001103ed04c70e8c518.jpg",
    },
    {
      name: "Ethan Rivera",
      job: "Photographer",
      description: "Shoots portraits, landscapes, and events.",
      followers: 20200,
      likes: 12000,
      profilePic: "https://i.pinimg.com/736x/ae/3b/77/ae3b77c613dd774aa219c224f96c967c.jpg",
    },
    {
      name: "Mia Collins",
      job: "Digital Marketer",
      description: "Manages ad campaigns and social growth strategies.",
      followers: 11000,
      likes: 4600,
      profilePic: "https://i.pinimg.com/736x/c2/b7/aa/c2b7aa05db7399ad2054fe223a2675f5.jpg",
    },
  ];

  return (
    <>
      <div className="div-of-Cards">
        {users.map(function (elem) {
          return (
            <Card
              name={elem.name}
              desc={elem.description}
              followers={elem.followers}
              likes={elem.likes}
              img={elem.profilePic}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
