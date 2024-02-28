export default function Home() {
  return (
    <main className="admin__main" style={{ fontWeight: 500, minHeight: "100vh" }}>
      <div className="admin__page" id="admin__login-page">
        <div className="authentication-wrapper authentication-cover authentication-bg">
          <div className="authentication-inner row">
            <div className="d-none d-lg-flex col-lg-7 p-0">
              <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid my-5 auth-illustration"
                  src="/assets/img/illustrations/auth-login-illustration-light.png"
                  alt="auth-login-cover"
                  data-app-light-img="illustrations/auth-login-illustration-light.png"
                  data-app-dark-img="illustrations/auth-login-illustration-dark.png"
                />
                <img
                  className="platform-bg"
                  src="/assets/img/illustrations/bg-shape-image-light.png"
                  alt="auth-login-cover"
                  data-app-light-img="illustrations/bg-shape-image-light.png"
                  data-app-dark-img="illustrations/bg-shape-image-dark.png"
                />
              </div>
            </div>
            <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
              <div className="w-px-400 mx-auto">
                <h3 className="mb-4 fw-bold">관리자 로그인 👋</h3>
                <form className="mb-3" action={`#`} method="post">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="userID">
                      아이디
                    </label>
                    <input id="userID" className="form-control" type="text" name="userID" placeholder="아이디" autoFocus tabIndex={1} required />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">
                        비밀번호
                      </label>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        id="password"
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="············"
                        aria-describedby="password"
                        tabIndex={2}
                        autoComplete="off"
                        required
                      />
                      <span className="input-group-text cursor-pointer">
                        <i className="ti ti-eye-off"></i>
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-primary d-grid w-100" type="submit" tabIndex={3}>
                    로그인
                  </button>
                </form>
                <p className="text-center">
                  <span>계정이 없으신가요?</span>
                  <a href={``}>
                    <span>&nbsp;관리자 계정 생성하기</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
