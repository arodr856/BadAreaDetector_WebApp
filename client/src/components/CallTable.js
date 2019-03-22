import React from 'react'
import { DataTable } from 'carbon-components-react';
import { connect } from 'react-redux';
import { TableData } from 'carbon-components-react';
import { clearInterval, setTimeout } from 'timers';

var rows;
var addCall = 0;
var isRunning = false;
var simulateOnce = true;


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


class CallTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            refreshValue: this.props.refresh,
            liveToggled: this.props.toggle,
            filteredData: this.props.filteredCalls,
            index: 0
        };

        this.simulateData = this.simulateData.bind(this)

    }

    simulateData(rows) {


        setTimeout(() => {

            if (this.props.toggle && this.state.index < rows.length - 1) {
                this.setState({ index: ++this.state.index })
                console.log('THIS IS THE INDEX: ' + this.state.index)
                console.log('THIS IS THE ROWS LENGTH: ' + rows.length)
                this.simulateData(rows)
            }
            else {
                console.log('Simulation Finished!')
            }

            //if (this.props.toggle && (this.props.filteredCalls == null ? this.props.policeCall.length == length : this.props.filteredCalls.length == length) && (this.props.refresh == refresh)) {
            //    if (index < obj.length) {
            //        console.log('The length is: ' + obj.length + ' ... index is: ' + index)

            //        //console.log('This is ROWS with ID: ' + rows[index].id)  
            //        console.log(row[index].cells.map(cell => (cell.id + ' ' + cell.value))) 
            //        {
            //            <TableRow key={row[index].id}>
            //                {row[index].cells.map(cell => (
            //                    <TableData>
            //                        <div style={this.divStyle}>
            //                            <TableCell key={cell.id}>{cell.value}</TableCell>
            //                        </div>
            //                    </TableData>
            //                ))}
            //            </TableRow>
                        
            //        }
                     

            //        console.log(obj[index++])
            //        this.simulateData(obj, index, refresh, length, row)
            //    }

            //    else {
            //        console.log('Simulation has ended!')
            //    }
            //}
        }, this.props.refresh * 1000)
    }

    displayAllData(obj) {

        var id = 0;

        rows =
            obj.map(({ A, H, L, B, I }) => {
                return (
                    {
                        id: (++id).toString(),
                        Incedent_Number_Key: A,
                        Location_Key: H,
                        Priority_Key: L,
                        Date_Key: B,
                        Call_Type_Key: I,
                        Crime_in_the_Area_Key: 'Low'
                    }
                )
            })
    }

    render() {

        //console.log('This is a toggle: ' + this.props.toggle)
        //console.log('This is a toggle from STATE: ' + this.state.liveToggled)


        if (this.props.filteredCalls == null) {
            console.log('Data is null')
            //console.log('THIS IS TOGGLE NOT FILTERED CALLS: ' + this.props.toggle)
            this.displayAllData(this.props.policeCall)
        }
        else {
            console.log('Display Filter')
            //console.log('THIS IS TOGGLE IN FILTERED CALLS: ' + this.state.liveToggled)
            this.displayAllData(this.props.filteredCalls)
        }


        //IMPLEMENT SIMULATION
        if (this.props.toggle && simulateOnce) {
            simulateOnce = false;
            this.simulateData(rows)
        }
        else if (!this.props.toggle) {
            simulateOnce = true;
            //this.setState({ index : 0 })
        }



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



        return (

            <div className="callDescSection">
                <h1 className="callDescHeader">Call Description</h1>




                    {this.props.toggle ? (
                    <div>
                        <DataTable
                            rows={rows}
                            headers={headers}
                            className='tableStyle'
                            render={({ rows, headers, getHeaderProps, onInputChange }) => (

                                <TableContainer>
                                    <TableToolbar className='searchBar'>
                                        <TableToolbarSearch onChange={onInputChange} />
                                    </TableToolbar>
                                    <Table>
                                        <div className="scrollBar">
                                            <TableHead>
                                                <TableRow header style={{ backgroundColor: 'white' }}>
                                                    {headers.map(header => (
                                                        <TableHeader {...getHeaderProps({ header })} className='headerUnstyle'>
                                                            {header.header}
                                                        </TableHeader>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody className='bodyTable'>




                                                <TableRow key={rows[this.state.index].id}>
                                                    {rows[this.state.index].cells.map(cell => (
                                                            <TableData>
                                                                <div style={divStyle}>
                                                                    {<TableCell key={cell.id}> {cell.value} </TableCell>}
                                                                </div>
                                                            </TableData>
                                                        ))}
                                                    </TableRow>



                                            </TableBody>
                                        </div>
                                    </Table>
                                </TableContainer>
                            )} />
                    </div>

                    )
                    : (
                        <div>
                        <DataTable
                            rows={rows}
                            headers={headers}
                            className='tableStyle'
                            render={({ rows, headers, getHeaderProps, onInputChange }) => (

                                <TableContainer>
                                    <TableToolbar className='searchBar'>
                                        <TableToolbarSearch onChange={onInputChange} />
                                    </TableToolbar>
                                    <Table>
                                        <div className="scrollBar">
                                            <TableHead>
                                                <TableRow header style={{ backgroundColor: 'white' }}>
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










                         
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    policeCall: state.policeCall.policeCall,
    refresh: state.policeCall.refreshValue,
    toggle: state.policeCall.liveToggled,
    filteredCalls: state.policeCall.filteredData
});

export default connect(mapStateToProps)(CallTable);