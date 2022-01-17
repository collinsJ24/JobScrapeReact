import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="left">
          <div className="brand">JobScraper</div>
          <div className="brand2">Pricing</div>
          <div className="brand3">Login</div>
          <div className="brand-title">
            Have you got a Job Board which you have to manually populate with jobs ?
          </div>
          <p className="lead">
          Worry no more. Job Scrape is the simplest way to scrape the main job sites, Reed, Monster, Indeed and Linkedin.
          </p>

          <div className="ctas">
            <div className="cta-btns">
              <a href="/register" className="button is-warning hero-cta">
                CREATE YOUR FREE ACCOUNT
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <img
            className="hero-img show-image"
            src={require("./imageedit_1_9325712644.png")}
          />
        </div>
      </div>
      <div className="section color cta">
        <div className="container-instructions">
          <div className="w-layout-grid grid-scale">
            <div id="w-node-d2dc3037-c3f1-2e5e-ddb3-aa5b8ec34648-8ec34645" className="page-title less-margin">
              <div className="page-title cta">
                <div className="text-header white normal">
                  JobScraper-the last Job scraper you'll ever need
                </div>
                <div className="white-paragraph">
                  JobScraper makes scraping job sites easy. You don't need an
                  account or proxy. You don't need to keep your computer on.
                  Just type in the job title / keywords, select which job sites
                  you want searched, and we'll email you when it's done.
                </div>
                <div className="w-layout-grid button-wrapper top-padding">
                  <a href="/accounts/signup/?" className="button outline w-button">
                    Sign Up
                  </a>
                  <a href="/accounts/login/?" className="button white w-button">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
