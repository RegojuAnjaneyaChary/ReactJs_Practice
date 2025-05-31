import { UsersData } from '../Users/Usersdata.jsx';
import { useParams } from 'react-router-dom';
import './Userdetails.css';
import Notfound from '../Products/Notfound.jsx'; // Adjust path if needed

function Userdetails() {
    const params = useParams();
    const userId = parseInt(params.id);
    const user = UsersData.users.find((user) => user.id === userId);

    if (!user) {
        return <Notfound />;
    }

    return (
        <div className="user-details">
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>
                Address: {user.address?.street}, {user.address?.city}, {user.address?.state}
            </p>
        </div>
    );
}
export default Userdetails;