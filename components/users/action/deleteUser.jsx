import { DELETE_USER } from "@/client/mutation/user_mutation";
import { GET_ALLUSERS } from "@/client/query/user_Query";
import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";

const DeleteUser = ({ id }) => {
  const [deleteUser, { data, error, loading }] = useMutation(DELETE_USER, {
    variables: { id },
    onCompleted: () => {
      console.log(data);
    },
    refetchQueries: [{ query: GET_ALLUSERS }],
  });
  if (error) {
    console.log(error);
    return <div>{error?.message}</div>;
  }
  return (
    <>
      <button onClick={deleteUser} className="text-pink-600">
        {loading ? <span className="text-xs">loading...</span> : <FaTrash />}
      </button>
    </>
  );
};

export default DeleteUser;
