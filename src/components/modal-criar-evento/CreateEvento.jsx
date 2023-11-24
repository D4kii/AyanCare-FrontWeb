import { Form, Modal } from "antd";
import React from "react";

function ModalCreateEvento({setOpen, open}) {
    
    const onCancelModal = () =>{
        setOpen(false)
    }

    return ( 
        <Modal
        open={open}
        onCancel={onCancelModal}
        footer={null}
        >
            <Form>
                
            </Form>
        </Modal>
     );
}

export default ModalCreateEvento;