import { Link } from "react-router";

export default function Sidebar() {
  return (
    <div>
      <p>サイドバー</p>
      <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/task">タスク</Link></li>
        <li><Link to="/refueling">燃費記録</Link></li>
        <li><Link to="/credential">認証情報</Link></li>
        <li><Link to="/note">ノート</Link></li>
        <hr />
        <li><Link to="/auth">サインアウト</Link></li>
      </ul>
    </div>
  )
}