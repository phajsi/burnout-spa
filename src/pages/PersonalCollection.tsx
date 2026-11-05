import { Link } from "react-router-dom"

export default function PersonalCollection({
  collection,
}: {
  collection: "blog" | "travel"
}) {
  const isBlog = collection === "blog"

  return (
    <section className="personal-intro personal-empty">
      <h1>{isBlog ? "Blog" : "Travel"}</h1>
      <p>
        {isBlog
          ? "No posts published yet."
          : "No travel stories published yet."}
      </p>
      <Link to="/">Back to home</Link>
    </section>
  )
}
