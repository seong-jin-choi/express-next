const YourSidebarComponent = () => {
  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <a className="app-brand-link" href={"#TODO"}>
          <span className="app-brand-text demo menu-text fw-bold" style={{ marginLeft: "0 !important" }}>{`siteName 관리자`}</span>
        </a>
        <a className="layout-menu-toggle menu-link text-large ms-auto" href="#">
          <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
          <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
        </a>
      </div>
      <div className="menu-inner-shadow">
        <ul className="menu-inner py-1" id="admin__menu-items">
          {/* 유저 관리 */}
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">유저 관리</span>
          </li>
          {/* 유저 관리 > 관리자 계정 관리 */}
          <li className="menu-item" id="admin__menu-user">
            <a className="menu-link" href={"#TODO"}>
              <i className="menu-icon tf-icons ti ti-user-search"></i>
              관리자 계정 관리
            </a>
          </li>
          {/* 상품 관리 */}
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">상품 및 매거진 관리</span>
          </li>
          {/* 상품 관리 > 상품 데이터 관리 */}
          <li className="menu-item" id="admin__menu-sample">
            <a className="menu-link" href={`"#TODO"`}>
              <i className="menu-icon tf-icons ti ti-test-pipe"></i>
              상품 데이터 관리
            </a>
          </li>
          {/* 상품 관리 > 매거진 데이터 관리 */}
          <li className="menu-item" id="admin__menu-sample">
            <a className="menu-link" href={`"#TODO"`}>
              <i className="menu-icon tf-icons ti ti-test-pipe"></i>
              매거진 데이터 관리
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default YourSidebarComponent;
