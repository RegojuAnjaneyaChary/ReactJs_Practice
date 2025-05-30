import './Usercard.css';
function Usercards({ SingleUser }) {
    return(
        <div className='user-card'>
            <img src={SingleUser.image} alt={`${SingleUser.firstName} ${SingleUser.lastName}`} width={100} />
            <div className='user-card-details'>
                <h2>{SingleUser.firstName} {SingleUser.lastName}</h2>
                <h4>Email: {SingleUser.email}</h4>
                <h4>Phone: {SingleUser.phone}</h4>
            </div>
        </div>
    )
}
export default Usercards;