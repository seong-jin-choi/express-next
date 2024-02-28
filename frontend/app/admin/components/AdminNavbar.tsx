const AdminNavbar = () => {
  return (
    <nav id="layout-navbar" className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme">
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="#">
          <i className="ti ti-menu-2 ti-sm"></i>
        </a>
      </div>
      <div id="navbar-collapse" className="navbar-nav-right d-flex align-items-center">
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item me-2 me-xl-0">
            <a className="nav-link style-switcher-toggle hide-arrow" href="#;">
              <i className="ti ti-md"></i>
            </a>
          </li>
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a className="nav-link dropdown-toggle hide-arrow" href="#;" data-bs-toggle="dropdown">
              <i className="ti ti-user-circle ti-md"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href={`#TODO`}>
                  <i className="ti ti-lock me-2 ti-sm" style={{ position: "relative", left: "-1px" }}></i>
                  <span className="align-middle">비밀번호 변경</span>
                </a>
              </li>
              <li className="dropdown-divider"></li>
              <li>
                <a className="dropdown-item" href={`#TODO`}>
                  <i className="ti ti-logout me-2 ti-sm"></i>
                  <span className="align-middle">로그아웃</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default AdminNavbar;
