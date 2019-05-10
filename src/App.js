import React from 'react';
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import client from './client.js'
import { SEARCH_REPOSITORIES } from './graphql.js'

const DEFAULT_STATE = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンドエンジニア"
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = DEFAULT_STATE

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      ...DEFAULT_STATE,
      query: event.target.value
    })
  }

  render() {
    const { query, first, last, before, after } = this.state
    console.log({query})

    return (
      <ApolloProvider client={client}>
          <form>
            <input value={query} onChange={this.handleChange} />
          </form>
          <Query 
            query={SEARCH_REPOSITORIES}
            variables={{ query, first, last, before, after }}
          >
            {
              ({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`

                console.log({data})
                return <div></div>
              }
            }
          </Query>
      </ApolloProvider>
    );
  }
}

export default App
