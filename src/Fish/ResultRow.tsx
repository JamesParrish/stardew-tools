import * as React from 'react';
import { Fish } from './Models/Fish';
import { Location } from './Models/Location';
import { Times } from './Models/Times';

interface Props {
    fish: Fish
}

interface State {
}

class ResultRow extends React.Component<Props, State> {
    
    render() {
        const times: JSX.Element[] = [];
        const locations: JSX.Element[] = [];
        const uniqueSeasons: JSX.Element[] = [];
        
        this.props.fish.times.forEach((t: Times) => {
            times.push(
                <div>{t.startTime} - {t.endTime}</div>
            );
        });
        
        if(this.props.fish.locations){
            const seasons: string[] = [];

            this.props.fish.locations.forEach((l: Location) => {
                locations.push(
                    <div>{l.name}</div>
                );

                if (l.seasons) {
                    l.seasons.forEach((s: string) => {
                        seasons.push(s);
                    });
                }
            });
            
            [...new Set(this.props.fish.seasons)].forEach((s: string) => {
                uniqueSeasons.push(
                    <div>{s}</div>
                );
            });
        }

        const bundles = this.props.fish.bundles.join(', ');

      return (
        <tr className="Results-Row">
            <td>{this.props.fish.name}</td>
            <td>{locations}</td>
            <td>{uniqueSeasons}</td>
            <td>{this.props.fish.weather}</td>
            <td>{times}</td>
            <td>{bundles}</td>
        </tr>
      );
    }
  }

  export default ResultRow;