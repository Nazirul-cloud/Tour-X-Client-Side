import React from 'react';

import guide1 from '../../../images/guides/team-1.png';
import guide2 from '../../../images/guides/team-2.png';
import guide3 from '../../../images/guides/team-3.png';
import guide4 from '../../../images/guides/team-4.png';

import Guide from '../Guide/Guide';



const guides = [
    {
        img: guide1,
        name: 'Andrew Smith',
        expertize: 'Peelamedu, Cbe, Australia'
    },
    {
        img: guide2,
        name: 'Nafisa Ahmed',
        expertize: 'Peelamedu, Cbe, India'
    },
    {
        img: guide3,
        name: 'Zakaria Smith',
        expertize: 'Peelamedu, Cbe, South America'
    },
    {
        img: guide4,
        name: 'Nira Anderson',
        expertize: 'Peelamedu, Cbe, Philippines'
    },
]

const Guides = () => {
    return (
        <div className="container" id="experts">
            <h2 className="text-primary mt-5">Our Guides</h2>
            <div className="row">
                {
                    guides.map(guide => <Guide
                        key={guide.name}
                        guide ={guide}
                    >

                    </Guide>)
                }
            </div>
        </div>
    );
};

export default Guides;