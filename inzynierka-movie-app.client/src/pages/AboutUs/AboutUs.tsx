import ContainerInfo from "../../ui/ContainerInfo/ContainerInfo";

function AboutUs() {
  return (
    <ContainerInfo>
      <h1>About NETwatch</h1>

      <h3>
        Tired of switching between different services in search of something
        great to watch? Welcome to NETwatch
      </h3>

      <ul>
        <li>
          Search across all streaming services to find out where to watch
          movies/shows.
        </li>
        <li>
          Browse all titles from your selected free and paid services, using
          lots of filters like rating, genre, and production year
        </li>
        <li>
          Track movies and shows to get notified when new episodes or titles are
          released
        </li>
        <li>
          Check other people watchlists with great taste in movies to explore
          their ratings and title collections
        </li>
        <li>
          Get recommendations on what to watch through the community or through
          our team of knowledgeable editors
        </li>
      </ul>

      <h3>About the company</h3>
      <p>
        NETwatch was founded in 2024 and is Poland's biggest streaming
        aggregator, featuring hundreds of thousands of titles. NETwatch is
        currently available in 2 countries around the world. The company
        currently employs a team of 1 talented tech/media head. I am working
        hard to make content discovery effortless, helping our users spend less
        time searching and more time watching!
      </p>

      <h3>More info</h3>
      <ul>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>

      <p>
        © Playpilot AB (Org. nr. 556946-8530), Valhallavägen 66, 114 27
        Stockholm, Sweden
      </p>

      <p>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
    </ContainerInfo>
  );
}

export default AboutUs;
