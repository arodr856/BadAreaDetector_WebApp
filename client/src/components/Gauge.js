import React from 'react'
import { GaugeGraph } from 'carbon-addons-data-viz-react'

class Gauge extends React.Component {

    render(props) {

        return (

            <div className={this.props.classProperties.className1}>
                <h2 className={this.props.classProperties.className2}>{this.props.other.title}</h2>
                <div>
                    {/*console.log("From inside Gauge: " + this.props.gaugeSpecs.amount)*/}
                    <GaugeGraph id={this.props.gaugeSpecs.id} size={this.props.gaugeSpecs.size} className={this.props.gaugeSpecs.className} amount={this.props.gaugeSpecs.amount} valueText={this.props.gaugeSpecs.valueText} labelText={this.props.gaugeSpecs.labelText} tooltipId={this.props.gaugeSpecs.tooltipId} total={100}/>
                </div>
            </div>

        )
    }
}

export default Gauge