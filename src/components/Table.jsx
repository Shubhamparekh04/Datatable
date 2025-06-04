import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const Table = ({ usersList, handleDelete, handleEdit }) => {
    const [textFilter, setTextFilter] = useState("");

    const filteredData = usersList.filter(user => user.email.toLowerCase().includes(textFilter.toLowerCase()));

    const columns = [
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Password',
            selector: row => row.password,
            sortable: true
        },
        {
            name: 'Action',
            selector: (row) => (
                <>
                    <button
                        className="btn btn-danger me-1"
                        onClick={() => handleDelete(row.id)}
                    >
                        Delete
                    </button>

                    <button
                        className="btn btn-warning me-1"
                        onClick={() => handleEdit(row.id)}
                    >
                        Edit
                    </button>
                </>
            ),
            sortable: false
        }
    ];

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">

                        <div className=" mt-2 p-3 d-flex justify-content-between">
                        <span>Search:</span>
                            <input

                                className="form-control w-25"
                                type="search"
                                placeholder="Search users..."
                                aria-label="Search"
                                onChange={(e) => setTextFilter(e.target.value)}
                            />
                        </div>
                        <DataTable
                            title="User List"
                            columns={columns}
                            data={filteredData} // ⬅️ Filtered data passed here
                            pagination
                            selectableRows
                            highlightOnHover
                            striped
                            fixedHeader
                            fixedHeaderScrollHeight="300px"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
