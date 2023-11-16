import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

function RelatorioDrawer({ open, setOpen, dadosRelatorio }) {

    const relatorio = dadosRelatorio;

    console.log('11====================================');
    console.log(dadosRelatorio);
    console.log('====================================');

    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };
    return (
        <div>
            <Drawer title="Ver Relatório" width={700} closable={false} onClose={onClose} open={open}>


            </Drawer>
        </div>
    );
}

export default RelatorioDrawer;