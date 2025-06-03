// import React, { useState } from "react";
// import { Navbar, Nav, Container, Form } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// const AppNavbar = () => {
//   const { t, i18n } = useTranslation();
//   const [expanded, setExpanded] = useState(false);

//   const navItems = [
//     { path: "/", label: t("home"), icon: "🏠" },
//     { path: "/seva-list", label: t("sevaList"), icon: "🪔" },
//     { path: "/history", label: t("history"), icon: "📜" },
//     { path: "/news-events", label: t("newsEvents"), icon: "📢" },
//     { path: "/volunteer", label: t("volunteer"), icon: "🙏" },
//     { path: "/donate", label: t("donate"), icon: "💰" },
//     { path: "/calendar", label: t("calendar"), icon: "📅" },
//     { path: "/contact", label: t("contact"), icon: "✉️" },
//   ];

//   const handleLanguageChange = (e) => {
//     i18n.changeLanguage(e.target.value);
//     setExpanded(false);
//   };

//   return (
//     <Navbar
//       expand="lg"
//       bg="warning"
//       variant="dark"
//       expanded={expanded}
//       onToggle={setExpanded}
//       collapseOnSelect
//       sticky="top"
//     >
//       <Container fluid>
//         <Navbar.Brand href="/" style={{ fontWeight: "300", fontSize: "1.3rem", color: "#fff" }}>
//           {t("Sri Anjaneya Swami Temple")}
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="navbar-nav" />

//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="me-auto d-flex flex-wrap">
//             {navItems.map(({ path, label, icon }) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 onClick={() => setExpanded(false)}
//                 style={{
//                   color: "#fff",
//                   textDecoration: "none",
//                   width: "80px",
//                   margin: "0 6px 8px",
//                   textAlign: "center",
//                   borderRadius: "10px",
//                   padding: "6px 4px",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   fontWeight: "600",
//                   fontSize: "0.85rem",
//                   whiteSpace: "normal",
//                   wordWrap: "break-word",
//                 }}
//                 activeStyle={{
//                   backgroundColor: "#fff",
//                   color: "#FF9933",
//                   fontWeight: "700",
//                   boxShadow: "0 0 8px rgba(255,153,51,0.6)",
//                 }}
//               >
//                 <span style={{ fontSize: "1.4rem", marginBottom: "4px" }}>{icon}</span>
//                 <span>{label}</span>
//               </NavLink>
//             ))}
//           </Nav>
// <Form.Select
//   aria-label="Select Language"
//   value={i18n.language}
//   onChange={handleLanguageChange}
//   style={{
//     maxWidth: "120px",
//     marginLeft: "10px",
//     backgroundColor: "#FF9933",    // Navbar orange background
//     color: "#fff",                 // White text for contrast
//     border: "none",
//     fontWeight: "600",
//     cursor: "pointer",
//     boxShadow: "none",
//   }}
// >
//   <option value="te" style={{ backgroundColor: "#FF9933", color: "#fff" }}>తెలుగు</option>
//   <option value="en" style={{ backgroundColor: "#FF9933", color: "#fff" }}>English</option>
// </Form.Select>

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default AppNavbar;









import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { useTranslation } from "react-i18next";

