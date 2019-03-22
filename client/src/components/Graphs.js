import React from 'react'
import { BarGraph, LineGraph } from 'carbon-addons-data-viz-react'
import { connect } from 'react-redux';

var simulateOnce = true;

class Graphs extends React.Component {

    

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            refreshValue: this.props.refresh,
            liveToggled: this.props.toggle,
            filteredData: this.props.filteredCalls
        };

        this.simulate = this.simulate.bind(this)
    }

    simulate() {

            setTimeout(
                () => {

                    if (this.props.toggle) {

                        this.setState({
                            value: Math.ceil(Math.random() * 100),
                            //refreshValue: this.props.refresh,
                            //liveToggled: this.props.toggle,
                            //filteredData: this.props.filteredCalls
                        });
                        console.log('In Graphs: ' + this.props.refresh)
                        console.log('Toggle in Graphs: ' + this.props.toggle)
                        //console.log('This is filtered Data: ' + this.state.filteredData)
                        this.simulate()
                    }
                },
                this.props.refresh * 1000);
    }

    



    render(props){



        var januaryAL = []
        createArrayListInstances(januaryAL)
        var februaryAL = []
        createArrayListInstances(februaryAL)
        var marchAL = []
        createArrayListInstances(marchAL)
        var aprilAL = []
        createArrayListInstances(aprilAL)
        var mayAL = []
        createArrayListInstances(mayAL)
        var juneAL = []
        createArrayListInstances(juneAL)
        var julyAL = []
        createArrayListInstances(julyAL)
        var augustAL = []
        createArrayListInstances(augustAL)



        function createArrayListInstances(monthMap) {
            monthMap.push(1);
            monthMap[1] = 0
            monthMap.push(2);
            monthMap[2] = 0
            monthMap.push(3);
            monthMap[3] = 0
            monthMap.push(4);
            monthMap[4] = 0
        }

        //if (!this.state.liveToggled) {
        //    this.componentDidMount()
        //}

        //console.log("Test2")


        

        if (this.props.toggle && simulateOnce) {
            simulateOnce = false;
            console.log('Simulate once is: ' + simulateOnce);
            this.simulate()
        }
        else if (!this.props.toggle) {
            simulateOnce = true;
        }
        

        return (
            <div className="row">



                {this.props.policeCall.map(({ B, L }) => {
                    //January
                    if (B.substring(0, 1) === "1") {
                        if (L === '1') {
                            januaryAL[1] = ++januaryAL[1]
                        }
                        else if (L === '2') {
                            januaryAL[2] = ++januaryAL[2]
                        }
                        else if (L === '3') {
                            januaryAL[3] = ++januaryAL[3]
                        }
                        else if (L === '4') {
                            januaryAL[4] = ++januaryAL[4]
                        }
                    }
                    //February
                    else if (B.substring(0, 1) === "2") {
                        if (L === '1') {
                            februaryAL[1] = ++februaryAL[1]
                        }
                        else if (L === '2') {
                            februaryAL[2] = ++februaryAL[2]
                        }
                        else if (L === '3') {
                            februaryAL[3] = ++februaryAL[3]
                        }
                        else if (L === '4') {
                            februaryAL[4] = ++februaryAL[4]
                        }
                    }
                    //March
                    else if (B.substring(0, 1) === "3") {
                        if (L === '1') {
                            marchAL[1] = ++marchAL[1]
                        }
                        else if (L === '2') {
                            marchAL[2] = ++marchAL[2]
                        }
                        else if (L === '3') {
                            marchAL[3] = ++marchAL[3]
                        }
                        else if (L === '4') {
                            marchAL[4] = ++marchAL[4]
                        }
                    }
                    //April
                    else if (B.substring(0, 1) === "4") {
                        if (L === '1') {
                            aprilAL[1] = ++aprilAL[1]
                        }
                        else if (L === '2') {
                            aprilAL[2] = ++aprilAL[2]
                        }
                        else if (L === '3') {
                            aprilAL[3] = ++aprilAL[3]
                        }
                        else if (L === '4') {
                            aprilAL[4] = ++aprilAL[4]
                        }
                    }
                    //May
                    else if (B.substring(0, 1) === "5") {
                        if (L === '1') {
                            mayAL[1] = ++mayAL[1]
                        }
                        else if (L === '2') {
                            mayAL[2] = ++mayAL[2]
                        }
                        else if (L === '3') {
                            mayAL[3] = ++mayAL[3]
                        }
                        else if (L === '4') {
                            mayAL[4] = ++mayAL[4]
                        }
                    }
                    //June
                    else if (B.substring(0, 1) === "6") {
                        if (L === '1') {
                            juneAL[1] = ++juneAL[1]
                        }
                        else if (L === '2') {
                            juneAL[2] = ++juneAL[2]
                        }
                        else if (L === '3') {
                            juneAL[3] = ++juneAL[3]
                        }
                        else if (L === '4') {
                            juneAL[4] = ++juneAL[4]
                        }
                    }
                    //July
                    else if (B.substring(0, 1) === "7") {
                        if (L === '1') {
                            julyAL[1] = ++julyAL[1]
                        }
                        else if (L === '2') {
                            julyAL[2] = ++julyAL[2]
                        }
                        else if (L === '3') {
                            julyAL[3] = ++julyAL[3]
                        }
                        else if (L === '4') {
                            julyAL[4] = ++julyAL[4]
                        }
                    }
                    //August
                    else if (B.substring(0, 1) === "8") {
                        if (L === '1') {
                            augustAL[1] = ++augustAL[1]
                        }
                        else if (L === '2') {
                            augustAL[2] = ++augustAL[2]
                        }
                        else if (L === '3') {
                            augustAL[3] = ++augustAL[3]
                        }
                        else if (L === '4') {
                            augustAL[4] = ++augustAL[4]
                        }
                    }
                })}


                <div class="column tableleft">
                    <h1 className="graphsHeader" style={{ color: 'aliceblue', paddingTop: '3%' }}>Priority Call Stats </h1> {/* Remove Padding if Button moves location */}

                    <div style={{ color: 'black' }}>
                        <BarGraph
                            data={[
                                [[this.state.value, januaryAL[2], januaryAL[3], januaryAL[4]], "January"],
                                [[februaryAL[1], februaryAL[2], februaryAL[3], februaryAL[4]], "February"],
                                [[marchAL[1], marchAL[2], marchAL[3], marchAL[4]], "March"],
                                [[aprilAL[1], aprilAL[2], aprilAL[3], aprilAL[4]], "April"],
                                [[mayAL[1], mayAL[2], mayAL[3], mayAL[4]], "May"],
                                [[juneAL[1], juneAL[2], juneAL[3], juneAL[4]], "June"],
                                [[julyAL[1], julyAL[2], julyAL[3], julyAL[4]], "July"],
                                [[augustAL[1], augustAL[2], augustAL[3], augustAL[4]], "August"]
                            ]}
                            width={1010}
                            height={210}
                            id="graph"
                            containerId="containerId"
                            xAxisLabel={"Months"}
                            yAxisLabel={"Calls"}
                            emptyText="There is no data. Please start a simulation to display data"
                            color={['#00a68f', '#3b1a40', '#265077', '#73C2FB']}
                            showTooltip={true}

                        />
                    </div>
                </div>



                <div class="column tableright">
                    <h1 className="graphsHeader" style={{ color: 'aliceblue' }}>Incoming call stats</h1>

                    <div style={{ color: 'black' }}>
                        <LineGraph
                            data={[[[(this.state.value + januaryAL[2] + januaryAL[3] + januaryAL[4])], 1], [[(februaryAL[1] + februaryAL[2] + februaryAL[3] + februaryAL[4])], 2], [[(marchAL[1] + marchAL[2] + marchAL[3] + marchAL[4])], 3], [[(aprilAL[1] + aprilAL[2] + aprilAL[3] + aprilAL[4])], 4], [[(mayAL[1] + mayAL[2] + mayAL[3] + mayAL[4])], 5], [[(juneAL[1] + juneAL[2] + juneAL[3] + juneAL[4])], 6], [[(julyAL[1] + julyAL[2] + julyAL[3] + julyAL[4])], 7], [[(augustAL[1] + augustAL[2] + augustAL[3] + augustAL[4])], 8]]}
                            width={820}
                            height={210}
                            xAxisLabel={"Time"}
                            yAxisLabel={"Calls"}
                            emptyText={"There is no data. Please start a simulation to display data"}
                            isXTime={true}
                            isUTC={false}
                            timeFormat={"%m"}
                        />
                    </div>
                </div>
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

export default connect(mapStateToProps)(Graphs);
