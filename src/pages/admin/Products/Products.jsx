import React from 'react';
import Table from 'components/Table/Table';
import WithLayoutpages from 'hoc/WithLayoutPages';

const Products = () => {
    return (
        <div>
            <Table />
        </div>
    );
}

export default WithLayoutpages(Products, 'admin');
