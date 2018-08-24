import * as React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/logo/logo.svg'
import { timingSafeEqual } from 'crypto';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    name: 'instagram',
                    url: '/',
                    key: 0,
                },
                {
                    name: 'behance',
                    url: '/',
                    key: 1,
                },
                {
                    name: 'dribbble',
                    url: '/',
                    key: 2,
                },
                {
                    name: 'medium',
                    url: '/',
                    key: 3,
                }
            ],
            copywrite: 'The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of PANOP.',
        }
    }


    render(){

        return(
            <div className="footer outer">
                <div className="externalLinks">
                    {this.state.links.map((externalLink) =>
                        <Link className="externalLink" to="/">
                            <h5>{externalLink.name}</h5>
                        </Link>
                    )}
                </div>
                <p className="copywrite">{this.state.copywrite}</p>
            </div>
        )
    }
}

export default Footer
