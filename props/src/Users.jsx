import { UsersData } from "./Usersdata.jsx";
import Usercards from "./Usercards.jsx";

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