import * as React from 'react';

interface Props {
    location: string;
    season: string;
    weather: string;
    bundle: string;
    setLocationFilter: Function;
    setSeasonFilter: Function;
    setWeatherFilter: Function;
    setBundleFilter: Function;
}

interface State {
}

class Filters extends React.Component<Props, State> {
    render() {
      return (
        <div>
            <form>
                <label>
                    Location:
                    <select defaultValue={this.props.location}
                        onChange={e =>this.props.setLocationFilter(e)}>
                        <option value="">Any</option>
                        <option value="Backwoods">Backwoods</option>
                        <option value="Beach">Beach</option>
                        <option value="Bug Land">Bug Land</option>
                        <option value="Desert">Desert</option>
                        <option value="Fishing Game">Fishing Game</option>
                        <option value="Forest">Forest</option>
                        <option value="Mines Level 20">Mines Level 20</option>
                        <option value="Mines Level 60">Mines Level 60</option>
                        <option value="Mines Level 100">Mines Level 100</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Sewer">Sewer</option>
                        <option value="Submarine">Submarine</option>
                        <option value="Temp">Temp</option>
                        <option value="Town">Town</option>
                        <option value="Underground Mine">Underground Mine</option>
                        <option value="Witch Swamp">Witch Swamp</option>
                        <option value="Woods">Woods</option>
                    </select>
                </label>
                <label>
                    Season:
                    <select defaultValue={this.props.season}
                        onChange={e =>this.props.setSeasonFilter(e)}>
                        <option value="">Any</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                    </select>
                </label>
                <label>
                    Weather:
                    <select defaultValue={this.props.weather}
                        onChange={e =>this.props.setWeatherFilter(e)}>
                        <option value="">Any</option>
                        <option value="Rainy">Rainy</option>
                        <option value="Sunny">Sunny</option>
                    </select>
                </label>
                <label>
                    Bundle:
                    <select defaultValue={this.props.bundle}
                        onChange={e =>this.props.setBundleFilter(e)}>
                        <option value="">N/A</option>
                        <option value="Any">Any</option>
                        <option value="Lake Fish Bundle">Lake Fish Bundle</option>
                        <option value="Night Fishing Bundle">Night Fishing Bundle</option>
                        <option value="Ocean Fish Bundle">Ocean Fish Bundle</option>
                        <option value="River Fish Bundle">River Fish Bundle</option>
                        <option value="Specialty Fish Bundle">Specialty Fish Bundle</option>
                    </select>
                </label>
            </form>
        </div>
      );
    }
  }

  export default Filters;