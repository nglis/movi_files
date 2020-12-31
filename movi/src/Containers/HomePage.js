import HeroDisplay from '../Components/HeroDisplay';

function HomePage() {
    const details = { 
      title: "TRAVELERS",
      year: "2018",
      rating: "TV-MA",
      length: "3 Seasons",
      episode: 'S3:E2 "Yates"',
      description: "MacLaren and Yates adjust to their new partnership while protecting a TV show host whose inflammatory rhetoric about Travelers has led to tragedy"
    };
  
    return(
        <div className="App">
          <header>
              This is where the app bar will go
          </header>
          <HeroDisplay 
            details={details}
          />
      </div>
    );
}

export default HomePage;