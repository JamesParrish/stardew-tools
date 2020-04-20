import * as React from 'react';
import { Fish } from './Models/Fish';
import { Data } from './Models/Data';
import Filters from './Filters'
import Results from './Results'
import { getFishes } from './FishImporter';

interface Props {
}

interface State {
    fishes: Fish[];
    season: String;
    weather: String;
    bundle: String;
}

class FishTools extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);

        //var data: Fish = require("./data/Fish.json");
        const fishes = getFishes();

        console.log("There are " + fishes.length + " fish");

        this.state = {
            fishes: fishes,
            season: '',
            weather: '',
            bundle: ''
        };

        console.log("There are " + this.state.fishes.length + " fish");

        this.setSeasonFilter = this.setSeasonFilter.bind(this);
    }

    setSeasonFilter(e:React.FormEvent<HTMLSelectElement>) {
        this.setState({
            season: e.currentTarget.value,
        });
    }

    render(): Object {
        return (
            <div>
                <h2>Fish Tools</h2>
                {(!this.state.fishes || this.state.fishes.length === 0) && <div>No Fish</div>}
                {this.state.fishes && this.state.fishes.length > 0 &&
                    <div>
                        There are {this.state.fishes.length} fish
                        <Filters setSeasonFilter={this.setSeasonFilter}/>
                        <div>Filters are: {this.state.season} / {this.state.weather} / {this.state.bundle}</div>
                        <Results fishes={this.state.fishes}
                            season={this.state.season}
                            weather={this.state.weather}
                            bundle={this.state.bundle}/>
                    </div>
                }
            </div>
        )
    }
}

export default FishTools;