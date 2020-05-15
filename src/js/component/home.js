import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selected: ""
			//your state properties here
		};
	}
	render() {
		var selected1, selected2, selected3;
		if (this.state.selected === "red") {
			selected1 = "active";
		} else if (this.state.selected === "orange") {
			selected2 = "active";
		} else if (this.state.selected === "green") {
			selected3 = "active";
		}
		return (
			//return your html here
			<div className="trafficLight">
				<div className="base">
					<div className="base2" />
				</div>
				<div className="bodyTrafficLight">
					<div
						className={"firstLight " + selected1}
						onClick={() => this.setState({ selected: "red" })}
					/>
					<div
						className={"secondLight " + selected2}
						onClick={() => this.setState({ selected: "orange" })}
					/>
					<div
						className={"thirdLight " + selected3}
						onClick={() => this.setState({ selected: "green" })}
					/>
				</div>
			</div>
		);
	}
}
