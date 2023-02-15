//https://www.apollographql.com/tutorials/lift-off-part1/04-building-our-schema

//let's obtain the gql template literal from apollo-server:
const { gql } = require("apollo-server");


// Next, let's declare a typeDefs (short for "type definitions") constant, assigning the gql template where our definitions will go. While we're at it, let's export typeDefs now, because we'll need it for our server file later on.

const typeDefs = gql`
  # Schema definitions go here
  "A track is a group of Modules that teaches about a specific topic"
type Track {
  # Fields go here
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
}

"Author of a complete Track or a Module"

type Author {
    id: ID!
    name: String!
    photo: String
}



`;




module.exports = typeDefs;