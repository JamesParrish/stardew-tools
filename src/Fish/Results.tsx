import * as React from 'react';
import { Fish } from './Models/Fish';
import ResultRow from './ResultRow'

interface Props {
    fishes: Fish[]
    season: String;
    weather: String;
    bundle: String;
}

interface State {
}

class Results extends React.Component<Props, State> {
    isFishValid(fish: Fish): boolean {
        return fish.locations && fish.locations.length > 1;
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