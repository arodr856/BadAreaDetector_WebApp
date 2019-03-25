import React from 'react'
import { DataTable } from 'carbon-components-react';
import { connect } from 'react-redux';
import { TableData } from 'carbon-components-react';
import { clearInterval, setTimeout } from 'timers';

var rows;
var addCall = 0;
var simulateOnce = true;
var simulateData = '';
var mapVal = 0;

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

    
    simulateData(rows, refresh, length) {
        //console.log('LAUNCHING!')
        console.log('...Refresh is: ' + refresh + '...length: ' + length + '...Addcall is: ' + addCall)


        setTimeout(() => {

            if (this.props.toggle && this.props.refresh == refresh && (this.props.filteredCalls == null ? this.props.policeCall.length == length : this.props.filteredCalls.length == length)) {
                if (addCall < rows.length - 1) {
                    ++addCall
                    mapVal = 0
                    this.forceUpdate()
                    this.simulateData(rows, refresh, length)
                }
                else { //case: Simulation is finished, but user selects other filtered date
                    addCall = 0;
                    simulateOnce = true;
                    console.log('Simulation finished!!!')
                }
            }
            else {
                if (this.props.toggle) { //case: Simulation is continuing, but user changes data
                    addCall = 0
                    console.log('DATA CHANGED')
                    this.forceUpdate()
                    this.simulateData(this.props.filteredCalls == null ? this.displayAllData(this.props.policeCall) : this.displayAllData(this.props.filteredCalls), this.props.refresh, this.props.filteredCalls == null ? this.props.policeCall.length : this.props.filteredCalls.length)
                }
                else {
                    console.log('Simulation Finished!')
                }
            }
            
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
        return rows
    }

    render() {

        //Setting Initial "rows" value for non simulated rendering
        if (this.props.filteredCalls == null && simulateOnce) {
            this.displayAllData(this.props.policeCall)
        }
        else if (this.props.filteredCalls != null && simulateOnce) {
            this.displayAllData(this.props.filteredCalls)
        }
        
            
        //IMPLEMENT SIMULATION
        if (this.props.toggle && simulateOnce) {
            simulateOnce = false;
            this.simulateData(this.props.filteredCalls == null ? this.displayAllData(this.props.policeCall) : this.displayAllData(this.props.filteredCalls), this.props.refresh, this.props.filteredCalls == null ? this.props.policeCall.length : this.props.filteredCalls.length) //Object, Refresh, length
        }

        else if (!this.props.toggle) { // RESET VALUES WHEN TOGGLE IS TRIGGERED OFF
            simulateOnce = true;
            addCall = 0
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
            color: '#E2E8ED',
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
                            render={({rows, headers, getHeaderProps, onInputChange }) => (

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
                                                    mapVal < addCall ? (
                                                        ++mapVal,
                                                        <TableRow key={row.id}>
                                                            {row.cells.map(cell => (
                                                            <TableData>
                                                                <div style={divStyle}>
                                                                    {<TableCell key={cell.id}> 
                                                                        {cell.value}
                                                                    </TableCell>}
                                                                </div>
                                                            </TableData>))}
                                                        </TableRow>
                                                    )
                                                        : (
                                                            ''
                                                            )
                                                ))}

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