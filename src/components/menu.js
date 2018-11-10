import * as React from 'react'
import Link from 'gatsby-link'
import logoLarge from '../assets/logo/logo-large.svg'
import logoSmall from '../assets/logo/logo-small.svg'
import iconChevronLeft from '../assets/icon/chevron-left.svg'
import iconChevronRight from '../assets/icon/chevron-Right.svg'
import iconClose from '../assets/icon/close.svg'

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      logoSmall: logoSmall,
      logoLarge: logoLarge,
    }
  }

  render(){
    return(
      <div className={"menu "}>
        <Link   className="logo" 
                to="/"  
                onClick={(e) => {
                  (this.props.selectedTag == this.props.id) 
                  ? this.props.deselectTag() 
                  : this.props.selectTag(this.props.id)
                e.stopPropagation()
                }}  >
          <img className="logo-large" src={this.state.logoLarge} />
          <img className="logo-small" src={this.state.logoSmall} />
        </Link>
        {this.props.tags.map((tag) =>
          (tag.key === this.props.selectedTag) ? (<p style={{color: (tag.color), backgroundColor:(tag.backgroundColor)}} className="selectedTag">{tag.name}</p>) : ''
        )}

        <button className="mobile-menu-toggle" onClick={this.props.toggleMobileMenu}>
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </button>
        <Tags 
          tags={this.props.tags} 
          selectTag={this.props.selectTag} 
          deselectTag={this.props.deselectTag}
          selectedTag={this.props.selectedTag} />
      </div>
    )
  }
}

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.tags,
    }
  }
  
  render(){
    return(
      <div className="tags">
      {this.state.tags.map((tag) =>
        <Tag  tag={tag} 
              id={tag.key}
              key={tag.key}
              url={tag.url} 
              selectedTag={this.props.selectedTag}  
              selectTag={this.props.selectTag}
              deselectTag={this.props.deselectTag} />
      )}
      </div>
    )
  }

}

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.tag.name,
      color: this.props.tag.color,
    }
  }

  render(){
    return(
      <Link to={this.props.tag.url}
        style={{
          backgroundColor: ((this.props.selectedTag == this.props.id) ? this.state.color : '')
        }}
        className={"tag " + ((this.props.selectedTag == this.props.id) ? 'selected ' : '')} 
        onClick={(e) => {
          this.props.selectTag(this.props.id)
          e.stopPropagation()
        }} 
        >
        <h4>{this.state.name}</h4>
      </Link>
    )
  }
}

export default Menu

