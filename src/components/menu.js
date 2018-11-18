import * as React from 'react'
import Link from 'gatsby-link'
import panopLogoLayer1 from '../assets/logo/layers/panop-logo-layer-light-01.svg'
import panopLogoLayer2 from '../assets/logo/layers/panop-logo-layer-light-02.svg'
import panopLogoLayer3 from '../assets/logo/layers/panop-logo-layer-light-03.svg'

import logoSmall from '../assets/logo/logo-small.svg'

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      logoSmall: logoSmall,
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
          <div className="logo-large">
            <img className="layer1" src={panopLogoLayer1} />
            <img className="layer2" src={panopLogoLayer2} />
            <img className="layer3" src={panopLogoLayer3} />
          </div>
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

