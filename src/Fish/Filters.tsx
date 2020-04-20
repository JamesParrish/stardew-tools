import * as React from 'react';

interface Props {
}

interface State {
    season: String;
    weather: String;
    bundle: String;
}

class Filters extends React.Component<Props, State> {
    render() {
      return (
        <div>
            <h2>Filters</h2>
            <div>Filters will go here</div>
        </div>
      );
    }
  }

  export default Filters;