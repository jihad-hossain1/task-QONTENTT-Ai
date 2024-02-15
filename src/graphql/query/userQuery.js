import { GraphQLID, GraphQLList } from "graphql";
import { UserType } from "../typeDefs/typeDefs";
import User from "@/models/user.models";

const getAllUser = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    try {
      const users = await User.find();
      const result = users?.slice().reverse();
      return result;
    } catch (error) {
      return new Error(error);
    }
  },
};

export { getAllUser };
