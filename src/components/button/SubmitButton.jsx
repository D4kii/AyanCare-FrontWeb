import { Button, Form } from "antd";
import React, { useState } from "react";

const SubmitButton = ({ form, nameButton }) => {
    const [submittable, setSubmittable] = useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(
                () => {
                    setSubmittable(true);
                },
                () => {
                    setSubmittable(false);
                },
            );
    }, [values]);
    return (
        <Button
            type="primary"
            htmlType="submit"
            disabled={!submittable}

            style={{
                width: '180px',
                height:'57px',
                background: '#35225F',
                color: '#FFF',
                fontFamily: 'Poppins'
            }}
        >
            {nameButton}
        </Button>
    );
};

export default SubmitButton;