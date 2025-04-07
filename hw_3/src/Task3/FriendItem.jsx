import Friends from "./CSS/Friends.module.css";

export default function FriendItem({ name, avatar, isOnline }) {
  let status;
  if (isOnline) {
    status = Friends.online; 
  } else {
    status = Friends.offline; 
  }
  return (
    <li className={Friends.item}>
      <span className={status}></span>
      <img className={Friends.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={Friends.name}>{name}</p>
    </li>
  );
}