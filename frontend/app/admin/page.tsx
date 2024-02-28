export default function Home() {
  return (
    <div>
      <form action="http://localhost:8080/admin/login" method="POST">
        <input type="text" name="userID" placeholder="아이디" tabIndex={1} />
        <input type="password" name="password" placeholder="············" aria-describedby="password" tabIndex={2} required />
        <button type="submit" tabIndex={3}>
          로그인
        </button>
      </form>
    </div>
  );
}
