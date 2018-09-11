import * as React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/logo/logo.svg'
import iconChevronLeft from '../assets/icon/chevron-left.svg'
import iconChevronRight from '../assets/icon/chevron-Right.svg'
import iconClose from '../assets/icon/close.svg'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      logo: logo,
      expanded:true,
    }
  }

  render(){
    return(
      <div className="header outer">
        <Link  className="logo" to="/" >
          <img src={this.state.logo} />
        </Link>
        <Menu />
      </div>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.markTag = this.markTag.bind(this)

  }
  
  //local functions

  markTag(id) {
    let newState = {...this.state}
    newState.tags[id] = {...this.state.tags[id], selected: !this.state.tags[id].selected} 
    this.setState(newState)
  }

  render(){
    return(
      <div className="menu">
      {this.state.tags.map((tag) =>
        <Tag  name={tag.name} 
              key={tag.key} 
              id={tag.key} 
              selected={tag.selected} 
              color={tag.color} 
              markTag={this.markTag} />
      )}
      </div>
    )
  }

}

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: this.props
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ tag: nextProps})
  }

  render(){
    return(
      <button  
        style={{
          backgroundColor: (this.state.tag.selected ? this.state.tag.color : '')
        }}
        className={"tag " + (this.state.tag.selected ? 'selected ' : '')} 
        onClick={() => this.props.markTag(this.state.tag.id)} 
        >
        <p>{this.state.tag.name}</p>
        <img className="closeIcon icon" src={iconClose}/>
      </button>
    )
  }
}

export default Header

