"use client";

import { ADD_USER } from "@/client/mutation/user_mutation";
import { GET_ALLUSERS } from "@/client/query/user_Query";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [email, setemail] = useState("");

  const [addUser, { data, error, loading }] = useMutation(ADD_USER, {
    variables: {
      email: email,
      age: parseFloat(age),
      name: name,
    },
    refetchQueries: [{ query: GET_ALLUSERS }],
  });

  const handleAddUser = async (e) => {
    e.preventDefault();

    await addUser(name, email, parseFloat(age));
  };

  const handleCancel = () => {
    setage(0);
    setname("");
    setemail("");
    setIsOpen(false);
  };

  useEffect(() => {
    if (error) {
      console.log(error?.message);
    } else if (data) {
      toast.success("user data added successfull");
      setage(0);
      setname("");
      setemail("");
      setIsOpen(false);
    }
  }, [error, data]);
  return (
    <>
      <Toaster />
      <button
        className={
          isOpen
            ? "hidden"
            : "block rounded border bg-purple-700 px-6 border-purple-800 shadow hover:shadow-md py-2"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaUserPlus />
      </button>
      {isOpen && (
        <div className="max-w-sm mx-auto p-2">
          <form onSubmit={handleAddUser} className="flex flex-col gap-4">
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
            <input
              type="email"
              placeholder="Email"
              className="border bg-transparent border-purple-500 p-3 rounded shadow-sm hover:shadow"
              name=""
              id=""
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <div className="my-2 text-sm text-pink-600">
              {error && error?.message}
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="uppercase border border-purple-800 bg-purple-700 hover:bg-purple-700/90 text-purple-50 px-3 text-sm rounded shadow-sm hover:shadow transition-all"
              >
                {loading ? "loading..." : "Create"}
              </button>
              <button
                className="uppercase border border-pink-800 bg-pink-700 text-purple-50 px-3 text-sm rounded shadow-sm hover:shadow transition-all"
                type="button"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddUser;
