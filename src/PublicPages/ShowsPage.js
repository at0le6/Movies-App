import DataFechingPages from '../hooks/DataFechingPages';

function ShowsPage() {
  return (
    <DataFechingPages UriPage="https://api.tvmaze.com/shows" activeBreadCrum="Shows"/>
  )
}

export default ShowsPage