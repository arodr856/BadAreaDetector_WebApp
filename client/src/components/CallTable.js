import React from 'react'
import { DataTable } from 'carbon-components-react';
import { connect } from 'react-redux';
import { TableData } from 'carbon-components-react';



const {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableHeader,
    TableToolbarSearch,
    TableToolbar
} = DataTable;


function CallTable(props) {

    var id = 0;

    const rows = 
        props.policeCall.map(({ A, H, L, B, O }) => {
            return (
                {
                id: (++id).toString(),
                Incedent_Number_Key: A,
                Location_Key: H,
                Priority_Key: L,
                Date_Key: B,
                Call_Type_Key: O,
                Crime_in_the_Area_Key: 'Low'
            }
        )
    })
    

    console.log(rows[0])
    

    const headers = [
        {
            key: 'Incedent_Number_Key',
            header: 'Incedent Number'
        },

        {
            key: 'Location_Key',
            header: 'Location'
        },

        {
            key: 'Priority_Key',
            header: 'Priority'
        },

        {
            key: 'Date_Key',
            header: 'Date'
        },

        {
            key: 'Call_Type_Key',
            header: 'Call Type'
        },

        {
            key: 'Crime_in_the_Area_Key',
            header: 'Crime Level'
        },
    ]

    var divStyle = {
        color: 'white',
        padding: '2%',
    };



    return(

        <div className="callDescSection">
            <h1 className="callDescHeader">Call Description</h1>

            <DataTable
                rows={rows}
                headers={headers}
                className='tableStyle'
                render={({ rows, headers, getHeaderProps, onInputChange }) => (
                    
                        <TableContainer>
                        <TableToolbar className='searchBar'>
                            <TableToolbarSearch onChange={onInputChange}  />
                        </TableToolbar>
                        <Table>
                            <div className="scrollBar">
                                <TableHead>
                                    <TableRow header style={{backgroundColor: 'white'}}>
                                        {headers.map(header => (
                                            <TableHeader {...getHeaderProps({ header })} className='headerUnstyle'>
                                                {header.header}
                                            </TableHeader>
                                            ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody className='bodyTable'>
                                    {rows.map(row => (
                                        <TableRow key={row.id}>

                                            {row.cells.map(cell => (
                                                <TableData>
                                                    <div style={divStyle}>
                                                        {<TableCell key={cell.id}> {cell.value} </TableCell>}
                                                        
                                                    </div>
                                                </TableData>
                                                ))}
                                            
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </div>
                            </Table>
                        </TableContainer>
                )} />
        </div>
    )
}


const mapStateToProps = (state) => ({
    policeCall: state.policeCall.policeCall
});

export default connect(mapStateToProps)(CallTable);
