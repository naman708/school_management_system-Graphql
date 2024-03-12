const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Students {
    id: ID!
    name: String!
    className: String!
    phno: String!
    address: String!
  }

  type Query {
    students: [Students]  # Assuming you want to fetch all students
    studentsByClass(className: String!): [Students!]! # Fetch a student by class
  }

  type Mutation {
    addStudent(name: String!, className: String!, phno: String!, address: String!): Students!
    updateStudent(id: ID!, name: String, className: String, phno: String, address: String): Students
    deleteStudent(id: ID!): ID
  }
`;

module.exports = typeDefs;
