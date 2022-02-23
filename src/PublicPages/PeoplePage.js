import DataFechingPages from '../hooks/DataFechingPages';

function PeoplePage() {
    return (
        <DataFechingPages UriPage="https://api.tvmaze.com/people" activeBreadCrum="People"/>
    )
}

export default PeoplePage