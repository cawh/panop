import React from 'react'
import Link from 'gatsby-link'
import PostRankless from '../layouts/post-rankless';

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}><h4>{props.text}</h4></Link>;
  } else {
    return null;
  }
};

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return(
    <div className="posts">
      {group.map(({ node }) => (
        <PostRankless post={node} key={node.id} />
      ))}

      <div className="page-navigation">
        <div className="previous-page">
          <NavLink test={first} url={previousUrl} text="Previous" />
        </div>
        <div className="next-page">
          <NavLink test={last} url={nextUrl} text="Next" />
        </div>
      </div>
    </div>
  )
};

export default IndexPage


