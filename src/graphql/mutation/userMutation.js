import { GraphQLID, GraphQLString, GraphQLInt, GraphQLNonNull } from "graphql";
import { UserType } from "../typeDefs/typeDefs";
import User from "@/models/user.models";

const addUser = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: async (parent, args) => {
    const { name, email, age } = args;
    try {
      if (name === "") {
        return new Error("name field are required");
      } else if (email === "") {
        return new Error("eamil field are required");
      } else if (age === 0) {
        return new Error("age field are required");
      }

      const user = await User.findOne({ email });

      if (user?.email == email) {
        return new Error("user email already exist");
      }

      const newUser = new User({ name, email, age });
      return await newUser.save();
    } catch (error) {
      return new Error(error);
    }
  },
};


const updateUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },

  resolve: async (parent, args) => {
    const { name, age, id } = args;

    if (name === "") {
      return new Error("name are empty , please fill the name");
    } else if (age === 0) {
      return new Error("age are empty , please fill the age ");
    }
    return User.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          age,
        },
      },
      { new: true }
    );
  },
};

export { addUser, updateUser };
