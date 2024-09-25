
import { useState ,useEffect} from "react";


const UsersData = () => {

    const[users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>User: {users.length}</h1>
            <div>
                {
                    users.map(user => <p key = 
                        {user._id}>
                            
                        {user.name}  :{user.phoneNumber} : {user.email} : {user.profession} </p>)
                }
            </div>
        </div>
    );
};

export default UsersData;