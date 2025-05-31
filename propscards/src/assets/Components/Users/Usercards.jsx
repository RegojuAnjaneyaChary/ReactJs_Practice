import './Usercard.css';
import { useNavigate } from 'react-router-dom';
function Usercards({ SingleUser }) {
    const navigate = useNavigate();
    return(
        <div className='user-card'>
            <img src={SingleUser.image} alt={`${SingleUser.firstName} ${SingleUser.lastName}`} width={100} />
            <div className='user-card-details'>
                <h2>{SingleUser.firstName} {SingleUser.lastName}</h2>
                <h4>Email: {SingleUser.email}</h4>
                <h4>Phone: {SingleUser.phone}</h4>
                <button className='btn' onClick={() => navigate(`/users/${SingleUser.id}`)}>view more</button>
            </div>
        </div>
    )
}
export default Usercards;