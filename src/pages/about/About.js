const About = ()=>{
    return(
        <div className="main-content">
        <section className="intro section-style">
            <h2 className="section-title main-message">Welcome to CineMatch!</h2>
            <p className="section-paragrap-main">Your ultimate destination for movie recommendations and discovery.<br></br>At CineMatch, we're passionate about movies and aim to help you find your next favorite film.</p>
        </section>
        <section className="features section-style">
            <h2 className="section-title">Features</h2>
            <ul className="feature-list">
                <li>Extensive Movie Library</li>
                <li>Personalized Recommendations</li>
                <li>User Contributions</li>
                <li>Advanced Filtering Options</li>
            </ul>
        </section>
        <section className="mission section-style">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-paragraph">To connect movie lovers with films they'll love, from blockbusters to hidden gems, through an interactive and user-friendly platform.</p>
        </section>
    </div>    
    )
}
export default About;