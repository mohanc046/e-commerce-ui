import { LoadingOutlined } from '@ant-design/icons';

import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 20, color: "white" }} spin />;

export const Spinner = () => <span style={{ marginRight: "10px" }}><Spin indicator={antIcon} /></span>;