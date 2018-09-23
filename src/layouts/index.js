import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './light-mode.scss'
import * as functions from '../functions/functions'

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headerExpanded: true,
      selectedTag: 10,
      tags: [
        {
          name:'Contextual',
          color:'#007FFF',
          key:0,
          selected: false,
        },
        {
          name:'Reviews',
          color:'#009844',
          key:1,
          selected: false,
        },
        {
          name:'Inspiration',
          color:'#E329E3',
          key:2,
          selected: false,
        },
        {
          name:'Portfolio',
          color:'#FAAF33',
          key:3,
          selected: false,
        },
      ]
    }
    functions.selectTag = functions.selectTag.bind(this)
    functions.deselectTag = functions.deselectTag.bind(this)
    functions.handleScroll = functions.handleScroll.bind(this)
  }

  //life cycle event handlers
  componentDidMount() {
    window.addEventListener('scroll', functions.handleScroll);
    
    var today = new Date().getHours();
    if (today >= 7 && today <= 18) {
      require ('./light-mode.scss');
    } 
    else {
      require ('./dark-mode.scss');
    }
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', functions.handleScroll);
  }
  

  render() {
    const { children, data } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Panop is a design blog created by two pals.' },
            { name: 'keywords', content: 'design blog contextual inspiration portfolio industrial product service UX UI current' },
          ]}
        />
        <Header 
          headerExpanded={this.state.headerExpanded}
          selectTag={functions.selectTag} 
          deselectTag={functions.deselectTag}
          tags={this.state.tags} 
          selectedTag={this.state.selectedTag} 
          siteTitle={data.site.siteMetadata.title} />
        <div className='outer '>
          <div className={'articles ' 
          + (this.state.headerExpanded 
          ? '' 
          : 'articles-header-small ')}>
            {children()}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
