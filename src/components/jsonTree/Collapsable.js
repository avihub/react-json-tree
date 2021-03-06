import React from 'react';

function Collapsable({ children }) {
    const [isHidden, setIsHidden] = React.useState(false)
    const onClick = (e) => {
        setIsHidden(!isHidden)
    }

    return (
        <span>
            <span className='toggle' onClick={onClick}>
                {isHidden ? ' + ' : ' - '}
            </span>
            <span style={{ display: isHidden ? 'none' : '' }}>
                {children}
            </span>
        </span>
    )
};

export default Collapsable;