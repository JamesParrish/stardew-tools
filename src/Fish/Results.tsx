import * as React from 'react';
import { Fish } from './Models/Fish';
import ResultRow from './ResultRow'

interface Props {
    fishes: Fish[]
    season: string;
    weather: string;
    bundle: string;
}

interface State {
}

class Results extends React.Component<Props, State> {
    isFishValid(fish: Fish): boolean {
        return this.isFishSeasonValid(fish) &&
            this.isFishWeatherValid(fish) &&
            this.isFishBundleValid(fish);
    }

    isFishSeasonValid(fish: Fish): boolean {
        return !this.props.season || (!!fish.locations && !!fish.locations.find(l => l.seasons.includes(this.props.season)));
    }

    isFishWeatherValid(fish: Fish): boolean {
        return !this.props.weather ||
            (this.props.weather === "Rainy" && (fish.weather === "both" || fish.weather === "rainy")) ||
            (this.props.weather === "Sunny" && (fish.weather === "both" || fish.weather === "sunny"));
    }

    isFishBundleValid(fish: Fish): boolean {
        return true;
    }

    render() {
        const fishes = this.props.fishes;

        const rows: JSX.Element[] = [];

        this.props.fishes.forEach((fish) =>
        {
            if (this.isFishValid(fish))
            {
                rows.push(
                    <ResultRow fish={fish}/>
                );
            }
        });

      return (
        <div>
            <h3>Results</h3>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Season</td>
                        <td>Weather</td>
                        <td>Time</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
      );
    }
  }

  export default Results;