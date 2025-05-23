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
















import React, { useState } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AppNavbar = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);

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
    setExpanded(false);
  };

  const baseLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    width: "75px",
    margin: "0 9px 0px",
    textAlign: "center",
    borderRadius: "10px",
    padding: "8px 4px",
    fontWeight: "800",
    fontSize: "0.85rem",
    whiteSpace: "normal",
    wordWrap: "break-word",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px", // space between icon and label
  };

  const hoverStyle = {
    backgroundColor: "#fff",
    color: "#FF9933",
    fontWeight: "700",
    boxShadow: "0 0 8px rgba(249, 131, 12, 0.6)",
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
    >
      <Container fluid>
        <Navbar.Brand
          href="/"
          style={{ fontWeight: "900", fontSize: "1.3rem", color: "#fff" }}
        >
          {t("Sri Anjaneya Swami Temple")}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto d-flex flex-wrap">
            {navItems.map(({ path, label, icon }) => {
              const isHovered = hoveredPath === path;
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setExpanded(false)}
                  onMouseEnter={() => setHoveredPath(path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  style={{
                    ...baseLinkStyle,
                    ...(isHovered ? hoverStyle : {}),
                  }}
                  activeStyle={hoverStyle}
                >
                  {/* Show icon only when hovered */}
                  {isHovered && <span>{icon}</span>}
                  {label}
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
              marginLeft: "10px",
              backgroundColor: "#FF9933",
              color: "#fff",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "none",
            }}
          >
            <option
              value="te"
              style={{ backgroundColor: "#FF9933", color: "#fff" }}
            >
              తెలుగు
            </option>
            <option
              value="en"
              style={{ backgroundColor: "#FF9933", color: "#fff" }}
            >
              English
            </option>
          </Form.Select>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
