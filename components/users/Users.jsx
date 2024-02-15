import { GET_ALLUSERS } from "@/client/query/user_Query";
import { useQuery } from "@apollo/client";
import AddUser from "./action/addUser";
import UpdateUser from "./action/updateUser";
import DeleteUser from "./action/deleteUser";

const Users = () => {
  const { data, loading, error } = useQuery(GET_ALLUSERS) || {};

  if (error) {
    console.log(error);
    return <div>{error?.message}</div>;
  }
  return (
    <main>
      {/* user mutation here ... */}
      <section className="">
        <AddUser />
      </section>

      <h4>All Users List: {data?.getAllUser?.length || 0} </h4>

      {/* user query here...  */}
      <div className="flex gap-7 mb-3">
        <h4>Name</h4>
        <h4>Age</h4>
        <h4>Email</h4>
      </div>
      <div className="flex flex-col gap-3">
        {loading ? (
          <div>Loading</div>
        ) : (
          data?.getAllUser?.map((user, index) => (
            <div key={user?.id} className="flex  gap-7">
              <h4>
                {" "}
                <span> {index + 1}. </span> {user?.name}
              </h4>
              <h4>{user?.age}</h4>
              <p>{user?.email}</p>
              <div className="flex gap-4 items-center">
                <UpdateUser user={user} />
                <DeleteUser id={user?.id} />
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Users;
