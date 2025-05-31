import { UsersData } from "../Users/Usersdata.jsx";
import Usercards from "../Users/Usercards.jsx";

function Users() {
    return (
        <div className="users-container">
            {
                UsersData.users.map((u) => (
                    <Usercards key={u.id} SingleUser={u} />
                ))
            }
        </div>
    );
}
export default Users;