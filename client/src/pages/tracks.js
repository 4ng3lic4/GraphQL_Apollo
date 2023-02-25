import React from 'react';
import { Layout } from '../components';
//We need to import UseQuery from the @apollo/client package (we're already importing gql)
import { useQuery, gql } from "@apollo/client";
//Import component to display the data
import TrackCard from '../containers/track-card';
//import query results 
import QueryResult from "../components/query-result";

/**TRACKS gql query to retrieve all tracks */
const TRACKS = gql`
query GetTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
  }
}
`;

/**
 * Tracks Page is the Astronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  <QueryResult error={error} loading={loading} data={data}>
  {data?.tracksForHome?.map((track) => (
    <TrackCard key={track.id} track={track} />
  ))}
</QueryResult>

  //To create one card per track, we'll map over tracksForHome array and return a trackCard component
  //with its track data as its prop

  return <Layout grid>
{data?.tracksForHome?.map((track) => (
    <TrackCard key={track.id} track={track} />
  ))}
  </Layout>;
};
export default Tracks;


//https://www.apollographql.com/tutorials/lift-off-part1/10-the-usequery-hook


//Error to fetch forum https://community.apollographql.com/t/lift-off-part-1-error-fail-to-fetch/3100?u=angelica