import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        }

        console.log(props);
    }
    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: nikita</h4>
            <h5>{count}</h5>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                })
            }}>Add</button>
           
        </div>
    );
}
}

export default UserClass;