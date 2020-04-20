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
    season: string;
    weather: string;
    bundle: string;
}

class FishTools extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);

        const fishes = getFishes();

        this.state = {
            fishes: fishes,
            season: '',
            weather: '',
            bundle: ''
        };

        this.setSeasonFilter = this.setSeasonFilter.bind(this);
        this.setWeatherFilter = this.setWeatherFilter.bind(this);
        this.setBundleFilter = this.setBundleFilter.bind(this);
    }

    setSeasonFilter(e:React.FormEvent<HTMLSelectElement>) {
        this.setState({
            season: e.currentTarget.value,
        });
    }

    setWeatherFilter(e:React.FormEvent<HTMLSelectElement>) {
        this.setState({
            weather: e.currentTarget.value,
        });
    }

    setBundleFilter(e:React.FormEvent<HTMLSelectElement>) {
        this.setState({
            bundle: e.currentTarget.value,
        });
    }

    render(): Object {
        return (
            <div>
                <h2>Fish Tools</h2>
                {(!this.state.fishes || this.state.fishes.length === 0) && <div>No Fish</div>}
                {this.state.fishes && this.state.fishes.length > 0 &&
                    <div>
                        <Filters season={this.state.season}
                            weather={this.state.weather}
                            bundle={this.state.bundle}
                            setSeasonFilter={this.setSeasonFilter}
                            setWeatherFilter={this.setWeatherFilter}
                            setBundleFilter={this.setBundleFilter}/>
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