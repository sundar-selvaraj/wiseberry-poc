import { Row, Col } from 'antd';
import { Editor } from "@craftjs/core";

import Sider from './Components/Sider';
import Content from './Components/Content';
import { Text } from './Components/Elements';

function App() {
  return (
    <div>
      <Editor
        resolver={{Text}}
      >
        <Row>
          <Col flex={1}>
            <Sider />
          </Col>
          <Col flex={5}>
            <Content />
          </Col>
        </Row>
      </Editor>
    </div>
  );
}

export default App;
