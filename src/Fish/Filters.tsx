import * as React from 'react';

interface Props {
    season: string;
    weather: string;
    bundle: string;
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