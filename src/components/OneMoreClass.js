import React from "react";


class OneMoreClass extends React.Component {
    constructor(props){
        super(props);

        console.log(this.props.name + "Constructor Called");
    }
    componentDidMount() {
        console.log(this.props.name + "ComponentDidMount Called");
    }
    render() {
        console.log(this.props.name + "Render Called");
        return (
            <div className="user-card">
            <h2>{this.props.name}</h2>
            <h3>Location: Kota</h3>
            <h4>Contact: nikita</h4>
            
           
        </div>
        )
    }
}

export default OneMoreClass;