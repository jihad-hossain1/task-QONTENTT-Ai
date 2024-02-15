"use client";

import { HiMiniPencilSquare } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "@/client/mutation/user_mutation";
import { GET_ALLUSERS } from "@/client/query/user_Query";

const UpdateUser = ({ user }) => {
  const [modal, setModal] = useState(false);
  const [name, setname] = useState(user?.name);
  const [age, setage] = useState(user?.age);

  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER, {
    variables: {
      id: user?.id,
      age: parseFloat(age),
      name: name,
    },
    refetchQueries: [{ query: GET_ALLUSERS }],
  });

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const id = user?.id;
    await updateUser(id, parseFloat(age), name);
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (data) {
      console.log(data);
      setModal(false);
    }
  }, [error, data]);
  return (
    <>
      <button className="text-green-500" onClick={() => setModal(!modal)}>
        <HiMiniPencilSquare size={20} />
      </button>

      <Modal openModal={modal} closeModal={() => setModal(false)}>
        <div className="relative">
          <button className="absolute right-0" onClick={() => setModal(!modal)}>
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <h4 className="text-center py-4">Update User</h4>
          <form onSubmit={handleUpdateUser} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border bg-transparent border-purple-500 p-3 rounded shadow-sm hover:shadow"
              name=""
              id=""
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
            <input
              type="number"
              placeholder="Name"
              className="border bg-transparent border-purple-500 p-3 rounded shadow-sm hover:shadow"
              name=""
              id=""
              onChange={(e) => setage(e.target.value)}
              value={age}
            />

            <div className="my-2 text-sm text-pink-600">
              {error && error?.message}
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full uppercase border border-purple-800 bg-purple-700 hover:bg-purple-700/90 text-purple-50 px-3 text-sm rounded shadow-sm hover:shadow transition-all"
              >
                {loading ? "loading..." : "update"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default UpdateUser;
