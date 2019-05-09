import React from 'react';
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import client from './client.js';

const ME = gql`
query me {
  user(login: "yoshisansan"){
    name
		avatarUrl    
   }
}
`


class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          Hello, GraphQL
        </div>
          <Query query={ME}>
            {
              ({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`

                return <div>{data.user.name}</div>
              }
            }
          </Query>
      </ApolloProvider>
    );
  }
}

export default App
