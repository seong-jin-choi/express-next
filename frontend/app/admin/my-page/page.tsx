export default function () {
  return (
    <div>
      <form action="http://localhost:8080/api/auth" method="POST">
        <button type="submit" tabIndex={3}>
          권한이 필요한 버튼
        </button>
      </form>
    </div>
  );
}
