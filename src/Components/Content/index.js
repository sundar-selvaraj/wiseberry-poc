import React from 'react';
import { Frame, Element } from "@craftjs/core";

import { Container } from '../Elements';



const Content = () => {
  return (
    <div className="content-wrapper">
      <Frame>
        <Element
          is={Container}
          canvas
          width="800px"
          background={{ r: 255, g: 255, b: 255, a: 1 }}
          margin={[30, 10, 30, 10]}
        >
        </Element>
      </Frame>
    </div>
  )
}

export default Content;
