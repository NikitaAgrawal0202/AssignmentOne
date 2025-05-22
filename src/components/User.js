import { useState } from "react";


const User = () => {
 const [count] = useState(0);
 const [count2] = useState(1);
    return <div className="user-card">
        <h2>Nikita Agrawal</h2>
        <h3>Location: Jaipur</h3>
        <h4>Contact: nikita</h4>
        <h5>{count}</h5>
        <h5>{count2}</h5>
    </div>
}

export default User;