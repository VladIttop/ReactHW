export default function FriendItem({ name, avatar, isOnline }) {
  let status;
  if (isOnline) {
    status = "Online";
  } else {
    status = "Offline";
  }
  return (
    <li class="item">
      <span class="status">{status}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
