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
            ]
        }
    }


    render(){

        return(
            <div className="footer">

            </div>
        )
    }
}

export default Footer
