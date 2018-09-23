import * as React from 'react'
import Link from 'gatsby-link'
import logoLarge from '../assets/logo/logo-large.svg'
import logoSmall from '../assets/logo/logo-small.svg'
import iconChevronLeft from '../assets/icon/chevron-left.svg'
import iconChevronRight from '../assets/icon/chevron-Right.svg'
import iconClose from '../assets/icon/close.svg'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      logoSmall: logoSmall,
      logoLarge: logoLarge,
    }
  }

  render(){
    return(
      <div className={"header " + (this.props.headerExpanded ? 'header-large ' : 'header-small ')}>
        <Link  className="logo" to="/" >
          <img className="logo-large" src={this.state.logoLarge} />
          <img className="logo-small" src={this.state.logoSmall} />
        </Link>
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
      <div className="tags outer">
      {this.state.tags.map((tag) =>
        <Tag  tag={tag} 
              id={tag.key}
              key={tag.key} 
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
      <button  
        style={{
          backgroundColor: ((this.props.selectedTag == this.props.id) ? this.state.color : '')
        }}
        className={"tag " + ((this.props.selectedTag == this.props.id) ? 'selected ' : '')} 
        onClick={(e) => {
          (this.props.selectedTag == this.props.id) ? this.props.deselectTag() : this.props.selectTag(this.props.id)
          e.stopPropagation()
        }} 
        >
        <p>{this.state.name}</p>
        <button 
          className="deselectTag"
          onClick={(e) => {
            this.props.deselectTag()
            e.stopPropagation()
          }} >
          <img className="closeIcon icon inverse " src={iconClose}/>
        </button>
      </button>
    )
  }
}

export default Header

