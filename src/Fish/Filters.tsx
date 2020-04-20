import * as React from 'react';

interface Props {
    season: string;
    setSeasonFilter: Function;
    weather: string;
    bundle: string;
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
            </form>
        </div>
      );
    }
  }

  export default Filters;