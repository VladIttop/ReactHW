export default function Item({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <>
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers: </span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views: </span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes: </span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </>
  );
}
