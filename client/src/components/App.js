
import React, {Component}from 'react'
import './css components/App.css'
import Header from './Header'
import Graphs from './Graphs'
import Visualizers from './Visualizers'
import MapContainer from './Map'
import {connect} from 'react-redux';
import {getPoliceCalls} from '../actions/policecallActions';
import PropTypes from 'prop-types';


class App extends Component{

    componentDidMount(){
        this.props.getPoliceCalls();
    }



    render(){
        const policeCall = this.props.policeCall;
        console.log("in render" , policeCall);
        return (
            <div>
                <Header />
                <Graphs />
                <Visualizers />
                <div class="column map">
                    <MapContainer/>
                </div>
                <br />
            </div>
        )
    }
}

App.PropTypes = {
    getPoliceCalls: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    policeCall: state.policeCall.policeCall
});

// export default App
export default connect(mapStateToProps, {getPoliceCalls})(App);