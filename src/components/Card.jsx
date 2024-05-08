const Card = (props) => {
  return (
    <li data-js-card>
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
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </figcaption>
      </figure>
    </li>
  )
}
export default Card
