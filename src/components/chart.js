//ask if this need to be class or functional component 
//does this component need state or no? if no, then it is a functional component 
import _ from 'lodash';
import React from 'react'; 
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

//data function 
function average(data) {
	return _.round(_.sum(data)/data.length);
}
;

export default (props) => {
	return (
		<div> 
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} /> 
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div> {average(props.data)} {props.unit}</div>
		</div>


	)

}