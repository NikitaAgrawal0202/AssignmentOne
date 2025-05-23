import User from '../User';
import UserClass from '../UserClass';
import React from 'react';

class About extends React.Component {
    constructor (props){
        super(props);

    }
    

    render () {
      
        return (
            <div>
                <h1>About Page </h1>
                <UserClass name={"Nikita Agrawal (class)"} location={"Jaipur"}/>
            </div>
        )
    }
   
}

export default About;