import * as React from 'react'
import Link from 'gatsby-link'
import { timingSafeEqual } from 'crypto';
import './footer.scss'

import BehanceLogo from '../assets/icon/links/behance.svg'
import InstagramLogo from '../assets/icon/links/instagram.svg'
import DribbbleLogo from '../assets/icon/links/dribbble.svg'
import TwitterLogo from '../assets/icon/links/twitter.svg'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    name: 'instagram',
                    image: InstagramLogo,
                    url: '/',
                    key: 0,
                },
                {
                    name: 'behance',
                    image: BehanceLogo,
                    url: '/',
                    key: 1,
                },
                {
                    name: 'dribbble',
                    image: DribbbleLogo,
                    url: 'https://dribbble.com/panop',
                    key: 2,
                },
                {
                    name: 'medium',
                    image: TwitterLogo,
                    url: '/',
                    key: 3,
                }
            ],
            copywrite: 'Panop is a design site maintained by a couple of designers. Its a platform for us to voice our opinions, and showcase work that we find inspiring.',
        }
    }


    render(){

        return(
            <div className="footer ">
                <div className="external-links">
                    {this.state.links.map((externalLink) =>
                        <ExternalLink externalLink={externalLink} key={externalLink.key} />
                    )}
                </div>
                <p className="about">{this.state.copywrite}</p>
            </div>
        )
    }
}

class ExternalLink extends React.Component {
    render(){
        return(
            <a className="external-link " target="_blank" href={this.props.externalLink.url}>
                <img className="icon inverse" src={this.props.externalLink.image} />
            </a>
        )
    }
}

export default Footer
