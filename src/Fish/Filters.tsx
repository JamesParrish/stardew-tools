import * as React from 'react';

interface Props {
    season: string;
    weather: string;
    bundle: string;
    setSeasonFilter: Function;
    setWeatherFilter: Function;
}

interface State {
}

class Filters extends React.Component<Props, State> {
    render() {
      return (
        <div>
            <h2>Filters</h2>
            <form>
                <select defaultValue={this.props.season}
                    onChange={e =>this.props.setSeasonFilter(e)}>
                    <option value="">Any</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                </select>
                <select defaultValue={this.props.weather}
                    onChange={e =>this.props.setWeatherFilter(e)}>
                    <option value="">Any</option>
                    <option value="Rainy">Rainy</option>
                    <option value="Sunny">Sunny</option>
                </select>
            </form>
        </div>
      );
    }
  }

  export default Filters;