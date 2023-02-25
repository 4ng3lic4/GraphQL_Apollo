//https://www.apollographql.com/tutorials/lift-off-part1/04-building-our-schema

//let's obtain the gql template literal from apollo-server:
const { gql } = require("apollo-server");

// Next, let's declare a typeDefs (short for "type definitions") constant, assigning the gql template where our definitions will go. While we're at it, let's export typeDefs now, because we'll need it for our server file later on.

const typeDefs = gql`
  # Schema definitions go here. This is the data type we will be able to retrieve

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    # Fields go here
    id: ID!

    "The track's title"
    title: String!

    "the track's main author"
    author: Author!

    "The tracks main illustration to display in track card or track page details"
    thumbnail: String

    "Track's approximate length to complete, in minutes"
    length: Int

    "The number of modules this rack contains"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!

    "photo will be a URL pointing to the image"
    photo: String
  }

  
`;

module.exports = typeDefs;
