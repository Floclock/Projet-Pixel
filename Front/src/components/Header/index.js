import React from 'react';
import PropTypes from 'prop-types';

import HeaderTitle from './HeaderTitle';


const Header = ({ path, displayName, displaySubtitle}) => {

        return(
            <div className={`header${path}`}>
                <HeaderTitle title={displayName} subtitle={displaySubtitle} />
            </div>
        )
    
}

export default Header;
