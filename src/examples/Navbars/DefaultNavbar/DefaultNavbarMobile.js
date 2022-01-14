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

import { useState } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Menu from "@mui/material/Menu";
// import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";

// DefaultNavbar dropdown menus
import PagesMenu from "examples/Navbars/DefaultNavbar/Menus/PagesMenu";
import AuthenticationMenu from "examples/Navbars/DefaultNavbar/Menus/AuthenticationMenu";
import ApplicationsMenu from "examples/Navbars/DefaultNavbar/Menus/ApplicationsMenu";
import EcommerceMenu from "examples/Navbars/DefaultNavbar/Menus/EcommerceMenu";
import DocsMenu from "examples/Navbars/DefaultNavbar/Menus/DocsMenu";

function DefaultNavbarMobile({ routes, open, close }) {
  const { width } = open && open.getBoundingClientRect();
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleSepOpenCollapse = (name) =>
    openCollapse === name ? setOpenCollapse(false) : setOpenCollapse(name);

  return (
    <Menu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <MDBox px={0.5}>
        <DefaultNavbarLink
          name="pages"
          collapseStatus={openCollapse === "pages"}
          onClick={() => handleSepOpenCollapse("pages")}
        >
          <MDBox maxHeight="16rem" overflow="auto">
            <PagesMenu routes={routes} mobileMenu />
          </MDBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="authentication"
          collapseStatus={openCollapse === "authentication"}
          onClick={() => handleSepOpenCollapse("authentication")}
        >
          <MDBox maxHeight="16rem" overflow="auto">
            <AuthenticationMenu routes={routes} mobileMenu />
          </MDBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="applications"
          collapseStatus={openCollapse === "applications"}
          onClick={() => handleSepOpenCollapse("applications")}
        >
          <MDBox maxHeight="16rem" overflow="auto">
            <ApplicationsMenu routes={routes} mobileMenu />
          </MDBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="ecommerce"
          collapseStatus={openCollapse === "ecommerce"}
          onClick={() => handleSepOpenCollapse("ecommerce")}
        >
          <MDBox maxHeight="16rem" overflow="auto">
            <EcommerceMenu routes={routes} mobileMenu />
          </MDBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="docs"
          collapseStatus={openCollapse === "docs"}
          onClick={() => handleSepOpenCollapse("docs")}
        >
          <MDBox maxHeight="16rem" overflow="auto">
            <DocsMenu routes={routes} mobileMenu />
          </MDBox>
        </DefaultNavbarLink>
      </MDBox>
    </Menu>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
