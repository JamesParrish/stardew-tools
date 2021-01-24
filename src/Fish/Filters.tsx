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
        <div className="Filters">
            <div className="Filters-Filter">
                <label htmlFor="filterLocation" className="Filters-Label">Location</label>
                <select id="filterLocation"
                        className="Filters-Select"
                        defaultValue={this.props.location}
                        onChange={e =>this.props.setLocationFilter(e)}>
                    <option value="">Any</option>
                    <option value="Backwoods">Backwoods</option>
                    <option value="Beach">Beach</option>
                    <option value="Bug Land">Bug Land</option>
                    <option value="Desert">Desert</option>
                    <option value="Fishing Game">Fishing Game</option>
                    <option value="Forest">Forest</option>
                    <option value="Ginger Island North">Ginger Island North</option>
                    <option value="Ginger Island South">Ginger Island South</option>
                    <option value="Ginger Island West">Ginger Island West</option>
                    <option value="Ginger Island South East">Ginger Island South East</option>
                    <option value="Ginger Island Cave">Ginger Island Cave</option>
                    <option value="Ginger Island Secret">Ginger Island Secret</option>
                    <option value="Mines Level 20">Mines Level 20</option>
                    <option value="Mines Level 60">Mines Level 60</option>
                    <option value="Mines Level 100">Mines Level 100</option>
                    <option value="Mountain">Mountain</option>
                    <option value="Sewer">Sewer</option>
                    <option value="Submarine">Submarine</option>
                    <option value="Town">Town</option>
                    <option value="Underground Mine">Underground Mine</option>
                    <option value="Witch Swamp">Witch Swamp</option>
                    <option value="Woods">Woods</option>
                </select>
            </div>
            <div className="Filters-Filter">
                <label htmlFor="filterSeason" className="Filters-Label">Season</label>
                <select id="filterSeason"
                        className="Filters-Select"
                        defaultValue={this.props.season}
                        onChange={e =>this.props.setSeasonFilter(e)}>
                    <option value="">Any</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring (Not Summer)">Spring (Not Summer)</option>
                    <option value="Summer (Not Autumn)">Summer (Not Autumn)</option>
                    <option value="Autumn (Not Winter)">Autumn (Not Winter)</option>
                    <option value="Winter (Not Spring)">Winter (Not Spring)</option>
                </select>
            </div>
            <div className="Filters-Filter">
                <label htmlFor="filterWeather" className="Filters-Label">Weather</label>
                <select id="filterWeather"
                        className="Filters-Select"
                        defaultValue={this.props.weather}
                        onChange={e =>this.props.setWeatherFilter(e)}>
                    <option value="">Any</option>
                    <option value="Rainy">Rainy</option>
                    <option value="Sunny">Sunny</option>
                    <option value="Rainy Only">Rainy Only</option>
                    <option value="Sunny Only">Sunny Only</option>
                </select>
            </div>
            <div className="Filters-Filter">
                <label htmlFor="filterBundle" className="Filters-Label">Bundle</label>
                <select id="filterBundle"
                        className="Filters-Select"
                        defaultValue={this.props.bundle}
                        onChange={e =>this.props.setBundleFilter(e)}>
                    <option value="">N/A</option>
                    <option value="Any">Any</option>
                    <option value="Lake Fish Bundle">Lake Fish Bundle</option>
                    <option value="Night Fishing Bundle">Night Fishing Bundle</option>
                    <option value="Ocean Fish Bundle">Ocean Fish Bundle</option>
                    <option value="River Fish Bundle">River Fish Bundle</option>
                    <option value="Specialty Fish Bundle">Specialty Fish Bundle</option>
                    <option value="Master Fisher's Bundle">Master Fisher's Bundle</option>
                    <option value="Quality Fish Bundle">Quality Fish Bundle</option>
                </select>
            </div>
        </div>
      );
    }
  }

  export default Filters;