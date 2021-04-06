import React from 'react';
import Table from '../Table/Table';
import PageMap from 'react-pagemap'

import './Canvas.css';

const Canvas = (props) => {
    PageMap.defaultProps = {
        viewport: null,
        styles: {
            container: {
                position: 'fixed',
                bottom: '25px',
                right: '25px',
                width: '205px',
                height: '128px !important',
                zIndex: '100'
            },
            'header,footer,section,article, table': 'white',
            'h1,a': 'rgba(0, 0, 0, 0.10)',
            'h2,h3,h4': 'rgba(0, 0, 0, 0.08)'
        },
        back: 'rgba(0, 0, 0, 0.02)',
        view: '#dddddd',
        drag: 'rgba(0, 0, 0, 0.10)',
        interval: null
    }

    return (
        <main>
            <PageMap />
            <div className={props.sidebar ? props.grid ? "canvas-container move-with-sidebar" : "_canvas-remove-grid canvas-container move-with-sidebar" : props.grid ? "canvas-container" : "_canvas-remove-grid canvas-container"}>

                <Table />
            </div>
        </main>
    );
};

export default Canvas;