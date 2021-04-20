import React from 'react';
import { Tabs } from 'antd';
import { PictureFilled, FontSizeOutlined } from '@ant-design/icons';
import { useEditor } from "@craftjs/core";

import { Text, Image } from '../Elements';


const { TabPane } = Tabs;

const Sider = () => {
    const { connectors } = useEditor(
        (state, query) => ({
            enabled: state.options.enabled,
            canUndo: query.history.canUndo(),
            canRedo: query.history.canRedo(),
        })
    );

    return (
        <div className="sider-wrapper">
            <Tabs centered>
                <TabPane tab="SETTINGS" key="1">
                    <div className="section-items-wrapper">
                        <div className="section-item" ref={ref=> connectors.create(ref, <Image />)}>
                            <div className="section-icon">
                                <PictureFilled />
                            </div>
                            Image
                        </div>
                        <div className="section-item" ref={ref => connectors.create(ref, <Text text="some text..." />)}>
                            <div className="section-icon">
                                <FontSizeOutlined />
                            </div>
                            Heading
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="LAYOUT" key="2"></TabPane>
                <TabPane tab="BUILD" key="3"></TabPane>
            </Tabs>
        </div>
    )
}

export default Sider;
