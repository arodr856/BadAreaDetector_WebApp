import React from 'react'
import { DataTable } from 'carbon-components-react';
import { connect } from 'react-redux';
import { TableData } from 'carbon-components-react';
import { clearInterval } from 'timers';

var rows;
var addCall = 0;
var isRunning = false;

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
            filteredData: this.props.filteredCalls
        };

        this.simulateData = this.simulateData.bind(this)
        
    }

    simulateData(obj, index, refresh, length) {

        
        setTimeout(() => {
            if (this.props.toggle && (this.props.filteredCalls == null ? this.props.policeCall.length == length : this.props.filteredCalls.length == length) && (this.props.refresh == refresh)) {
                    if (index < obj.length) {
                        console.log('The length is: ' + obj.length + ' ... index is: ' + index)
                        console.log(obj[index++])
                        this.simulateData(obj, index, refresh, length)
                    }

                    else {
                        console.log('Simulation has ended!')
                    }
                }
            }, refresh * 1000)
        
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

                                        
                                        {this.props.toggle ? (
                                            this.simulateData(this.props.filteredCalls == null ? this.props.policeCall : this.props.filteredCalls, 0, this.props.refresh, this.props.filteredCalls == null ? this.props.policeCall.length : this.props.filteredCalls.length)
                                            )
                                            : (rows.map(row => (
                                                <TableRow key={row.id}>
                                                    {row.cells.map(cell => (
                                                        <TableData>
                                                            <div style={divStyle}>
                                                                {<TableCell key={cell.id}> {cell.value} </TableCell>}
                                                            </div>
                                                        </TableData>
                                                    ))}

                                                </TableRow>
                                            )))
                                        }
                                    </TableBody>
                                </div>
                            </Table>
                        </TableContainer>
                    )} />
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