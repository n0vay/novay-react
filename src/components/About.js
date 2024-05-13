import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div>
      <h1>About Class Componenets</h1>
      <div>
        LoggedIn User :
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      About
      <UserClass name={"Sean Paul"} location={"Dua Lipa Armpits"} />
    </div>
  );
};

export default About;
