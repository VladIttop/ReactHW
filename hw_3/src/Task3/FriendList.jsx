import FriendItem from "./FriendItem";

export default function FriendList({ data }) {
  return (
    <ul className="friendsList">
      {data.map((friend) => {
        return <FriendItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />;
      })}
    </ul>
  );
}