const AppNavbar = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [currentHoveredPath, setCurrentHoveredPath] = useState(null); // Track the path currently hovered
  const hoverTimeoutRef = useRef(null); // Ref to store the timeout ID for delayed hover-out

  const location = useLocation(); // Get the current location object

  const navItems = [
    { path: "/", label: t("home"), icon: "🏠" },
    { path: "/seva-list", label: t("sevaList"), icon: "📿" },
    { path: "/history", label: t("history"), icon: "📜" },
    { path: "/news-events", label: t("newsEvents"), icon: "📰" },
    { path: "/volunteer", label: t("volunteer"), icon: "🙋" },
    { path: "/donate", label: t("donate"), icon: "💰" },
    { path: "/calendar", label: t("calendar"), icon: "📅" },
    { path: "/contact", label: t("contact"), icon: "📞" },
  ];

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setExpanded(false); // Close navbar on language change
  };

  // Clear timeout on component unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Base style for navigation links (when not hovered or active)
  const baseLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    width: "75px", // Base width
    margin: "0 8px",
    textAlign: "center",
    borderRadius: "10px",
    padding: "8px 0px",
    fontWeight: "800",
    fontSize: "0.75rem",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    cursor: "pointer",
    // Ensure all relevant properties transition smoothly
    transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease, width 0.3s ease, padding 0.3s ease",
    display: "flex",
    flexDirection: "column", // Icon and label stacked by default
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
  };

  // Hover style for navigation links
  const hoverStyle = {
    backgroundColor: "#fff",
    color: "#FF9933",
    fontWeight: "900",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
   // In initialLinkStyle
transition: "background-color 0.3s ease, color 0.3s ease, boxShadow 0.3s ease, transform 0.3s ease-out, width 0.3s ease, padding 0.3s ease",
    width: "85px", // Increased width by 10px (75 + 10)
    padding: "8px 5px", // Adjusted padding to help with expansion and text centering
  };

  // Active style for the currently selected navigation link
  const activeLinkStyle = {
    backgroundColor: "#fff",
    color: "#FF9933",
    fontWeight: "900",
    boxShadow: "0 0 8px rgba(255,153,51,0.6)",
  // In initialLinkStyle
transition: "background-color 0.3s ease, color 0.3s ease, boxShadow 0.3s ease, transform 0.3s ease-out, width 0.3s ease, padding 0.3s ease",
    width: "75px", // Active state maintains base width unless specifically desired to expand
    padding: "8px 0px",
  };


  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#fa8806" }}
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
      collapseOnSelect
      sticky="top"
      className="py-1"
    >
      <Container fluid>
        <Navbar.Brand
          href="/"
          style={{ fontWeight: "1900", fontSize: "1.3rem", color: "#fff" }}
        >
          {t("Sri Anjaneya Swami Temple")}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto d-flex flex-wrap py-2">
            {navItems.map(({ path, label, icon }) => {
              const isCurrentlyHovered = currentHoveredPath === path;
              // Determine isActive status using useLocation
              const isActiveRoute = location.pathname === path ||
                                    (path === "/" && location.pathname === "/"); // Special handling for root path

              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setExpanded(false)}
                  style={({ isActive }) => { // isActive is still passed here for internal NavLink logic
                    // Start with base styles
                    let combinedStyle = { ...baseLinkStyle };

                    // Apply hover styles if currently hovered and not active
                    if (isCurrentlyHovered && !isActiveRoute) { // Use isActiveRoute here
                      combinedStyle = { ...combinedStyle, ...hoverStyle };
                    }
                    // Apply active styles if active (this will override hover if both are true)
                    if (isActiveRoute) { // Use isActiveRoute here
                      combinedStyle = { ...combinedStyle, ...activeLinkStyle };
                    }

                    return combinedStyle;
                  }}
                  onMouseEnter={() => {
                    clearTimeout(hoverTimeoutRef.current);
                    setCurrentHoveredPath(path);
                  }}
                  onMouseLeave={() => {
                    hoverTimeoutRef.current = setTimeout(() => {
                      setCurrentHoveredPath(null);
                    }, 3000);
                  }}
                  className={({ isActive }) => isActive ? 'active-nav-link' : ''}
                >
                  {/* Icon visible ONLY when hovered or active */}
                  {(isCurrentlyHovered || isActiveRoute) && // <--- Corrected: Using isActiveRoute
                    <span style={{ fontSize: "1.4rem", lineHeight: "1" }}>{icon}</span>
                  }
                  <span>{label}</span>
                </NavLink>
              );
            })}
          </Nav>

          <Form.Select
            aria-label="Select Language"
            value={i18n.language}
            onChange={handleLanguageChange}
            style={{
              maxWidth: "120px",
              marginLeft: "7px",
              backgroundColor: "#FF9933",
              color: "#fff",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "none",
              marginTop: expanded ? "1rem" : "0",
              marginBottom: expanded ? "0.5rem" : "0",
            }}
          >
            <option value="te" style={{ backgroundColor: "#FF9933", color: "#fff" }}>
              తెలుగు
            </option>
            <option value="en" style={{ backgroundColor: "#FF9933", color: "#fff" }}>
              English
            </option>
          </Form.Select>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;