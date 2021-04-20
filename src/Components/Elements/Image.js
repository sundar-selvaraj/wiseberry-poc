import React from 'react';
import { useNode } from "@craftjs/core";
import { PictureFilled } from '@ant-design/icons';

const Image = ({ url }) => {
    const {
        connectors: { connect, drag },
    } = useNode();
    return (
        <div ref={(ref) => connect(drag(ref))}>
            {url
                ? <img src={url} alt="wrapper" />
                : <div className="image-content-wrapper">
                    <PictureFilled className="image-content" />
                </div>
            }
        </div>
    );
}

export default Image;
