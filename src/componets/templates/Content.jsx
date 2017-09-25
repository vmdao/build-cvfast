import React from 'react'
import Data from '../Data'

function createContent(element) {
    console.log(123, element)
    return React.createElement(
        element.type,
        element.props,
        (element.children || [])
            .map(c => {
                if (c.type !== 'template') {
                    console.log(c)
                    return createContent(c)
                }
            })

    );
}

const Content = (props) => (
    <div className="cv-content1">
        {createContent(Data)}
    </div>
)

export default Content