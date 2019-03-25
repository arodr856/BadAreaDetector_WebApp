import React from 'react'
import { Slider } from 'carbon-components-react'
import { Toggle, DatePicker, DatePickerInput, ModalWrapper } from 'carbon-components-react'
import { iconMenu } from 'carbon-icons'
import { connect } from 'react-redux';
import { toggleLive, updateRefresh, getPoliceCalls, filteredData } from '../actions/policecallActions';

var isToggledAlready = true;
var toggleInput = false;
var toggleRefresh = 5;


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            refreshValue: 5,
            liveToggled: false,
            startDate: '1/1/2017',
            endDate: '8/12/2017',
            filteredData: null
        };

        this.sliderHandler = this.sliderHandler.bind(this)
        this.toggleHandler = this.toggleHandler.bind(this)
        this.dateHandler = this.dateHandler.bind(this)
        this.filterDates = this.filterDates.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    componentDidMount() {
        setTimeout(
            () => {
                if (toggleInput) {
                    console.log('Refresh... Rate: ' + toggleRefresh + ' ...Boolean is: ' + toggleInput)
                    isToggledAlready = false;
                    this.componentDidMount()
                }
            },
            toggleRefresh * 1000);
    }

    sliderHandler(value) {
        this.setState({ refreshValue: value.value })
    }

    toggleHandler(toggled) {
        //this.props.toggleLive(toggled); // in app state
        if (toggled) {
            //console.log('Live Feed: ' + toggled)
            this.setState({ liveToggled: true })
        }
        else {
            //console.log('Live Feed:' + toggled)
            this.setState({ liveToggled: false })
        }
    }

    dateHandler(value) {
            if (value.length > 1) {

                console.log('THE DATE IS CHOSEN: ' + value[0])
                var date = new Date(value[0])
                var startDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' 00:00'

                
                var date2 = new Date(value[1])
                var endDate = (date2.getMonth() + 1) + '/' + date2.getDate() + '/' + date2.getFullYear() + ' 23:59'

                //console.log('Start date: ' + startDate)
                //console.log('End date: ' + endDate)

                this.setState({ startDate: startDate, endDate: endDate });

                this.filterDates()
            }
    }

    filterDates() {
        console.log('FilterDates Function Start: ' + this.state.startDate)
        console.log('FilterDates Function EndDate: ' + this.state.endDate)
        var start = this.state.startDate
        var end = this.state.endDate

        //console.log('This is a date: ' + new Date('5/3/2017'))

        //var filteredObj =
        //console.log('Police Call Object: ' + this.props.policeCall)
        //console.log(obj[0].B)

        var filteredObj = this.props.policeCall.filter(function (obj) {
            //console.log('String is: ' + obj.B + ' Substring is: ' + obj.B.substring(2,4))
            return obj.B >= start && obj.B <= end
        })

        filteredObj.sort(function (a, b) {
            return new Date(a.B) - new Date(b.B);
        });

        this.setState({ filteredData: filteredObj })
        //console.log('THIS IS THE DATE AFTER: ' + this.state.filteredData.length)
        //this.props.filteredData(filteredObj)
    }

    submitHandler() {
        console.log('Submited...')
        this.props.toggleLive(this.state.liveToggled);
        this.props.filteredData(this.state.filteredData);
        this.props.updateRefresh(this.state.refreshValue);

        toggleInput = this.state.liveToggled
        toggleRefresh = this.state.refreshValue
        
        if (!toggleInput) {
            isToggledAlready = true;
        }

        if (this.state.liveToggled && isToggledAlready) {
            this.componentDidMount()
        }
    }



    render(props) {
        
        return (

            <div>
                <div className='header'>
                    <h1>The Bad Area Detector System </h1>
                </div>

                <div className='Menu'>

                    <ModalWrapper
                        renderTriggerButtonIcon={true}
                        buttonTriggerText="Menu"
                        handleSubmit={this.submitHandler}
                    >
                        <div style={{ textAlign: "center" }}>
                            Menu
                        </div>

                        <hr />
                        <br />
                        Simulation
                        <Toggle
                            defaultToggled
                            id='toggler'
                            toggled={this.state.liveToggled}
                            onToggle={this.toggleHandler}
                            
                        />

                        <hr />
                        <br />
                        Refresh Rate (Seconds)
                        <Slider
                            value={5}
                            min={1}
                            max={10}
                            minLabel=''
                            maxLabel=''
                            labelText=''
                            onChange={this.sliderHandler}
                        />

                        <hr />
                        <br />
                        Time Period
                        <br />
                        <br />
                        <DatePicker
                            minDate='1/1/2017'
                            maxDate='8/12/2017'
                            datePickerType='range'
                            dateFormat='m/d/Y'
                            iconDescription='Select between a range of dates'
                            onChange={this.dateHandler}
                        >

                            <DatePickerInput
                                id="date-picker-input-id-start"
                                labelText='Start Date'
                                placeHolder='mm/dd/yyyy'
                            />


                            <DatePickerInput
                                id="date-picker-input-id-end"
                                labelText='End Date'
                                placeHolder='mm/dd/yyyy'
                            />
                        />
                        </DatePicker>
                    </ModalWrapper>
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

export default connect(mapStateToProps, { getPoliceCalls, toggleLive, updateRefresh, filteredData})(Header)