import React from "react";
import { Button, Popover, Space } from 'antd';
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

function PopoverNotifications({ }) {

    return (
        <Space wrap>
            <Popover content={content} title="Title" trigger="focus">
                <Button>Focus me</Button>
            </Popover>
        </Space>
    )

}

export default PopoverNotifications;