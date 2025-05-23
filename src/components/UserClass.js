import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                login: "Dummy",
                type: "Default",
            }
        }
        
        
    }
    async componentDidMount() {
            const data = await fetch("https://api.github.com/users/NikitaAgrawal0202");
            const json = await data.json();
            console.log(json)
            this.setState({
                userInfo: json,
            })
        }
        
    render() {
        const {login, type} = this.state.userInfo;
        
        return (
        <div className="user-card">
            <h2>Name: {login}</h2>
            <h3>Location: {type}</h3>
            <h4>Contact: nikita</h4>
           
            
           
        </div>
    );
}
}

export default UserClass;