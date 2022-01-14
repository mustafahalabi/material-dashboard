/**
=========================================================
* Material Dashboard 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the page layout of Material Dashboard 2 PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the DefaultNavbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `name` key is used for the name of the route on the DefaultNavbar.
  3. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  4. The `icon` key is used for the icon of the route on the DefaultNavbar, you have to add a node.
  5. The `collapse` key is used for making a collapsible item on the DefaultNavbar that contains other routes inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  6. The `route` key is used to store the route location which is used for the react router.
  7. The `href` key is used to store the external links location.
*/

// @mui material components
import Icon from "@mui/material/Icon";

const pageRoutes = [
  {
    name: "Dashboards",
    key: "dashboards",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        name: "Analytics",
        key: "analytics",
        route: "/dashboards/analytics",
      },
      {
        name: "Sales",
        key: "sales",
        route: "/dashboards/sales",
      },
    ],
  },
  {
    name: "Users",
    key: "users",
    icon: <Icon>people</Icon>,
    collapse: [
      {
        name: "Reports",
        key: "reports",
        route: "/pages/users/reports",
      },
    ],
  },
  {
    name: "Profile",
    key: "profile",
    icon: <Icon>badge</Icon>,
    collapse: [
      {
        name: "Profile Overview",
        key: "profile-overview",
        route: "/pages/profile/profile-overview",
      },
      {
        name: "All Projects",
        key: "all-projects",
        route: "/pages/profile/all-projects",
      },
    ],
  },
  {
    name: "Extra",
    key: "extra",
    icon: <Icon>queue_play_next</Icon>,
    collapse: [
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl" },
      { name: "Widgets", key: "widgets", route: "/pages/widgets" },
      { name: "Charts", key: "charts", route: "/pages/charts" },
      {
        name: "Notfications",
        key: "notifications",
        route: "/pages/notifications",
      },
    ],
  },
  {
    name: "Account",
    key: "account",
    icon: <Icon>account_balance</Icon>,
    collapse: [
      {
        name: "Settings",
        key: "setting",
        route: "/pages/account/setting",
      },
      {
        name: "Billing",
        key: "billing",
        route: "/pages/account/billing",
      },
      {
        name: "Invoice",
        key: "invoice",
        route: "/pages/account/invoice",
      },
    ],
  },
  {
    name: "Projects",
    key: "projects",
    icon: <Icon>precision_manufacturing</Icon>,
    collapse: [
      {
        name: "Timeline",
        key: "timeline",
        route: "/pages/projects/timeline",
      },
    ],
  },
  {
    name: "Orders",
    key: "orders",
    icon: <Icon>shopping_cart</Icon>,
    collapse: [
      {
        name: "Order List",
        key: "order-list",
        route: "/ecommerce/orders/order-list",
      },
      {
        name: "Order Details",
        key: "order-details",
        route: "/ecommerce/orders/order-details",
      },
    ],
  },
  {
    name: "Products",
    key: "products",
    icon: <Icon>memory</Icon>,
    collapse: [
      {
        name: "New Product",
        key: "new-product",
        route: "/ecommerce/products/new-product",
      },
      {
        name: "Edit Product",
        key: "edit-product",
        route: "/ecommerce/products/edit-product",
      },
      {
        name: "Product Page",
        key: "product-page",
        route: "/ecommerce/products/product-page",
      },
    ],
  },
  {
    name: "Sign In",
    key: "sign-in",
    icon: <Icon>login</Icon>,
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-in/basic",
      },
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-in/cover",
      },
      {
        name: "Illustration",
        key: "illustration",
        route: "/authentication/sign-in/illustration",
      },
    ],
  },
  {
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon>assignment</Icon>,
    collapse: [
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/sign-up/cover",
      },
    ],
  },
  {
    name: "Reset Password",
    key: "reset-password",
    icon: <Icon>restart_alt</Icon>,
    collapse: [
      {
        name: "Cover",
        key: "cover",
        route: "/authentication/reset-password/cover",
      },
    ],
  },
  {
    name: "Applications",
    key: "applications",
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        icon: "widgets",
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        icon: "import_contacts",
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        icon: "backup_table",
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        icon: "event",
      },
    ],
  },
  {
    name: "Docs",
    key: "docs",
    collapse: [
      {
        name: "Getting Started",
        key: "getting-started",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-dashboard/",
        description: "All about overview, quick start, license and contents",
        icon: <Icon>article</Icon>,
      },
      {
        name: "Foundation",
        key: "foundation",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-dashboard/",
        description: "See our colors, icons and typography",
        icon: <Icon>grading</Icon>,
      },
      {
        name: "Components",
        key: "components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-dashboard/",
        description: "Explore our collection of fully designed components",
        icon: <Icon>apps</Icon>,
      },
      {
        name: "Plugins",
        key: "plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-dashboard/",
        description: "Check how you can integrate our plugins",
        icon: <Icon>extension</Icon>,
      },
    ],
  },
];

export default pageRoutes;
