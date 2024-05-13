import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Sean Paul",
        node_id: "Dua lipa Armpits",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/n0vay");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { login, node_id, avatar_url } = this.state.userInfo;
    return (
      <div>
        <div>
          <img src={avatar_url} />
        </div>
        User Class
        <div>
          {login} lives in {node_id}
        </div>
      </div>
    );
  }
}

export default UserClass;

/* 
--- Mounting Cycle
Constructor
  Render(Dummy)
    <HTML> Dummy
  Component did mount
    <API Call>
    this.setState is called

--- Update Cycle
  Render (Api Data)
  <HTML> (New Api Data)
  
  Componenetdidupdate called

---Unmount Cycle
  Called when page is changed to remove current component

*/
