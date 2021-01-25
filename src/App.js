import React from 'react';
// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const getAllArticles = gql`{
  articles {
    title
    description
    coverImageUrl
    author {
      name
      country
    }
  }
}`
function App() {
  const { loading, error, data } = useQuery(getAllArticles)

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>

  return (
      // todo make this more of a react component for practices
      // this is jut one gigantic blob. we should make an avatar card or something.
      // with an article which can be reused. 
      <div className="container">
        <h1>Articles</h1>
        <div className="row">
          {data.articles.map(article => (
              <div className="col-sm">
                <div className="card" style={{width: "18rem"}}>
                  <img
                      src={article.coverImageUrl}
                      className="card-img-top"
                      style={{height: "10em"}}
                      alt="cover"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <button className="btn btn-primary">Read</button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  )
}

export default App;