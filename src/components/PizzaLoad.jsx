import React from 'react'
import ContentLoader from 'react-content-loader'

function PizzaLoad() {
    return (
        <ContentLoader 
            speed={2}
            width={260}
            height={450}
            viewBox="0 0 260 450"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="2" y="351" rx="3" ry="3" width="253" height="9" /> 
            <circle cx="126" cy="127" r="125" /> 
            <rect x="2" y="373" rx="3" ry="3" width="253" height="9" /> 
            <rect x="2" y="397" rx="3" ry="3" width="253" height="9" /> 
            <rect x="-4" y="288" rx="3" ry="3" width="253" height="25" />
        </ContentLoader>
    )
}

export default PizzaLoad;
