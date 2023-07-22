import "./src/styles/global.css";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
