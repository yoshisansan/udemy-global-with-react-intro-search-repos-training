import React from 'react';
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import client from './client.js'
import { SEARCH_REPOSITORIES } from './graphql.js'

const VARIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア"
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = VARIABLES
  }
  render() {
    const { query, first, last, before, after } = this.state
    return (
      <ApolloProvider client={client}>
          <Query 
            query={SEARCH_REPOSITORIES}
            variables={{ query, first, last, before, after }}
          >
            {
              ({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`

                console.log({data})
                return <div>{data}</div>
              }
            }
          </Query>
      </ApolloProvider>
    );
  }
}

export default App
