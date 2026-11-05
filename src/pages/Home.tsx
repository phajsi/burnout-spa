import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <section
        className="personal-intro personal-intro-home"
        aria-labelledby="home-heading"
      >
        <h1 id="home-heading">
          <span>Hi, I’m </span>
          <span>[Your name].</span>
        </h1>
        <p>
          [A short introduction about you, what interests you, and what you’d
          like to share here.]
        </p>
      </section>
      <div className="personal-sections">
        <section aria-labelledby="blog-heading">
          <h2 id="blog-heading">
            <Link to="/blog">Blog</Link>
          </h2>
          <p>A place for writing, ideas, and things worth sharing.</p>
          <p className="personal-note">No posts yet.</p>
        </section>
        <section aria-labelledby="travel-heading">
          <h2 id="travel-heading">
            <Link to="/travel">Travel</Link>
          </h2>
          <p>A place for stories, photographs, and notes from elsewhere.</p>
          <p className="personal-note">No travel stories yet.</p>
        </section>
        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <h3>
            <Link to="/burnout-in-tech">Burnout in Tech</Link>
          </h3>
          <p>Explore the existing interactive project about burnout in tech.</p>
        </section>
      </div>
    </>
  )
}
