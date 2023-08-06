import React from 'react';
import TournamentScreenServiceComponent from '../service/index.service';
import TournamentScreenComponent from '../components/index.js';

class TournamentScreen extends React.Component {
    //created separate component for business logic and view
    render() {
        return (
            <TournamentScreenServiceComponent {...this.props}>
                {
                    props => (
                        <TournamentScreenComponent
                            {...props}
                        />
                    )
                }
            </TournamentScreenServiceComponent>
        );
    };
};

export default TournamentScreen;