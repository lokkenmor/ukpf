import './RaceInformationSection.css';
import RaceInfoInput from '../RaceInfoInput/RaceInfoInput';
import React, { Component } from 'react';

export default class RaceInformationSection extends Component {
    constructor() {
        super();

        this.moveSectionUp = this.moveSectionUp.bind(this);
        this.moveSectionDown = this.moveSectionDown.bind(this);
    }

    moveSectionUp() {
        this.props.moveSectionUp('raceInfo');
    }

    moveSectionDown() {
        this.props.moveSectionDown('raceInfo');
    }

    render() {
        return (
            <div className="raceInformationSection">
                <div>
                    <button onClick={this.moveSectionUp}>up</button>
                    <button onClick={this.moveSectionDown}>down</button>
                </div>
                <div>
                    <h3 className="raceInformationHeader">race information</h3>
                    <div className="raceInformationBody">
                        <RaceInfoInput label="name" value={this.props.raceInformation.name.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                        <RaceInfoInput label="date" value={this.props.raceInformation.date.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                        <RaceInfoInput label="distance" value={this.props.raceInformation.distance.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                        <RaceInfoInput label="location" value={this.props.raceInformation.location.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                        <RaceInfoInput label="website" value={this.props.raceInformation.website.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                    </div>
                </div>
            </div>
        );
    }
}