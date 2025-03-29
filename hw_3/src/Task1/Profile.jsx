import Item from "./Item";

export default function Profile({data}) {
  return (
    <div className="profile">
      {data.map((user, index) => {
        return (
          <Item
            key={index}
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
          />
        );
      })}
    </div>
  );
}
