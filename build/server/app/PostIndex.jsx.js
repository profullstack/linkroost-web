import React from "react";
export default class extends React.Component {
  render() {
    const {
      posts
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "All posts"), posts.map(({
      id,
      title
    }) => /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
      href: `/react/post/view/${id}`
    }, title))), /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("a", {
      href: "/react/post/edit/"
    }, "add post")));
  }
}