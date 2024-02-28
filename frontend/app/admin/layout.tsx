import { Metadata } from "next";
// import "../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
// import "../assets/vendor/libs/node-waves/node-waves.css";
// import "../assets/vendor/libs/typeahead-js/typeahead.css";
// import "../assets/vendor/libs/bootstrap-select/bootstrap-select.css";
// import "../assets/vendor/libs/select2/select2.css";
// import "../assets/vendor/libs/flatpickr/flatpickr.css";
// import "../assets/vendor/libs/typeahead-js/typeahead.css";
// import "../assets/vendor/libs/tagify/tagify.css";
// import "../assets/vendor/libs/formvalidation/dist/css/formValidation.min.css";

// import "../assets/vendor/css/rtl/core.css";
// import "../assets/vendor/css/rtl/theme-default.css";
// import "../assets/css/demo.css";
// import "../assets/vendor/css/pages/page-auth.css";
// import "../assets/vendor/css/pages/page-misc.css";

// import "../assets/vendor/js/helpers.js";
// import "../assets/vendor/js/template-customizer.js";

import "../../public/assets/vendor/fonts/fontawesome.css";
import "../../public/assets/vendor/fonts/tabler-icons.css";
import "../../public/assets/vendor/fonts/flag-icons.css";
import "../../public/assets/vendor/css/rtl/core.css";
import "../../public/assets/vendor/css/rtl/theme-default.css";
import "../../public/assets/css/demo.css";
import "../../public/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../../public/assets/vendor/libs/node-waves/node-waves.css";
import "../../public/assets/vendor/libs/typeahead-js/typeahead.css";
import "../../public/assets/vendor/libs/bootstrap-select/bootstrap-select.css";
import "../../public/assets/vendor/libs/select2/select2.css";
import "../../public/assets/vendor/libs/flatpickr/flatpickr.css";
import "../../public/assets/vendor/libs/typeahead-js/typeahead.css";
import "../../public/assets/vendor/libs/tagify/tagify.css";
import "../../public/assets/vendor/libs/formvalidation/dist/css/formValidation.min.css";
import "../../public/assets/vendor/css/pages/page-auth.css";
import "../../public/assets/vendor/css/pages/page-misc.css";

export const metadata: Metadata = {
  title: "SITE NAME",
  description: "SITE DESCRIPTION",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className="light-style customizer-hide"
      dir="ltr"
      data-theme="theme-default"
      data-assets-path="/assets/"
      data-template="vertical-menu-template"
    >
      <head>
        {/* Icons */}
        <link rel="stylesheet" href="/assets/vendor/fonts/fontawesome.css" />
        <link rel="stylesheet" href="/assets/vendor/fonts/tabler-icons.css" />
        <link rel="stylesheet" href="/assets/vendor/fonts/flag-icons.css" />

        {/* Core CSS */}
        <link rel="stylesheet" href="/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
        <link rel="stylesheet" href="/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
        <link rel="stylesheet" href="/assets/css/demo.css" />

        {/* Vendors CSS */}
        <link rel="stylesheet" href="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
        <link rel="stylesheet" href="/assets/vendor/libs/node-waves/node-waves.css" />
        <link rel="stylesheet" href="/assets/vendor/libs/typeahead-js/typeahead.css" />
        <link rel="stylesheet" href="/assets/vendor/libs/bootstrap-select/bootstrap-select.css" />
        <link rel="stylesheet" href="/assets/vendor/libs/select2/select2.css" />
        <link rel="stylesheet" href="/assets/vendor/libs/flatpickr/flatpickr.css" />
        <link rel="stylesheet" href="/assets/vendor/libs/typeahead-js/typeahead.css" />
        <link rel="stylesheet" href="/assets/vendor/libs/tagify/tagify.css" />
        <link rel="stylesheet" href="/assets/vendor/libs/formvalidation/dist/css/formValidation.min.css" />

        {/* Page CSS */}
        <link rel="stylesheet" href="/assets/vendor/css/pages/page-auth.css" />
        <link rel="stylesheet" href="/assets/vendor/css/pages/page-misc.css" />

        {/* Helpers */}
        {/* <script src="/assets/vendor/js/helpers.js"></script> */}

        {/* Template customizer & Theme config files */}
        {/* Must be included after core stylesheets and helpers.js in the <head> section */}
        {/* Template customizer: To hide customizer set displayCustomizer value false in config.js */}
        {/* <script src="/assets/vendor/js/template-customizer.js"></script> */}
        {/* Config: Mandatory theme config file containing global vars & default theme options */}
        {/* Set your preferred theme option in this file */}
        {/* <script src="/assets/js/config.js"></script> */}
        {/* 
        <script src="/assets/vendor/libs/jquery/jquery.js"></script>
        <script src="/assets/vendor/libs/popper/popper.js"></script>
        <script src="/assets/vendor/js/bootstrap.js"></script>
        <script src="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
        <script src="/assets/vendor/libs/node-waves/node-waves.js"></script>
        <script src="/assets/vendor/libs/hammer/hammer.js"></script>
        <script src="/assets/vendor/libs/i18n/i18n.js"></script>
        <script src="/assets/vendor/libs/typeahead-js/typeahead.js"></script>
        <script src="/assets/vendor/js/menu.js"></script> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
