import gql from 'graphql-tag'

export const ME = gql`
query me {
  user(login: "yoshisansan"){
    name
		avatarUrl    
   }
}
`