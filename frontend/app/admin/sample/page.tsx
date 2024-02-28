import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

export default function () {
  return (
    <main className="admin__main">
      <div className="admin__page" id="admin__sample-page">
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            {/* BEGIN: Sidebar menu */}
            <AdminSidebar />
            {/* END: Sidebar menu */}
            {/* BEGIN: Layout container */}
            <div className="layout-page">
              {/* BEGIN: Navbar */}
              <AdminNavbar />
              {/* END: Navbar */}
              {/* BEGIN: Content wrapper */}
              <div className="content-wrapper">{/* Your content goes here */}</div>
              {/* END: Content wrapper */}
            </div>
            {/* END: Layout container */}
          </div>
        </div>
      </div>
    </main>
  );
}
