import * as React from 'react';
import { Fish } from './Models/Fish';
import ResultRow from './ResultRow'

interface Props {
    fishes: Fish[]
    location: string;
    season: string;
    weather: string;
    bundle: string;
}

interface State {
}

class Results extends React.Component<Props, State> {
    isFishValid(fish: Fish): boolean {
        return this.isFishLocationValid(fish) &&
            this.isFishSeasonValid(fish) &&
            this.isFishWeatherValid(fish) &&
            this.isFishBundleValid(fish);
    }

    isFishLocationValid(fish: Fish): boolean {
        return !this.props.location || (!!fish.locations && !!fish.locations.find(l => l.name === this.props.location));
    }

    isFishSeasonValid(fish: Fish): boolean {
        if (!this.props.season) { return true; }

        if (!fish.locations) { return false; }

        if (this.props.season.indexOf('(') === -1) {
            return !!fish.locations.find(l => l.seasons.includes(this.props.season));
        }

        var seasons = this.props.season.match(/(.*) \(Not (.*)\)/);

        if (seasons === null) { return true; }

        return !!fish.locations.find(l => l.seasons.includes(seasons[1])) &&
            !fish.locations.find(l => l.seasons.includes(seasons[2]));
    }

    isFishWeatherValid(fish: Fish): boolean {
        return !this.props.weather ||
            (this.props.weather === "Rainy" && (fish.weather === "both" || fish.weather === "rainy")) ||
            (this.props.weather === "Sunny" && (fish.weather === "both" || fish.weather === "sunny")) ||
            (this.props.weather === "Rainy Only" && fish.weather === "rainy") ||
            (this.props.weather === "Sunny Only" && fish.weather === "sunny");
    }

    isFishBundleValid(fish: Fish): boolean {
        return !this.props.bundle ||
            this.props.bundle === "Any" && fish.bundles.length > 0 ||
            fish.bundles.includes(this.props.bundle);
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
        <table className="Results">
            <thead>
                <tr className="Results-Header">
                    <td>Name</td>
                    <td>Location(s)</td>
                    <td>Season(s)</td>
                    <td>Weather</td>
                    <td>Times</td>
                    <td>Bundle(s)</td>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  export default Results;