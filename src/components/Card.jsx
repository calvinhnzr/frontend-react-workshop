export const Card = (props) => {
  return (
    <li>
      <figure>
        <img
          src={"./assets/images/" + props.data.teaserImg}
          alt={props.data.teaserImg}
        />
        <figcaption>
          <h3>"{props.data.title}</h3>
          <address>{props.data.author}</address>
          <ul className="tag-list">
            {props.data.tags.keywords.map((tag) => (
              <li
                key={tag}
                className={props.filterState === tag ? "is-active" : ""}
              >
                {tag}
              </li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </li>
  )
}

export const DefaultCard = () => {
  return (
    <li>
      <figure>
        <img src={"./assets/images/teaser.jpg"} alt="Placeholder Image" />
        <figcaption>
          <h3>Titel</h3>
          <address>John Doe</address>
          <ul className="tag-list">
            <li>Keyword 1</li>
            <li>Keyword 2</li>
          </ul>
        </figcaption>
      </figure>
    </li>
  )
}
