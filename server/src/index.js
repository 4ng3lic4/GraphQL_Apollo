//https://www.apollographql.com/tutorials/lift-off-part1/07-the-frontend-app


//TODO To create our server, we'll use the apollo-server package that we installed previously. From that package, we'll only need the named export ApolloServer, so we'll declare that constant between curly braces. Just below, we'll import our typeDefs from our schema.js file:
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

//   To serve mocked data that's closer to reality, we'll pass an object to the mocks property instead of just true. This object contains functions that provide the mocked data we want the server to return for each queried field.

  const mocks = {
    
// With mocks enabled, Apollo Server always returns exactly two entries for every list field.
// To get more entries at a time, let's say 6, we'll add a Query.tracksForHome to our mocks object and return an Array of that given length like so: [...new Array(6)].

    Query: () => ({
        tracksForHome: () => [...new Array(6)],
      }),

    Track: () => ({
      id: () => "track_01",
      title: () => "Astro Kitty, Space Explorer",
      author: () => {
        return {
          name: "Grumpy Cat",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail: () =>
        "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
      length: () => 1210,
      modulesCount: () => 6,
    }),
  };


  //Next, we'll create an instance of the ApolloServer class and pass it our typeDefs in its options object: Note: We're using shorthand property notation with implied keys, because we've named our constant with the matching key (typeDefs).
const server = new ApolloServer({ 
    typeDefs ,
    //To enable basic mocked data that is more customized to out data, we will pass an object to the mocks.  property instead of just "true".This object contains functions that provide the mocked data we want the server to return for each queried field.
mocks,
});


/**Finally, to start it up, we'll call the async listen method. When it resolves, it logs a nice little message letting us know that our server is indeed up and running: */

server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at http://localhost:4000
    `);
  });

