import ModalCreateUser from "./ModalCreateUser";
//manage user
const ManageUser = () => {
   return (
      <div className="manage-user-container">
         <div className="title">Manage User</div>
         <div className="users-content">
            <div className="btn-user">
               <button type="">Add new user</button>
            </div>
            <div className="table-users">
               table users
               <ModalCreateUser />
            </div>
         </div>
      </div>
   );
};
export default ManageUser;
