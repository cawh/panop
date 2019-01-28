import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Menu from '../components/menu'
import Footer from '../components/footer'
import './index.scss'
import * as functions from '../functions/functions'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false,
      selectedTag: 10,
      mobileMenuOpen: false,
      tags: [
        {
          name: 'Articles',
          url: '/articles',
          color: '#007FFF',
          backgroundColor: '#CCE5FF',
          key: 0,
          selected: false,
        },
        {
          name: 'Reviews',
          url: '/reviews',
          color: '#009844',
          backgroundColor: '#CCEAD9',
          key: 1,
          selected: false,
        },
        {
          name: 'Inspiration',
          url: '/inspiration',
          color: '#E329E3',
          backgroundColor: '#F9D4F9',
          key: 2,
          selected: false,
        },
        {
          name: 'Portfolio',
          url: '/portfolio',
          color: '#FAAF33',
          backgroundColor: '#FEEFD6',
          key: 3,
          selected: false,
        },
        {
          name: 'Store',
          url: '/store',
          color: '#F82323',
          backgroundColor: '#FDD3D3',
          key: 4,
          selected: false,
        },
      ],
    }
    functions.selectTag = functions.selectTag.bind(this)
    functions.deselectTag = functions.deselectTag.bind(this)
    functions.toggleMobileMenu = functions.toggleMobileMenu.bind(this)

  }

  //life cycle event handlers
  componentDidMount() {
    function selectTagFromURL() {
      function getLastPart(url) {
        var parts = url.split('/')
        return url.lastIndexOf('/') !== url.length - 1
          ? parts[parts.length - 1]
          : parts[parts.length - 2]
      }
      var lastPart = getLastPart(window.location.href)
      if (lastPart === 'articles') {
        functions.selectTag(0)
      }
      if (lastPart === 'reviews') {
        functions.selectTag(1)
      }
      if (lastPart === 'inspiration') {
        functions.selectTag(2)
      }
      if (lastPart === 'portfolio') {
        functions.selectTag(3)
      }
      if (lastPart === 'store') {
        functions.selectTag(4)
      }
    }
    selectTagFromURL()
  }
  componentWillMount() {
    var today = new Date().getHours()
    if (today >= 7 && today <= 18) {
      var root = document.getElementsByTagName('html')[0]
      root.setAttribute('class', 'light-mode')
    } else {
      var root = document.getElementsByTagName('html')[0]
      root.setAttribute('class', 'dark-mode')
    }
  }

  render() {
    const { children, data } = this.props
    return (
      <div className="contain-all">
        <div className="max-width">
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'Panop is a design blog created by two pals.',
              },
              {
                name: 'keywords',
                content:
                  'design blog contextual inspiration portfolio industrial product service UX UI current',
              },
            ]}
          />
          <div className={'nav ' + (this.state.mobileMenuOpen ? 'open ' : '')}>
            <Menu
              headerExpanded={this.state.headerExpanded}
              selectTag={functions.selectTag}
              deselectTag={functions.deselectTag}
              toggleMobileMenu={functions.toggleMobileMenu}
              tags={this.state.tags}
              selectedTag={this.state.selectedTag}
              siteTitle={data.site.siteMetadata.title}
            />
            <Footer />
          </div>
          {children()}
        </div>
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
