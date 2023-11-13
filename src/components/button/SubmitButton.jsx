import { Button, Form } from "antd";
import React, { useState } from "react";

const SubmitButton = ({ form, nameButton }) => {
    const [submittable, setSubmittable] = useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
        const validateFields = async () => {
            try {
                await form.validateFields();
                setSubmittable(true);
            } catch (error) {
                setSubmittable(false);
            }
        };
    
        validateFields();
    }, [values]);
    

    return (
        <Button
            type="primary"
            htmlType="submit"
            disabled={!submittable}
            style={{
                width: '180px',
                height: '57px',
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
