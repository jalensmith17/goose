/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");
/* harmony import */ var _pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/AuthPage/AuthPage */ "./src/pages/AuthPage/AuthPage.js");
/* harmony import */ var _pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/HomePage/HomePage */ "./src/pages/HomePage/HomePage.js");
/* harmony import */ var _pages_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ForgotPassword/ForgotPassword */ "./src/pages/ForgotPassword/ForgotPassword.js");
/* harmony import */ var _pages_SettingsPage_SettingsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/SettingsPage/SettingsPage */ "./src/pages/SettingsPage/SettingsPage.js");
/* harmony import */ var _components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ResetPassword/ResetPassword */ "./src/components/ResetPassword/ResetPassword.js");
/* harmony import */ var _pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/ProfilePage/ProfilePage */ "./src/pages/ProfilePage/ProfilePage.js");
/* harmony import */ var _utilities_posts_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utilities/posts-service */ "./src/utilities/posts-service.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _components_CustomerSupport_CustomerSupport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/CustomerSupport/CustomerSupport */ "./src/components/CustomerSupport/CustomerSupport.js");
/* harmony import */ var _App_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.module.scss */ "./src/App.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

 // Import useLocation











function App() {
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_10__.getUser)());
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useLocation)();
  const shouldNotDisplayNavBar = !['/auth', '/auth/forgot-password'].includes(location.pathname);
  const updateUser = async userData => {
    const userId = user._id; // Assuming you have the user's ID in your state
    const token = localStorage.getItem('token'); // Retrieve the token from local storage or your state management
    try {
      const response = await fetch("/api/users/".concat(userId), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ".concat(token) // Include the authorization token in the request
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'Profile update failed');
      }
      const updatedUser = await response.json();
      setUser(updatedUser); // Update user state with the updated data
      return updatedUser;
    } catch (error) {
      console.error('Update failed:', error);
      return null;
    }
  };
  const fetchPosts = async () => {
    console.log('fetch posts use effect...');
    try {
      const postsData = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_12__.getAllPosts)();
      setPosts(postsData);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  const fetchUsers = async () => {
    try {
      const foundUsers = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_10__.indexUsers)();
      setUsers(foundUsers);
    } catch (error) {
      console.error('Error finding users', error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchPosts();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchUsers();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].App
  }, shouldNotDisplayNavBar && /*#__PURE__*/React.createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _App_module_scss__WEBPACK_IMPORTED_MODULE_9__["default"].NavBar,
    setUser: setUser,
    user: user,
    users: users
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: user,
      setUser: setUser,
      posts: posts,
      fetchPosts: fetchPosts,
      users: users,
      setUsers: setUsers
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/customer-support",
    element: /*#__PURE__*/React.createElement(_components_CustomerSupport_CustomerSupport__WEBPACK_IMPORTED_MODULE_8__.SupportTicketForm, null)
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/auth",
    element: /*#__PURE__*/React.createElement(_pages_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/auth/forgot-password",
    element: /*#__PURE__*/React.createElement(_pages_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setUser: setUser
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/reset-password/:token",
    element: /*#__PURE__*/React.createElement(_components_ResetPassword_ResetPassword__WEBPACK_IMPORTED_MODULE_6__["default"], {
      user: user,
      setUser: setUser
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/profile/:userId",
    element: /*#__PURE__*/React.createElement(_pages_ProfilePage_ProfilePage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      user: user,
      setUser: setUser,
      posts: posts
    })
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/settings",
    element: /*#__PURE__*/React.createElement(_pages_SettingsPage_SettingsPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: user,
      updateUser: updateUser,
      setUser: setUser
    })
  }))));
}
app.js;

/***/ }),

/***/ "./src/components/Button/Button.js":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.module.scss */ "./src/components/Button/Button.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Button(_ref) {
  let {
    value,
    handleClick
  } = _ref;
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleClick
  }, value);
}

/***/ }),

/***/ "./src/components/CommentForm/CommentForm.js":
/*!***************************************************!*\
  !*** ./src/components/CommentForm/CommentForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentForm)
/* harmony export */ });
/* harmony import */ var _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentForm.module.scss */ "./src/components/CommentForm/CommentForm.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Post/Post */ "./src/components/Post/Post.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function CommentForm(_ref) {
  let {
    post,
    user
  } = _ref;
  const [newComment, setNewComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [postId, setPostId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchComments();
  }, []);
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: newComment,
          post: postId,
          user: userId
        })
      });
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      const data = await response.json();
      setComments([...comments, data.comment]);
      setNewComment('');
    } catch (error) {
      console.error('There was an error.', error);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].commentContainer
  }, comments ? /*#__PURE__*/React.createElement("ul", {
    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].commentList
  }, comments && comments.map(comment => /*#__PURE__*/React.createElement("li", {
    key: comment.id,
    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].commentItem
  }, /*#__PURE__*/React.createElement("a", {
    href: "",
    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].commentUser
  }, comment.user), /*#__PURE__*/React.createElement("p", {
    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].comment
  }, comment.text)))) : null, /*#__PURE__*/React.createElement("form", {
    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].textInput,
    type: "text",
    value: newComment,
    onChange: e => setNewComment(e.target.value),
    placeholder: "Add a comment"
  }), /*#__PURE__*/React.createElement("button", {
    className: _CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].button,
    type: "submit"
  }, "Submit")));
}

/***/ }),

/***/ "./src/components/CustomerSupport/CustomerSupport.js":
/*!***********************************************************!*\
  !*** ./src/components/CustomerSupport/CustomerSupport.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportTicketForm: () => (/* binding */ SupportTicketForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerSupport.module.scss */ "./src/components/CustomerSupport/CustomerSupport.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");

 // Import SCSS module

const SupportTicketForm = () => {
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [attachments, setAttachments] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // State for attachments
  const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      attachments.forEach((file, index) => {
        formData.append("attachment".concat(index + 1), file);
      });
      console.log('Form data:', formData);

      // Call customerSupportRequest function from usersService and pass formData
      await _utilities_users_service__WEBPACK_IMPORTED_MODULE_2__.customerSupportRequest(formData);
      setSubmitted(true); // Update submitted state if submission successful
    } catch (error) {
      console.error('Error submitting support ticket:', error);
      setError(error.message || 'Failed to submit support ticket, invalid email 👎');
    } finally {
      setSubmitting(false);
    }
  };
  const handleAttachmentChange = e => {
    const files = e.target.files;
    if (files.length > 5) {
      alert('You can only select up to 5 files.');
      e.target.value = null;
    } else {
      console.log('Attachments selected:', files);
      setAttachments(Array.from(files));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['support-ticket-form']
  }, submitted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['success-message']
  }, "Support ticket submitted successfully! \uD83D\uDC4D") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Your Name",
    value: name,
    onChange: e => setName(e.target.value),
    required: true,
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['input-field']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    placeholder: "Your Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['input-field']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    placeholder: "Your Message",
    value: message,
    onChange: e => setMessage(e.target.value),
    required: true,
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['textarea-field']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "attachment"
  }, "Attach Image:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    id: "attachment",
    accept: ".jpg, .jpeg, .png",
    onChange: handleAttachmentChange,
    multiple: true,
    disabled: attachments.length >= 5,
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['attachment-input']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['file-limit-message']
  }, "You can attach up to 5 files.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    disabled: submitting,
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['submit-button']
  }, submitting ? 'Submitting...' : 'Submit'), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['error-message']
  }, error, " \u274C\uD83D\uDC4E\uD83D\uDC4E\uD83D\uDC4E")));
};

/***/ }),

/***/ "./src/components/DeleteBtn/DeleteBtn.js":
/*!***********************************************!*\
  !*** ./src/components/DeleteBtn/DeleteBtn.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteBtn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Button/Button.js");
/* harmony import */ var _utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/posts-service */ "./src/utilities/posts-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function DeleteBtn(_ref) {
  let {
    post,
    setPost
  } = _ref;
  // handle click
  const handleClick = async e => {
    try {
      const deletedPost = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__.deletePost)(post._id);
      if (!_utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__.deletePost) throw new Error('Could not delete post');
      setPost('');
    } catch (err) {
      console.log("error");
    }
  };
  return /*#__PURE__*/React.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleClick: handleClick,
    value: "Delete"
  });
}

/***/ }),

/***/ "./src/components/FollowList/FollowList.js":
/*!*************************************************!*\
  !*** ./src/components/FollowList/FollowList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FollowList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FollowList.module.scss */ "./src/components/FollowList/FollowList.module.scss");
/* harmony import */ var _Follow_Follow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Follow/Follow */ "./src/components/Follow/Follow.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");




const EmptyState = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].emptyState
}, "No posts available.");
function FollowList(_ref) {
  let {
    posts
  } = _ref;
  console.log(posts);
  const {
    userId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();

  // Check if there are any followers
  const hasFollowers = posts.some(postData => postData.user === userId);

  // Display appropriate header based on whether there are followers
  const header = hasFollowers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "Followers") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, "No Followers Yet");

  // Check if posts array is empty
  if (posts.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmptyState, null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _FollowList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].FollowList
  }, header, posts.map(postData =>
  // Check if postData.user exists and is not null/undefined
  postData.user === userId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Follow_Follow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: postData._id,
    user: postData.user,
    likes: postData.likes
  }) : null));
}

/***/ }),

/***/ "./src/components/Follow/Follow.js":
/*!*****************************************!*\
  !*** ./src/components/Follow/Follow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Follow)
/* harmony export */ });
/* harmony import */ var _Follow_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Follow.module.scss */ "./src/components/Follow/Follow.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function Follow(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: _Follow_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].Follow
  }, props.likes.map(like => /*#__PURE__*/React.createElement("div", {
    key: like._id
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: _Follow_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].follows,
    to: "/profile/".concat(like._id)
  }, /*#__PURE__*/React.createElement("li", null, like.name, " - ", like.userType.toUpperCase()))))));
}

/***/ }),

/***/ "./src/components/ForgotPasswordForm/ForgotPasswordForm.js":
/*!*****************************************************************!*\
  !*** ./src/components/ForgotPasswordForm/ForgotPasswordForm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswordForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPasswordForm.module.scss */ "./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss");




function ForgotPasswordForm() {
  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const handleSubmit = async evt => {
    evt.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    try {
      // Call resetPassword function from usersService
      await _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.resetPassword({
        email
      });
      setSuccessMessage('Password reset successful. Check your email for further instructions.');
      setError('');
    } catch (error) {
      setError(error.message || 'Failed to reset password');
      setSuccessMessage('');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, "Forgot Password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].input
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error
  }, error), successMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].success
  }, successMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Reset Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].link,
    onClick: () => navigate('/auth')
  }, "Back To Login"));
}

/***/ }),

/***/ "./src/components/LikeBtn/LikeBtn.js":
/*!*******************************************!*\
  !*** ./src/components/LikeBtn/LikeBtn.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LikeBtn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LikeBtn.module.scss */ "./src/components/LikeBtn/LikeBtn.module.scss");
/* harmony import */ var _utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/posts-service */ "./src/utilities/posts-service.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



function LikeBtn(_ref) {
  let {
    post,
    user,
    setPost
  } = _ref;
  // state for number of likes  
  const [likesNum, setLikesNum] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [likedPostBool, setLikedPostBool] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getLikedPostBool());

  // helper function to get likes num
  const getLikesNum = () => post.likes.length;

  // helper function to determine whether user liked post
  function getLikedPostBool() {
    // return post.likes.some(userLike => userLike === user._id);
    return post.likes.some(userLike => userLike._id === user._id || userLike === user._id);
  }

  // handle click
  const handleClick = async e => {
    e.preventDefault();
    try {
      let updatedPost;
      if (likedPostBool) {
        updatedPost = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__.unlikePost)(post._id);
      } else {
        updatedPost = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__.likePost)(post._id);
      }
      setPost(updatedPost);
    } catch (err) {
      console.error(err);
    }
  };

  // use effect to update likesNum and likedPostBool
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLikesNum(getLikesNum());
    setLikedPostBool(getLikedPostBool());
  }, [post]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLikesNum(getLikesNum());
    setLikedPostBool(getLikedPostBool());
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].LikeBtnContainer
  }, /*#__PURE__*/React.createElement("button", {
    className: _LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    onClick: handleClick
  }, likedPostBool ? /*#__PURE__*/React.createElement("span", null, "Unlike") : /*#__PURE__*/React.createElement("span", null, "Like")), /*#__PURE__*/React.createElement("span", {
    className: _LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].likesSum
  }, likesNum)));
}

/***/ }),

/***/ "./src/components/LoginForm/LoginForm.js":
/*!***********************************************!*\
  !*** ./src/components/LoginForm/LoginForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./src/components/LoginForm/LoginForm.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




function LoginForm(_ref) {
  let {
    setUser,
    setShowLogin
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const [credentials, setCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: ''
  });
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: ''
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [rememberMe, setRememberMe] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleChange = evt => {
    const {
      name,
      value
    } = evt.target;
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, {
      [name]: value
    }));
    setError('');
    setErrors(prevErrors => _objectSpread(_objectSpread({}, prevErrors), {}, {
      [name]: ''
    }));
    const inputContainer = evt.target.parentElement;
    if (value.trim()) {
      inputContainer.classList.add(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled);
    } else {
      inputContainer.classList.remove(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled);
    }
  };
  const handleRememberMeChange = evt => {
    const isChecked = evt.target.checked;
    setRememberMe(isChecked);
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    const emailError = validateEmail(credentials.email);
    const passwordError = validatePassword(credentials.password);
    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError
      });
      setError('Please fix the errors in the form.');
      return;
    }
    try {
      const user = await _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.login(credentials, rememberMe, navigate);
      setUser(user);
      navigate('/');
      // window.location.reload()
    } catch (_unused) {
      setError('Log In Failed - Try Again');
    }
  };
  const validateEmail = email => {
    if (!email) return 'Email is required';
    return /^\S+@\S+\.\S+$/.test(email) ? '' : 'Invalid email format';
  };
  const validatePassword = password => {
    return password.length < 8 ? 'Password must be at least 8 characters long' : '';
  };
  const handleForgotPasswordClick = () => {
    navigate('/auth/forgot-password');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].LoginForm
  }, /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].boxc
  }, /*#__PURE__*/React.createElement("form", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].form,
    autoComplete: "off",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title
  }, /*#__PURE__*/React.createElement("h1", null, "DevHive")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox, " ").concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled)
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email",
    value: credentials.email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, "Email"), errors.email && /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorSign
  }, "\u274C", errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox, " ").concat(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputFilled)
  }, /*#__PURE__*/React.createElement("input", {
    type: showPassword ? 'text' : 'password',
    name: "password",
    value: credentials.password,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, "Password"), /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].showPasswordIcon,
    onClick: () => setShowPassword(!showPassword)
  }, showPassword ? '🔑' : '🛡️'), errors.password && /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorSign
  }, "\u274C", errors.password)), /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].lost
  }, /*#__PURE__*/React.createElement("label", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: rememberMe,
    onChange: handleRememberMeChange
  }), "Remember Me"), /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].forgotPassword,
    onClick: handleForgotPasswordClick
  }, "Forgot Password")), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Log In"), /*#__PURE__*/React.createElement("div", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].register
  }, /*#__PURE__*/React.createElement("p", {
    onClick: () => setShowLogin(false)
  }, "Don't have an account? ", /*#__PURE__*/React.createElement("span", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].registerLink
  }, "Sign Up"))))), /*#__PURE__*/React.createElement("p", {
    className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMessage
  }, error));
}

/***/ }),

/***/ "./src/components/MarkdownRenderer/MarkdownRenderer.js":
/*!*************************************************************!*\
  !*** ./src/components/MarkdownRenderer/MarkdownRenderer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/index.js");
/* harmony import */ var _MarkdownRenderer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownRenderer.module.scss */ "./src/components/MarkdownRenderer/MarkdownRenderer.module.scss");


 // Import the SCSS file

const MarkdownRenderer = _ref => {
  let {
    source
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _MarkdownRenderer_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['markdown-container']
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_2__.Markdown, null, source));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownRenderer);

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _components_SearchUsersForm_SearchUsersForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SearchUsersForm/SearchUsersForm */ "./src/components/SearchUsersForm/SearchUsersForm.js");





function NavBar(_ref) {
  let {
    user,
    setUser,
    users
  } = _ref;
  const navigateTo = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Nav
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].innerNav
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].searchBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SearchUsersForm_SearchUsersForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].search,
    users: users
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logo,
    src: "https://i.imgur.com/xbSgxlf.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ul
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/",
    className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].home)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnLogo,
    src: "https://cdn-icons-png.flaticon.com/128/126/126496.png",
    alt: "Home"
  }))), !user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/auth",
    className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logSignup,
    src: "https://cdn-icons-png.flaticon.com/128/126/126497.png",
    alt: "Log/Signup"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, user && user._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/profile/".concat(user._id),
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnLogo,
    src: "https://cdn-icons-png.flaticon.com/128/126/126486.png",
    alt: "Profile"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/settings",
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnLogo,
    src: "https://cdn-icons-png.flaticon.com/128/126/126472.png",
    alt: "Settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].navItem,
    onClick: () => {
      _utilities_users_service__WEBPACK_IMPORTED_MODULE_5__.logOut();
      setUser(null);
      navigateTo('/auth');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].listItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnLogo,
    src: "https://cdn-icons-png.flaticon.com/128/10015/10015437.png",
    alt: "Logout"
  })))))));
}

/***/ }),

/***/ "./src/components/NewPostForm/NewPostForm.js":
/*!***************************************************!*\
  !*** ./src/components/NewPostForm/NewPostForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewPostForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/posts-service */ "./src/utilities/posts-service.js");
/* harmony import */ var _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPostForm.module.scss */ "./src/components/NewPostForm/NewPostForm.module.scss");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



function NewPostForm(_ref) {
  let {
    fetchPosts,
    user
  } = _ref;
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [useReadmeAsDescription, setUseReadmeAsDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    projectTitle: '',
    githubLink: '',
    image: '',
    projectDescription: ''
  });
  const handleChange = evt => {
    const {
      name,
      value
    } = evt.target;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [name]: value
    }));
    setError('');
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    formData.useReadmeAsDescription = useReadmeAsDescription;
    if (useReadmeAsDescription) {
      formData.projectDescription = '';
    }
    try {
      if (!user) throw new Error('Cannot create a post when user is not logged in');
      const createdPost = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_2__.createPost)(formData);
      if (!createdPost) throw new Error('Could not create new post');
      await fetchPosts();
      setUseReadmeAsDescription(false);
      setFormData({
        // Reset form data
        projectTitle: '',
        githubLink: '',
        image: '',
        projectDescription: ''
      });
    } catch (err) {
      setError(err.message);
    }
  };
  const {
    projectTitle,
    projectDescription,
    githubLink,
    image
  } = formData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NewPostForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].heading
  }, "Create a new post"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].NewPostFormContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Form,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textInput,
    type: "text",
    name: "projectTitle",
    value: projectTitle,
    onChange: handleChange,
    placeholder: "Title"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textAreaInput,
    type: "text",
    name: "projectDescription",
    value: projectDescription,
    onChange: handleChange,
    placeholder: "Description"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].checkboxContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].checkInput,
    type: "checkbox",
    checked: useReadmeAsDescription,
    onChange: e => setUseReadmeAsDescription(e.target.checked)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label,
    htmlFor: "useReadmeAsDescription"
  }, "Use README")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textInput,
    type: "text",
    name: "githubLink",
    value: githubLink,
    onChange: handleChange,
    placeholder: "Github"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].textInput,
    type: "text",
    name: "image",
    value: image,
    onChange: handleChange,
    placeholder: "Image URL"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    type: "submit"
  }, "Add project"))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMsg
  }, error));
}

/***/ }),

/***/ "./src/components/PostList/PostList.js":
/*!*********************************************!*\
  !*** ./src/components/PostList/PostList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostList.module.scss */ "./src/components/PostList/PostList.module.scss");
/* harmony import */ var _Post_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Post/Post */ "./src/components/Post/Post.js");




// Component to display when there are no posts available
const EmptyState = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: _PostList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].emptyState
}, "No posts available.");
function PostList(_ref) {
  let {
    posts,
    user,
    fetchPosts
  } = _ref;
  // Check if there are no posts
  if (posts.length === 0) {
    // If no posts, render the EmptyState component
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmptyState, null);
  }

  // If there are posts, render the list
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _PostList_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].postList
  }, posts.map(postData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Post_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
    postData: postData,
    key: postData._id,
    isLoggedInUser: user && user._id === postData.user,
    user: user,
    fetchPosts: fetchPosts
  })));
}

/***/ }),

/***/ "./src/components/Post/Post.js":
/*!*************************************!*\
  !*** ./src/components/Post/Post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.module.scss */ "./src/components/Post/Post.module.scss");
/* harmony import */ var _LikeBtn_LikeBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LikeBtn/LikeBtn */ "./src/components/LikeBtn/LikeBtn.js");
/* harmony import */ var _DeleteBtn_DeleteBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DeleteBtn/DeleteBtn */ "./src/components/DeleteBtn/DeleteBtn.js");
/* harmony import */ var _CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CommentForm/CommentForm */ "./src/components/CommentForm/CommentForm.js");
/* harmony import */ var _MarkdownRenderer_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MarkdownRenderer/MarkdownRenderer */ "./src/components/MarkdownRenderer/MarkdownRenderer.js");






 // Import the MarkdownRenderer component

function Post(_ref) {
  let {
    postData,
    isLoggedInUser,
    user,
    fetchPosts
  } = _ref;
  const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(postData);
  return post ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].Post
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].postContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].TitleImgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].namesContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userName,
    to: "/profile/".concat(postData.user._id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, postData.user.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectTitle
  }, post.projectTitle)), post.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProjectImage,
    src: post.image,
    alt: "Project"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MarkdownRenderer_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: post.projectDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].btnContainer
  }, user && !isLoggedInUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LikeBtn_LikeBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].LikeBtn,
    post: post,
    user: user,
    setPost: setPost
  }), user && isLoggedInUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DeleteBtn_DeleteBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    post: post,
    setPost: setPost,
    fetchPosts: fetchPosts
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "".concat(_Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button, " ").concat(_Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghBtn),
    src: postData.githubLink ? postData.githubLink : '#',
    target: postData.githubLink ? "_blank" : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghImg,
    src: "https://i.imgur.com/F796Bnt.png"
  })))), user && !isLoggedInUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CommentForm_CommentForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    post: post,
    user: user
  }))) : null;
}

/***/ }),

/***/ "./src/components/ProfileImage/ProfileImage.js":
/*!*****************************************************!*\
  !*** ./src/components/ProfileImage/ProfileImage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfileImage)
/* harmony export */ });
/* harmony import */ var _ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileImage.module.scss */ "./src/components/ProfileImage/ProfileImage.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ProfileImage(_ref) {
  let {
    user
  } = _ref;
  // Accept user data as a prop

  return /*#__PURE__*/React.createElement("div", {
    className: _ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].imgContainer
  }, user.picture ? /*#__PURE__*/React.createElement("img", {
    className: _ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProfileImage,
    src: user.picture
  }) : /*#__PURE__*/React.createElement("img", {
    className: _ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].ProfileImage,
    src: "https://i.imgur.com/C2VpXHd.png"
  }));
}

/***/ }),

/***/ "./src/components/ResetPassword/ResetPassword.js":
/*!*******************************************************!*\
  !*** ./src/components/ResetPassword/ResetPassword.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.module.scss */ "./src/components/ResetPassword/ResetPassword.module.scss");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");




function ResetPassword(_ref) {
  let {
    user,
    setUser
  } = _ref;
  const {
    token
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(); // Extract the token parameter from the URL
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const handleSubmit = async evt => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Call the updatePasswordWithToken function from usersService
      await _utilities_users_service__WEBPACK_IMPORTED_MODULE_3__.updatePasswordWithToken(token, {
        newPassword: password
      });
      setSuccessMessage('Password updated successfully');
      setError('');
    } catch (error) {
      setError(error.message || 'Failed to update password');
      setSuccessMessage('');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Reset Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit,
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].resetPassword
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "New Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "password",
    value: password,
    onChange: e => setPassword(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Confirm Password:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "confirm-password",
    value: confirmPassword,
    onChange: e => setConfirmPassword(e.target.value)
  })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].error
  }, error), successMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].success
  }, successMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: _ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button
  }, "Reset Password")));
}

/***/ }),

/***/ "./src/components/SearchUsersForm/SearchUsersForm.js":
/*!***********************************************************!*\
  !*** ./src/components/SearchUsersForm/SearchUsersForm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchUserForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserList_UserList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UserList/UserList */ "./src/components/UserList/UserList.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _SearchUsersForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchUsersForm.module.scss */ "./src/components/SearchUsersForm/SearchUsersForm.module.scss");




function SearchUserForm(_ref) {
  let {
    users
  } = _ref;
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  const handleSearch = query => {
    setSearchQuery(query);
    if (query.length > 0) {
      const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
      setSearchResults(filteredUsers);
    } else {
      setSearchResults([]);
    }
  };
  const handleUserClick = user => {
    navigate("/profile/".concat(user._id));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: _SearchUsersForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].Search,
    type: "text",
    value: searchQuery,
    onChange: e => handleSearch(e.target.value),
    placeholder: "Search"
  })), searchResults.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserList_UserList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    users: searchResults,
    onUserClick: handleUserClick
  }));
}

/***/ }),

/***/ "./src/components/SignUpForm/SignUpForm.js":
/*!*************************************************!*\
  !*** ./src/components/SignUpForm/SignUpForm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUpForm.module.scss */ "./src/components/SignUpForm/SignUpForm.module.scss");
/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User/User */ "./src/components/User/User.js");
const _excluded = ["userType"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




 // Import User component

function SignUpForm(_ref) {
  let {
    setUser,
    setShowLogin
  } = _ref;
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    password: '',
    userType: '',
    // Added userType field
    picture: '' // Added picture field
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // State to track password visibility
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)(); // Corrected

  const handleChange = evt => {
    const {
      name,
      value
    } = evt.target;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [name]: value
    }));
    setError('');
  };
  const handlePictureChange = evt => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        picture: reader.result
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      // Omit userType from formData when calling signUp function
      const {
          userType
        } = formData,
        userData = _objectWithoutProperties(formData, _excluded);
      const user = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_4__.signUp)(userData);
      setUser(user);
      navigate("/profile/".concat(user._id)); // Corrected
    } catch (_unused) {
      setError('Sign Up Failed - Try Again');
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    name,
    email,
    password,
    userType,
    picture
  } = formData;
  const disable = !name || !email || !password || !userType;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].body
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].boxc
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "DevHive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "name",
    value: name,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "email",
    value: email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: showPassword ? 'text' : 'password',
    name: "password",
    value: password,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].showPasswordIcon,
    onClick: togglePasswordVisibility
  }, showPassword ? '🔑' : '🛡️')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "userType",
    value: userType,
    onChange: handleChange,
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "",
    disabled: true
  }, "Select User Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "developer"
  }, "Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "employer"
  }, "Employer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].inputbox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: handlePictureChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    disabled: disable
  }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].login
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    onClick: () => setShowLogin(true),
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].loginLink
  }, "Already have an account? Log In")))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].errorMessage
  }, error), picture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: picture,
    alt: "User",
    className: _SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].previewImage
  }));
}

/***/ }),

/***/ "./src/components/UserList/UserList.js":
/*!*********************************************!*\
  !*** ./src/components/UserList/UserList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../User/User */ "./src/components/User/User.js");


const UserList = _ref => {
  let {
    users,
    onUserClick
  } = _ref;
  const handleUserClick = user => {
    onUserClick(user);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, users.map((user, index) => {
    const key = user._id || user.username || index; // Use id, username, or index as the key
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: key,
      onClick: () => handleUserClick(user)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_User_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
      user: user
    }));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);

/***/ }),

/***/ "./src/components/User/User.js":
/*!*************************************!*\
  !*** ./src/components/User/User.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const User = _ref => {
  let {
    user
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, user.name));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/index.module.scss");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");





const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));

/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.js":
/*!****************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPage.module.scss */ "./src/pages/AuthPage/AuthPage.module.scss");
/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LoginForm/LoginForm */ "./src/components/LoginForm/LoginForm.js");
/* harmony import */ var _components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SignUpForm/SignUpForm */ "./src/components/SignUpForm/SignUpForm.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function AuthPage(_ref) {
  let {
    setUser
  } = _ref;
  const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  return /*#__PURE__*/React.createElement("main", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].AuthPage
  }, /*#__PURE__*/React.createElement("div", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logo
  }), /*#__PURE__*/React.createElement("div", {
    className: _AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].credentialsContainer
  }, showLogin ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setUser: setUser,
    setShowLogin: setShowLogin
  })) : /*#__PURE__*/React.createElement(_components_SignUpForm_SignUpForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setUser: setUser,
    setShowLogin: setShowLogin
  })));
}

/***/ }),

/***/ "./src/pages/ForgotPassword/ForgotPassword.js":
/*!****************************************************!*\
  !*** ./src/pages/ForgotPassword/ForgotPassword.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ForgotPasswordForm_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ForgotPasswordForm/ForgotPasswordForm */ "./src/components/ForgotPasswordForm/ForgotPasswordForm.js");
/* harmony import */ var _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword.module.scss */ "./src/pages/ForgotPassword/ForgotPassword.module.scss");

 // Adjust the import path as needed
 // Adjust the import path as needed

function ForgotPasswordPage(_ref) {
  let {
    setUser
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ForgotPasswordForm_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    setUser: setUser
  }));
}

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.module.scss */ "./src/pages/HomePage/HomePage.module.scss");
/* harmony import */ var _components_PostList_PostList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostList/PostList */ "./src/components/PostList/PostList.js");
/* harmony import */ var _components_NewPostForm_NewPostForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NewPostForm/NewPostForm */ "./src/components/NewPostForm/NewPostForm.js");




function HomePage(_ref) {
  let {
    posts,
    fetchPosts,
    user
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].HomePage
  }, user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NewPostForm_NewPostForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fetchPosts: fetchPosts,
    user: user
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PostList_PostList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: posts,
    user: user
  }));
}

/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.js":
/*!**********************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePage.module.scss */ "./src/pages/ProfilePage/ProfilePage.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ProfileImage/ProfileImage */ "./src/components/ProfileImage/ProfileImage.js");
/* harmony import */ var _components_FollowList_FollowList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FollowList/FollowList */ "./src/components/FollowList/FollowList.js");
/* harmony import */ var _components_PostList_PostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostList/PostList */ "./src/components/PostList/PostList.js");
/* harmony import */ var _utilities_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/users-service */ "./src/utilities/users-service.js");
/* harmony import */ var _utilities_posts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/posts-service */ "./src/utilities/posts-service.js");





// import ProfilePostList from '../../components/ProfilePostList/ProfilePostList';



const ensureHttps = url => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
};
function ProfilePage(_ref) {
  let {
    user
  } = _ref;
  const [profileUser, setProfileUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [profilePosts, setProfilePosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [isLoadingUser, setIsLoadingUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isLoadingPosts, setIsLoadingPosts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isLoggedInUser, setIsLoggedInUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // save profile user from params
  const {
    userId
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
  // get loggedInuser from props
  const loggedInUser = user;

  // get posts of user from db
  const fetchProfilePosts = async () => {
    setIsLoadingPosts(true);
    console.log('USer Id:', userId);
    console.log('About to call API');
    const foundPosts = await (0,_utilities_posts_service__WEBPACK_IMPORTED_MODULE_6__.getAllPostsByUser)(userId);
    console.log(foundPosts);
    setProfilePosts(foundPosts);
    setIsLoadingPosts(false);
  };

  // get profile user
  const fetchProfileUser = async () => {
    setIsLoadingUser(true);
    const foundUser = await (0,_utilities_users_service__WEBPACK_IMPORTED_MODULE_7__.getProfileUser)(userId);
    setProfileUser(foundUser);
    setIsLoadingUser(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsLoggedInUser(!!(userId === (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id)));
  }, [userId, loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser._id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchProfilePosts();
  }, [userId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchProfileUser();
  }, [userId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProfilePage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].topContainer
  }, isLoadingUser || isLoadingPosts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userHeading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userName
  }, profileUser.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].imgContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ProfileImage_ProfileImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ProfileImage,
    user: profileUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userLinks
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghLink,
    href: profileUser.gitHubLink ? ensureHttps(profileUser.gitHubLink) : '#',
    target: profileUser.gitHubLink ? '_blank' : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].ghLogo,
    src: "https://i.imgur.com/F796Bnt.png",
    alt: "GitHub"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioLink,
    href: profileUser.portfolioLink ? ensureHttps(profileUser.portfolioLink) : '#'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].portfolioLogo,
    src: "https://i.imgur.com/FZvlk3y.png",
    alt: "Portfolio"
  })))), profileUser.bio ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userBio
  }, profileUser.bio) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].userBio
  }, "No bio at this time.")), isLoggedInUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FollowList_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: profilePosts
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PostList_PostList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    posts: profilePosts,
    user: loggedInUser
  }));
}

/***/ }),

/***/ "./src/pages/SettingsPage/SettingsPage.js":
/*!************************************************!*\
  !*** ./src/pages/SettingsPage/SettingsPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsPage.module.scss */ "./src/pages/SettingsPage/SettingsPage.module.scss");

 // Import the useNavigate hook

const SettingsPage = _ref => {
  let {
    user,
    updateUser,
    setUser
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)(); // Initialize the useNavigate hook
  // State variables for managing user input
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // State for username
  const [picture, setPicture] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // State for profile picture
  const [bio, setBio] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // State for bio
  const [gitHubLink, setGitHubLink] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // State for GitHub link
  // Effect hook to initialize component state when user changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (user) {
      setName(user.name || ''); // Initialize username
      setPicture(user.picture || ''); // Initialize profile picture
      setBio(user.bio || ''); // Initialize bio
      setGitHubLink(user.gitHubLink || ''); // Initialize GitHub link
    }
  }, [user]);
  // Function to handle saving changes to user profile
  const handleSave = async () => {
    console.log(name, picture, bio, gitHubLink);
    const updatedUser = await updateUser({
      name,
      // Include username
      picture,
      // Include profile picture
      bio,
      // Include bio
      gitHubLink // Include GitHub link
    });
    if (updatedUser) {
      alert('Profile updated successfully!');
      setUser(updatedUser); // Update user state with the updated user information
      navigate("/profile/".concat(user._id)); // Navigate to the specified route upon successful update
    } else {
      alert('Failed to update profile.');
    }
  };
  // Function to handle file input change for profile picture
  const handleFileChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPicture(reader.result); // Set profile picture using FileReader result
    };
    reader.readAsDataURL(file); // Read file as Data URL
  };
  // JSX returned by the component
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].settingsPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: _SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].editTitle
  }, "Edit User Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Username", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "User Bio", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: bio,
    onChange: e => setBio(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "GitHub Link", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: gitHubLink,
    onChange: e => setGitHubLink(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Change Profile Photo:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "file",
    onChange: handleFileChange
  })), picture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: picture,
    alt: "Profile"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleSave
  }, "Save Changes"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);

/***/ }),

/***/ "./src/utilities/posts-api.js":
/*!************************************!*\
  !*** ./src/utilities/posts-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   deletePost: () => (/* binding */ deletePost),
/* harmony export */   getAll: () => (/* binding */ getAll),
/* harmony export */   getAllByUser: () => (/* binding */ getAllByUser),
/* harmony export */   getById: () => (/* binding */ getById),
/* harmony export */   likePost: () => (/* binding */ likePost),
/* harmony export */   unlikePost: () => (/* binding */ unlikePost)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/posts';
function create(postData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', postData);
}
function getAll() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL);
}
function getAllByUser(userId) {
  console.log('Post API', userId);
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/user/").concat(userId));
}
function getById(id) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(id));
}
function likePost(id) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(id, "/like"), 'POST');
}
function unlikePost(id) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(id, "/unlike"), 'POST');
}
function deletePost(id) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(id), 'DELETE');
}

/***/ }),

/***/ "./src/utilities/posts-service.js":
/*!****************************************!*\
  !*** ./src/utilities/posts-service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPost: () => (/* binding */ createPost),
/* harmony export */   deletePost: () => (/* binding */ deletePost),
/* harmony export */   getAllPosts: () => (/* binding */ getAllPosts),
/* harmony export */   getAllPostsByUser: () => (/* binding */ getAllPostsByUser),
/* harmony export */   likePost: () => (/* binding */ likePost),
/* harmony export */   unlikePost: () => (/* binding */ unlikePost)
/* harmony export */ });
/* unused harmony export getPost */
/* harmony import */ var _posts_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts-api */ "./src/utilities/posts-api.js");

async function createPost(postData) {
  console.log('Post data:', postData);
  try {
    const createdPost = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.create(postData);
    return createdPost;
  } catch (error) {
    console.error("Error getting posts", error);
    return null;
  }
}
async function getAllPosts() {
  try {
    const postsData = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.getAll();
    if (!postsData) throw new Error('Could not get posts');
    return postsData;
  } catch (error) {
    console.error("Error getting posts", error);
    return null; // Return null if there's an error parsing the token
  }
}
async function getAllPostsByUser(userID) {
  try {
    console.log(userID);
    const postsData = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.getAllByUser(userID);
    console.log(postsData);
    if (!postsData) throw new Error('Could not get posts');
    return postsData;
  } catch (err) {
    console.error("Error getting posts", err);
    return null;
  }
}
async function likePost(postId) {
  try {
    const likedPost = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.likePost(postId);
    if (!likedPost) throw new Error('Could not like post');
    return likedPost;
  } catch (err) {
    console.error("Error liking posts", err);
    return null;
  }
}
async function unlikePost(postId) {
  try {
    const unlikedPost = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.unlikePost(postId);
    if (!unlikedPost) throw new Error('Could not like post');
    console.log(unlikedPost);
    return unlikedPost;
  } catch (err) {
    console.error("Error liking posts", err);
    return null;
  }
}
async function getPost(postId) {
  try {
    const foundPost = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.getById(postId);
    if (!foundPost) throw new Error('Could not find post');
    return foundPost;
  } catch (err) {
    console.error("Error finding post", err);
    return null;
  }
}
async function deletePost(postId) {
  try {
    const deletedPost = await _posts_api__WEBPACK_IMPORTED_MODULE_0__.deletePost(postId);
    if (!deletedPost) throw new Error('Could not delete');
    return deletedPost;
  } catch (err) {
    console.error("Error finding post", err);
    return null;
  }
}

/***/ }),

/***/ "./src/utilities/send-request.js":
/*!***************************************!*\
  !*** ./src/utilities/send-request.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendRequest)
/* harmony export */ });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-service */ "./src/utilities/users-service.js");

async function sendRequest(url) {
  let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
  let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const options = {
    method
  };
  if (payload) {
    options.headers = {
      'Content-Type': 'application/json'
    };
    options.body = JSON.stringify(payload);
  }
  const token = (0,_users_service__WEBPACK_IMPORTED_MODULE_0__.getToken)();
  if (token) {
    // Ensure options.headers is initialized if it doesn't exist
    options.headers = options.headers || {};
    options.headers.Authorization = "Bearer ".concat(token);
  }
  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}

/***/ }),

/***/ "./src/utilities/users-api.js":
/*!************************************!*\
  !*** ./src/utilities/users-api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findUser: () => (/* binding */ findUser),
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   resetPassword: () => (/* binding */ resetPassword),
/* harmony export */   signUp: () => (/* binding */ signUp)
/* harmony export */ });
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/users';
function signUp(userData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL, 'POST', userData);
}
function login(credentials) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/login"), 'POST', credentials);
}
function resetPassword(emailData) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/reset-password"), 'POST', emailData);
}
function findUser(userId) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(userId));
}
function index() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/"));
}

// export async function customerSupportRequest(name, email, message, attachment) {
//   return sendRequest(`${BASE_URL}/support`, 'POST', { name, email, message, attachment });
// }

/***/ }),

/***/ "./src/utilities/users-service.js":
/*!****************************************!*\
  !*** ./src/utilities/users-service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerSupportRequest: () => (/* binding */ customerSupportRequest),
/* harmony export */   getProfileUser: () => (/* binding */ getProfileUser),
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   getUser: () => (/* binding */ getUser),
/* harmony export */   indexUsers: () => (/* binding */ indexUsers),
/* harmony export */   logOut: () => (/* binding */ logOut),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   resetPassword: () => (/* binding */ resetPassword),
/* harmony export */   signUp: () => (/* binding */ signUp),
/* harmony export */   updatePasswordWithToken: () => (/* binding */ updatePasswordWithToken)
/* harmony export */ });
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-api */ "./src/utilities/users-api.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const BASE_URL = '/api/users';
async function signUp(userData) {
  const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}
async function login(credentials, rememberMe, navigate) {
  try {
    // Pass credentials and rememberMe option to the API call
    const token = await _users_api__WEBPACK_IMPORTED_MODULE_0__.login(_objectSpread(_objectSpread({}, credentials), {}, {
      rememberMe
    }));
    localStorage.setItem('token', token);
    const user = getUser();
    console.log("User:", user);

    // Redirect to homepage upon successful login
    navigate('/'); // Replace '/' with the path of your homepage

    return user;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
}
function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
function getUser() {
  const token = getToken();
  if (!token) return null; // Return null if token is missing
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.user; // Return user object from token payload
  } catch (error) {
    console.error("Error parsing user from token:", error);
    return null; // Return null if there's an error parsing the token
  }
}
async function getProfileUser(userId) {
  try {
    const foundUser = await _users_api__WEBPACK_IMPORTED_MODULE_0__.findUser(userId);
    return foundUser;
  } catch (error) {
    console.error("Error finding users", error);
  }
}
async function indexUsers() {
  console.log('indexing users');
  try {
    const foundUsers = await _users_api__WEBPACK_IMPORTED_MODULE_0__.index();
    return foundUsers;
  } catch (error) {
    console.error("Error finding users", error);
  }
}
function logOut() {
  localStorage.removeItem('token');
}

// Password reset functions
async function resetPassword(emailData) {
  try {
    await _users_api__WEBPACK_IMPORTED_MODULE_0__.resetPassword(emailData);
    return true;
  } catch (error) {
    console.error("Password Reset Error:", error);
    throw new Error("Failed to reset password.");
  }
}
async function updatePasswordWithToken(token, passwordData) {
  try {
    const response = await fetch("/api/users/reset-password/".concat(token), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(passwordData)
    });
    if (!response.ok) {
      throw new Error('Failed to update password');
    }
    return true; // Password update successful
  } catch (error) {
    console.error('Password Update Error:', error);
    throw new Error('Failed to update password.');
  }
}

// New function for support ticket request
async function customerSupportRequest(formData) {
  try {
    // Log FormData entries
    for (const entry of formData.entries()) {
      console.log(entry);
    }

    // Make POST request for support ticket using FormData
    const response = await fetch("".concat(BASE_URL, "/support"), {
      method: 'POST',
      body: formData // Pass formData directly as the body
    });
    if (response.ok) {
      return true; // Support ticket request successful
    } else {
      throw new Error('Failed to submit support ticket');
    }
  } catch (error) {
    console.error('Support Ticket Request Error:', error);
    throw new Error('Failed to submit support ticket.');
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.IMqMrT2eGOGeFiLbCAGg {
  width: 100vw;
  height: 100%;
  padding-top: 4rem;
}
.IMqMrT2eGOGeFiLbCAGg .z1Y52ButKREXXJL8AqTW {
  position: fixed;
  top: 0;
}

h1 {
  font-size: 7vmin;
  color: var(--text-dark);
  text-shadow: 1px 1px 2px black;
}

h2 {
  font-size: 2vw;
  color: var(--text-dark);
}

h3 {
  font-size: 1.3vw;
}

p {
  font-size: 0.8vw;
}

input {
  height: 2.5rem;
  border-radius: 1rem;
  margin-left: 1rem;
  font-size: 1rem;
  padding: 1rem;
  color: var(--input-color);
}

input:focus {
  outline: none;
  box-shadow: 0 0 1rem var(--btn-color);
}

label {
  font-size: 2.3rem;
  padding: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/App.module.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,YAAA;EACA,iBAAA;AACJ;AAAI;EACI,eAAA;EACA,MAAA;AAER;;AAEA;EACI,gBAAA;EACA,uBAAA;EACA,8BAAA;AACJ;;AAEA;EACI,cAAA;EACA,uBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,cAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;EACA,yBAAA;AACJ;;AAEA;EACI,aAAA;EACA,qCAAA;AACJ;;AAEA;EACI,iBAAA;EACA,aAAA;AACJ","sourcesContent":[".App {\r\n    width: 100vw;\r\n    height: 100%;\r\n    padding-top: 4rem;\r\n    .NavBar {\r\n        position: fixed;\r\n        top: 0;\r\n    }\r\n}\r\n\r\nh1 {\r\n    font-size: 7vmin;\r\n    color: var(--text-dark);\r\n    text-shadow: 1px 1px 2px black;\r\n}\r\n\r\nh2 {\r\n    font-size: 2vw;\r\n    color: var(--text-dark);\r\n}\r\n\r\nh3 {\r\n    font-size: 1.3vw;\r\n}\r\n\r\np {\r\n    font-size: .8vw;\r\n}\r\n\r\ninput {\r\n    height: 2.5rem;\r\n    border-radius: 1rem;\r\n    margin-left: 1rem;\r\n    font-size: 1rem;\r\n    padding: 1rem;\r\n    color: var(--input-color);\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n    box-shadow: 0 0 1rem var(--btn-color);\r\n}\r\n\r\nlabel {\r\n    font-size: 2.3rem;\r\n    padding: 1rem;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"App": `IMqMrT2eGOGeFiLbCAGg`,
	"NavBar": `z1Y52ButKREXXJL8AqTW`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.YmYKfusPOyIbyY4W_Qw5 {
  margin: 1rem;
  height: 4rem;
  width: 10vw;
  border: none;
  position: relative;
  overflow: hidden;
}

.b_aG7bzo5aM2mIR7O3BA {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 2rem;
  color: white;
  background-color: rgb(87, 163, 115);
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.b_aG7bzo5aM2mIR7O3BA:hover {
  cursor: pointer;
}

.du_jimamrCqrJeA6IThG {
  position: absolute;
  background-color: var(--btn-animation);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: transform 0.5s ease;
}

.YmYKfusPOyIbyY4W_Qw5:hover .du_jimamrCqrJeA6IThG {
  transform: translateX(100%);
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/components/Button/Button.module.scss"],"names":[],"mappings":"AACA;EACI,YAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,mCAAA;EACA,4BAAA;EACA,gCAAA;AAAJ;;AAGA;EACI,eAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,sCAAA;EACA,WAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;EACA,+BAAA;AAAJ;;AAGA;EACI,2BAAA;EACA,eAAA;AAAJ","sourcesContent":["\r\n.btnContainer {\r\n    margin: 1rem;\r\n    height: 4rem;\r\n    width: 10vw;\r\n    border: none;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.button {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n    font-size: 2rem;\r\n    color: white;\r\n    background-color: rgb(87, 163, 115);\r\n    border-top-left-radius: 1rem;\r\n    border-bottom-right-radius: 1rem;\r\n}\r\n\r\n.button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.btnAnimation {\r\n    position: absolute;\r\n    background-color: var(--btn-animation);\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    transition: transform 0.5s ease;\r\n}\r\n\r\n.btnContainer:hover .btnAnimation {\r\n    transform: translateX(100%);\r\n    cursor: pointer;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"btnContainer": `YmYKfusPOyIbyY4W_Qw5`,
	"button": `b_aG7bzo5aM2mIR7O3BA`,
	"btnAnimation": `du_jimamrCqrJeA6IThG`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CommentForm/CommentForm.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CommentForm/CommentForm.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.TjvmHHxvXBzh3dA9l3uX {
  max-width: 100%;
  border-radius: 20px;
}
.TjvmHHxvXBzh3dA9l3uX .CjnLxsnV_CxMakkI6Dv8 {
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.TjvmHHxvXBzh3dA9l3uX .CjnLxsnV_CxMakkI6Dv8:hover {
  background-color: green;
  border: 1px solid black;
  color: white;
}

.aunXGWI4P64MBxNeLg8A {
  font-size: 2rem;
  color: var(--text-green);
  letter-spacing: 2px;
  text-align: center;
  border-bottom: 0.1rem solid rgba(51, 86, 51, 0.3);
}

.u7gcbFha0mhQrN61_EUl {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  max-height: 250px;
  max-width: 200px;
  overflow-y: auto;
  border-bottom: 0.1rem solid rgba(51, 86, 51, 0.3);
}

.wTphI4l8tJf73C8Mdcjt {
  width: 90%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem;
}

.aDJzI0sK55GwiVFLKkRA {
  margin-right: 1rem;
  width: 90%;
  outline: none;
  border: 0.1rem solid lightgrey;
  border-radius: 0.5rem;
}
.aDJzI0sK55GwiVFLKkRA:focus {
  border: 0.1rem solid green;
}

.QvFakg437pTadoWQ9VWn {
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
  letter-spacing: 2px;
  text-decoration: none;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

.fiIfKwBY3LvKFZZZTlgZ {
  font-size: 1.5rem;
  color: black;
  letter-spacing: 1px;
  padding-top: 1rem;
  list-style: none;
  border-bottom: 0.1rem solid rgba(51, 86, 51, 0.3);
}

.bgdqfVbpMVFmuf6aDJAS {
  display: inline-block;
  padding: 1rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}`, "",{"version":3,"sources":["webpack://./src/components/CommentForm/CommentForm.module.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,mBAAA;AACJ;AAAI;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAER;AADQ;EACI,uBAAA;EACA,uBAAA;EACA,YAAA;AAGZ;;AAEA;EACI,eAAA;EACA,wBAAA;EACA,mBAAA;EACA,kBAAA;EACA,iDAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,iDAAA;AACJ;;AAEA;EACI,UAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AACJ;;AAEA;EACI,kBAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;AACJ;AAAI;EACI,0BAAA;AAER;;AAEA;EACI,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,qBAAA;EACA,sBAAA;AACJ;;AAEA;EACI,iBAAA;EACA,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iDAAA;AACJ;;AAEA;EACI,qBAAA;EACA,aAAA;EACA,yBAAA;EACA,qBAAA;EACA,sBAAA;AACJ","sourcesContent":[".commentContainer {\r\n    max-width: 100%;\r\n    border-radius: 20px;\r\n    .button {\r\n        width: 5rem;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        &:hover {\r\n            background-color: green;\r\n            border: 1px solid black;\r\n            color: white;\r\n        }\r\n    }\r\n}\r\n\r\n.commentTitle {\r\n    font-size: 2rem;\r\n    color: var(--text-green);\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n    border-bottom: .1rem solid rgb(51, 86, 51, 0.3);\r\n}\r\n\r\n.commentList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-top: 2rem;\r\n    max-height: 250px;\r\n    max-width: 200px;\r\n    overflow-y: auto;\r\n    border-bottom: .1rem solid rgb(51, 86, 51, 0.3);\r\n}\r\n\r\n.form {\r\n    width: 90%;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 3rem;\r\n}\r\n\r\n.textInput {\r\n    margin-right: 1rem;\r\n    width: 90%;\r\n    outline: none;\r\n    border: .1rem solid lightgrey;\r\n    border-radius: .5rem;\r\n    &:focus {\r\n        border: .1rem solid green;\r\n    }\r\n}\r\n\r\n.commentUser {\r\n    font-size: 1.2rem;\r\n    color: black;\r\n    font-weight: bold;\r\n    letter-spacing: 2px;\r\n    text-decoration: none;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    word-break: break-word;\r\n}\r\n\r\n.commentItem {\r\n    font-size: 1.5rem;\r\n    color: black;\r\n    letter-spacing: 1px;\r\n    padding-top: 1rem;\r\n    list-style: none;\r\n    border-bottom: .1rem solid rgb(51, 86, 51, 0.3);\r\n}\r\n\r\n.comment {\r\n    display: inline-block;\r\n    padding: 1rem;\r\n    overflow-wrap: break-word;\r\n    word-wrap: break-word;\r\n    word-break: break-word;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"commentContainer": `TjvmHHxvXBzh3dA9l3uX`,
	"button": `CjnLxsnV_CxMakkI6Dv8`,
	"commentTitle": `aunXGWI4P64MBxNeLg8A`,
	"commentList": `u7gcbFha0mhQrN61_EUl`,
	"form": `wTphI4l8tJf73C8Mdcjt`,
	"textInput": `aDJzI0sK55GwiVFLKkRA`,
	"commentUser": `QvFakg437pTadoWQ9VWn`,
	"commentItem": `fiIfKwBY3LvKFZZZTlgZ`,
	"comment": `bgdqfVbpMVFmuf6aDJAS`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CustomerSupport/CustomerSupport.module.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CustomerSupport/CustomerSupport.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.CWk_HHs9sL2udvAl3Opz {
  max-width: 400px;
  margin: 0 auto;
}
.CWk_HHs9sL2udvAl3Opz form {
  display: flex;
  flex-direction: column;
}
.CWk_HHs9sL2udvAl3Opz form input,
.CWk_HHs9sL2udvAl3Opz form textarea {
  width: 100%;
  margin-bottom: 10px;
  margin-left: 0;
  padding: 8px;
  background-color: rgb(240, 240, 240);
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1.15rem;
  color: black;
  transition: border-color 0.3s ease;
}
.CWk_HHs9sL2udvAl3Opz form input:focus,
.CWk_HHs9sL2udvAl3Opz form textarea:focus {
  border-color: #007bff;
  outline: none;
}
.CWk_HHs9sL2udvAl3Opz form textarea {
  height: 12rem;
}
.CWk_HHs9sL2udvAl3Opz form button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.CWk_HHs9sL2udvAl3Opz form button:hover {
  background-color: #0056b3;
}
.CWk_HHs9sL2udvAl3Opz form button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.CWk_HHs9sL2udvAl3Opz .clpZRsRNz0U5RD1sFacV {
  color: red;
  font-size: 1.25rem;
  font-weight: bolder;
}
.CWk_HHs9sL2udvAl3Opz .dmjQ_O5RCbXYtStXWxr0 {
  color: limegreen;
  font-size: 3rem;
  font-weight: bolder;
}

.LwR00xdCLlyc1kzg7HPz {
  font-size: 0.9rem;
}

.l1bGVOuMwmksV9RFIcKs {
  cursor: pointer;
}
.l1bGVOuMwmksV9RFIcKs:focus {
  border-color: #007bff;
  outline: none;
}`, "",{"version":3,"sources":["webpack://./src/components/CustomerSupport/CustomerSupport.module.scss"],"names":[],"mappings":"AAEA;EACI,gBAAA;EACA,cAAA;AADJ;AAGI;EACE,aAAA;EACA,sBAAA;AADN;AAGM;;EAEE,WAAA;EACA,mBAAA;EACA,cAAA;EACA,YAAA;EACA,oCAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,kCAAA;AADR;AAGQ;;EACE,qBAAA;EACA,aAAA;AAAV;AAGM;EACE,aAAA;AADR;AAIM;EACE,aAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,sCAAA;AAFR;AAIQ;EACE,yBAAA;AAFV;AAKQ;EACE,sBAAA;EACA,mBAAA;AAHV;AAOI;EACE,UAAA;EACA,kBAAA;EACA,mBAAA;AALN;AAOI;EACE,gBAAA;EACA,eAAA;EACA,mBAAA;AALN;;AASE;EACE,iBAAA;AANJ;;AASE;EACE,eAAA;AANJ;AAOI;EACE,qBAAA;EACA,aAAA;AALN","sourcesContent":["\r\n\r\n.support-ticket-form {\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n  \r\n    form {\r\n      display: flex;\r\n      flex-direction: column;\r\n  \r\n      input,\r\n      textarea {\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        margin-left: 0;\r\n        padding: 8px;\r\n        background-color: rgb(240, 240, 240);\r\n        border: 2px solid #ccc;\r\n        border-radius: 4px;\r\n        font-size: 1.15rem;\r\n        color: black;\r\n        transition: border-color 0.3s ease;\r\n  \r\n        &:focus {\r\n          border-color: #007bff;\r\n          outline: none;\r\n        }\r\n      }\r\n      textarea {\r\n        height: 12rem;\r\n      }\r\n  \r\n      button {\r\n        padding: 10px;\r\n        background-color: #007bff;\r\n        color: #fff;\r\n        border: none;\r\n        border-radius: 4px;\r\n        font-size: 16px;\r\n        cursor: pointer;\r\n        transition: background-color 0.3s ease;\r\n  \r\n        &:hover {\r\n          background-color: #0056b3;\r\n        }\r\n  \r\n        &:disabled {\r\n          background-color: #ccc;\r\n          cursor: not-allowed;\r\n        }\r\n      }\r\n    }\r\n    .error-message {\r\n      color: red;\r\n      font-size: 1.25rem;\r\n      font-weight: bolder;\r\n    }\r\n    .success-message {\r\n      color: limegreen;\r\n      font-size: 3rem;\r\n      font-weight: bolder;\r\n    }\r\n  }\r\n  \r\n  .file-limit-message {\r\n    font-size: .90rem;\r\n  }\r\n\r\n  .attachment-input {\r\n    cursor: pointer;\r\n    &:focus {\r\n      border-color: #007bff;\r\n      outline: none;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"support-ticket-form": `CWk_HHs9sL2udvAl3Opz`,
	"error-message": `clpZRsRNz0U5RD1sFacV`,
	"success-message": `dmjQ_O5RCbXYtStXWxr0`,
	"file-limit-message": `LwR00xdCLlyc1kzg7HPz`,
	"attachment-input": `l1bGVOuMwmksV9RFIcKs`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FollowList/FollowList.module.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FollowList/FollowList.module.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.n58utOoGOui0H9E8hTMP {
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 5rem;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding: 2rem;
  border: 0.1rem solid green;
  box-shadow: 0 0 0.3rem darkgreen;
  margin: 2rem 0 2rem;
}`, "",{"version":3,"sources":["webpack://./src/components/FollowList/FollowList.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,UAAA;EACA,gBAAA;EACA,8DAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;EACA,0BAAA;EACA,gCAAA;EACA,mBAAA;AACJ","sourcesContent":[".FollowList {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 90%;\r\n    min-height: 5rem;\r\n    background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n    border-radius: .5rem;\r\n    margin-bottom: 2rem;\r\n    padding: 2rem;\r\n    border: .1rem solid green;\r\n    box-shadow: 0 0 .3rem darkgreen;\r\n    margin: 2rem 0 2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"FollowList": `n58utOoGOui0H9E8hTMP`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Follow/Follow.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Follow/Follow.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.k_z3E_52ZfboqViZqStf ul {
  list-style-type: none;
  margin: 0.5rem;
}
.k_z3E_52ZfboqViZqStf ul .vBvFXqvo2bwXnANkAzWG {
  text-decoration: none;
  color: blue;
}
.k_z3E_52ZfboqViZqStf ul .vBvFXqvo2bwXnANkAzWG:hover {
  color: cornflowerblue;
}`, "",{"version":3,"sources":["webpack://./src/components/Follow/Follow.module.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,cAAA;AACJ;AAAI;EACI,qBAAA;EACA,WAAA;AAER;AADQ;EACI,qBAAA;AAGZ","sourcesContent":[".Follow ul {\r\n    list-style-type: none;\r\n    margin: .5rem;\r\n    .follows {\r\n        text-decoration: none;\r\n        color: blue;\r\n        &:hover {\r\n            color: cornflowerblue;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Follow": `k_z3E_52ZfboqViZqStf`,
	"follows": `vBvFXqvo2bwXnANkAzWG`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes Zc6uiYv2ixSANn506Sh4 {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.IFrs_wH6ZfFHkHIS8B6M {
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border-bottom: 2px solid #ccc;
  box-shadow: none;
  min-width: 30vh;
  max-width: 70vh;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 2rem 3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  user-select: none;
  overflow: hidden;
  animation: Zc6uiYv2ixSANn506Sh4 5s infinite linear;
}
.IFrs_wH6ZfFHkHIS8B6M .UTc0JEGiUZqz7lXpMPGP {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Inter Tight";
  color: white;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 {
  margin-bottom: 20px;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .zRVbsS04lV0e_b5a7FRh {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: white;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .xofrtecfoEYsMc4ph_4G {
  min-width: 30vw;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0;
  color: white;
  transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */
  width: 30vh;
  font-weight: bolder;
  padding: 0;
}
.IFrs_wH6ZfFHkHIS8B6M .nBEjfZACLKijxcoaL9J7 .xofrtecfoEYsMc4ph_4G:focus {
  border-bottom-color: gold; /* Change border-bottom color on focus */
}
.IFrs_wH6ZfFHkHIS8B6M .wqDD0RnwvlD8OebalB57 {
  color: #ff0000;
  font-size: 1rem;
  margin-top: 3px;
  margin-left: 5px;
}
.IFrs_wH6ZfFHkHIS8B6M .dkaYBCIu5vx4QlxGCyHi {
  color: #00cc00;
  font-size: 1rem;
  margin-top: 5px;
}
.IFrs_wH6ZfFHkHIS8B6M .SQ6pFGLe9fdptuyzihAv {
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s ease;
  margin-bottom: 1rem;
}
.IFrs_wH6ZfFHkHIS8B6M .SQ6pFGLe9fdptuyzihAv:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.IFrs_wH6ZfFHkHIS8B6M ._uR7x4NFZTbsc3UtpAtZ {
  color: white;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  width: 100%;
  transition: all 0.4s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.IFrs_wH6ZfFHkHIS8B6M ._uR7x4NFZTbsc3UtpAtZ:hover {
  background-color: rgba(255, 255, 255, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,iFAAA;EACF;EAEA;IACE,qFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,uFAAA;EAFF;AACF;AAMA;EACI,iBAAA;EACA,kBAAA;EACA,6BAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,0CAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,iBAAA;EACA,gBAAA;EACA,kDAAA;AAJJ;AAMI;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,YAAA;AAJN;AAOI;EACE,mBAAA;AALN;AAOM;EACE,iBAAA;EACA,kBAAA;EACA,YAAA;AALR;AAQM;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,8BAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;EACA,yCAAA,EAAA,2CAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AANR;AASM;EACE,yBAAA,EAAA,wCAAA;AAPR;AAWI;EACE,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AATN;AAYI;EACE,cAAA;EACA,eAAA;EACA,eAAA;AAVN;AAaI;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;AAXN;AAaM;EACE,0CAAA;AAXR;AAeI;EACE,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,yBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;AAbN;AAeM;EACE,0CAAA;AAbR","sourcesContent":["@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n.container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: transparent;\r\n    border-bottom: 2px solid #ccc;\r\n    box-shadow: none;\r\n    min-width: 30vh;\r\n    max-width: 70vh;\r\n    border: 2px solid rgba(255, 255, 255, 0.5);\r\n    border-radius: 20px;\r\n    padding: 2rem 3rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    user-select: none;\r\n    overflow: hidden;\r\n    animation: shine 5s infinite linear;\r\n  \r\n    .title {\r\n      font-size: 2rem;\r\n      text-align: center;\r\n      margin-bottom: 20px;\r\n      font-family: \"Inter Tight\";\r\n      color: white;\r\n    }\r\n  \r\n    .formGroup {\r\n      margin-bottom: 20px;\r\n  \r\n      .label {\r\n        font-size: 1.2rem;\r\n        margin-bottom: 5px;\r\n        color: white;\r\n      }\r\n  \r\n      .input {\r\n        min-width: 30vw;\r\n        background: transparent;\r\n        border: none;\r\n        border-bottom: 1px solid white;\r\n        font-size: 1.2rem;\r\n        padding: 1rem;\r\n        border-radius: 0;\r\n        color: white;\r\n        transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */\r\n        width: 30vh;\r\n        font-weight: bolder;\r\n        padding: 0;\r\n      }\r\n  \r\n      .input:focus {\r\n        border-bottom-color: gold; /* Change border-bottom color on focus */\r\n      }\r\n    }\r\n  \r\n    .error {\r\n      color: #ff0000;\r\n      font-size: 1rem;\r\n      margin-top: 3px;\r\n      margin-left: 5px;\r\n    }\r\n  \r\n    .success {\r\n      color: #00cc00;\r\n      font-size: 1rem;\r\n      margin-top: 5px;\r\n    }\r\n  \r\n    .button {\r\n      color: white;\r\n      width: 100%;\r\n      height: 40px;\r\n      border-radius: 40px;\r\n      background-color: rgb(87, 163, 115);\r\n      border: none;\r\n      outline: none;\r\n      cursor: pointer;\r\n      font-size: 1.25rem;\r\n      font-weight: 600;\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      text-decoration: none;\r\n      transition: all 0.4s ease;\r\n      margin-bottom: 1rem;\r\n    \r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.5);\r\n      }\r\n    }\r\n  \r\n    .link {\r\n      color: white;\r\n      border-radius: 40px;\r\n      background-color: rgb(87, 163, 115);\r\n      border: none;\r\n      outline: none;\r\n      cursor: pointer;\r\n      font-size: 1.25rem;\r\n      font-weight: 600;\r\n      padding-top: .4rem;\r\n      padding-bottom: .4rem;\r\n      width: 100%;\r\n      transition: all 0.4s ease;\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n  \r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.5);\r\n      }\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `IFrs_wH6ZfFHkHIS8B6M`,
	"shine": `Zc6uiYv2ixSANn506Sh4`,
	"title": `UTc0JEGiUZqz7lXpMPGP`,
	"formGroup": `nBEjfZACLKijxcoaL9J7`,
	"label": `zRVbsS04lV0e_b5a7FRh`,
	"input": `xofrtecfoEYsMc4ph_4G`,
	"error": `wqDD0RnwvlD8OebalB57`,
	"success": `dkaYBCIu5vx4QlxGCyHi`,
	"button": `SQ6pFGLe9fdptuyzihAv`,
	"link": `_uR7x4NFZTbsc3UtpAtZ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LikeBtn/LikeBtn.module.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LikeBtn/LikeBtn.module.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.HQz_aJWGEJ_QTsm2PCvM {
  position: relative;
}
.HQz_aJWGEJ_QTsm2PCvM .bkEyFKmi8gKCaQS4WJ6p {
  width: 5rem;
}
.HQz_aJWGEJ_QTsm2PCvM .bkEyFKmi8gKCaQS4WJ6p:hover {
  background-color: green;
  border: 1px solid black;
  color: white;
}
.HQz_aJWGEJ_QTsm2PCvM .nbZ6eV9LWt5Z4uODx8f7 {
  position: absolute;
  top: 0;
  right: -0.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: rgb(185, 228, 178);
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/components/LikeBtn/LikeBtn.module.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;AACF;AAAE;EACE,WAAA;AAEJ;AADI;EACE,uBAAA;EACA,uBAAA;EACA,YAAA;AAGN;AAAE;EACE,kBAAA;EACA,MAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,oCAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAEJ","sourcesContent":[".LikeBtnContainer {\r\n  position: relative;\r\n  .button {\r\n    width: 5rem;\r\n    &:hover {\r\n      background-color: green;\r\n      border: 1px solid black;\r\n      color: white;\r\n    }\r\n  }\r\n  .likesSum {\r\n    position: absolute;\r\n    top: 0;\r\n    right: -.5rem;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    background-color: rgb(185, 228, 178);\r\n    width: 1.3rem;\r\n    height: 1.3rem;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LikeBtnContainer": `HQz_aJWGEJ_QTsm2PCvM`,
	"button": `bkEyFKmi8gKCaQS4WJ6p`,
	"likesSum": `nbZ6eV9LWt5Z4uODx8f7`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes iB4SfQWGw0ZOCqRfypCd {
  0% {
    color: #c3ffb3;
    transform: scale(1);
  }
  50% {
    color: #98fb98;
    transform: scale(1.1);
  }
  100% {
    color: #c3ffb3;
    transform: scale(1);
  }
}
@keyframes XRJ4HljCDLmOJmSxDLVQ {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.aOctDy4BV7cS3A3FgdnO {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110vh;
  width: 100%;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.O2NCX3pelTmVHMEJzuh5 {
  width: 100%;
}

h4 {
  font-size: 3rem;
}

/* Inputbox styles */
.slJPwttFXbjZj3iK5tpD {
  position: relative;
  margin: 30px 0;
  min-width: 30vh;
  max-width: 40vh;
  border-bottom: 2px solid #fff;
}
.slJPwttFXbjZj3iK5tpD:focus-within {
  border-bottom-color: gold !important; /* Change border color on focus */
}
.slJPwttFXbjZj3iK5tpD .RL0EW6mNmYV3dbwKgeGS {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-40%);
  color: #fff;
  font-size: 1.25rem;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
}
.slJPwttFXbjZj3iK5tpD input {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  font-weight: bolder;
  padding: 0 35px 0 5px;
  color: #fff;
}
.slJPwttFXbjZj3iK5tpD input:focus ~ label, .slJPwttFXbjZj3iK5tpD input:valid ~ label {
  color: lightgray;
  top: -5px;
}

/* Rest of the styles */
.mdJKUsO6IVB_KHxsorxg {
  min-width: 30vh;
  max-width: 50vh;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  overflow: hidden;
  animation: XRJ4HljCDLmOJmSxDLVQ 5s infinite linear;
}
.mdJKUsO6IVB_KHxsorxg .duhWcPoiFKzflZYTW6qA {
  width: 100%;
  color: #fff;
  padding: 10px;
  text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
}
.mdJKUsO6IVB_KHxsorxg h1 {
  font-size: 3rem;
  color: #fff;
  text-align: center;
}
.mdJKUsO6IVB_KHxsorxg .PWpsrepqIxsSicJWBQv9 {
  display: block;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL {
  margin: 35px 2px;
  font-size: 0.85rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL label {
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  margin-right: 1rem;
  margin-left: -1.25rem;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL label:has(input:checked) {
  color: darkgreen;
  font-weight: bolder;
  animation: iB4SfQWGw0ZOCqRfypCd 0.5s ease forwards;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL label input {
  margin-right: 5px;
  cursor: pointer;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL .j6uBnf0W_ruy9sK_SIO4 {
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.mdJKUsO6IVB_KHxsorxg .JAm91a8tmBcEN_9D7mVL .j6uBnf0W_ruy9sK_SIO4:hover {
  text-decoration: underline;
  color: #ccc;
  cursor: pointer;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i {
  font-size: 0.9rem;
  color: #fff;
  text-align: center;
  margin: 25px 0 10px;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i:hover {
  text-decoration: underline;
  cursor: pointer;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i p .j6uBnf0W_ruy9sK_SIO4 {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}
.mdJKUsO6IVB_KHxsorxg .YtX40q4kPgyY1kLWHR5i p .j6uBnf0W_ruy9sK_SIO4:hover {
  text-decoration: underline;
}
.mdJKUsO6IVB_KHxsorxg button {
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.4s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.mdJKUsO6IVB_KHxsorxg button:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
.mdJKUsO6IVB_KHxsorxg .ZUKc8FFOJWWao8EDdobQ {
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 1.5rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ccc;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}`, "",{"version":3,"sources":["webpack://./src/components/LoginForm/LoginForm.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,cAAA;IACA,mBAAA;EACF;EACA;IACE,cAAA;IACA,qBAAA;EACF;EACA;IACE,cAAA;IACA,mBAAA;EACF;AACF;AAEA;EACE;IACE,iFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,qFAAA;EAFF;EAKA;IACE,uFAAA;EAHF;AACF;AAOA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,WAAA;EACA,8DAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AALF;;AAQA;EACE,WAAA;AALF;;AAQA;EACE,eAAA;AALF;;AAQA,oBAAA;AACA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,6BAAA;AALF;AAME;EACE,oCAAA,EAAA,iCAAA;AAJJ;AAOE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,gCAAA;AALJ;AAQE;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,WAAA;AANJ;AAQI;EAEE,gBAAA;EACA,SAAA;AAPN;;AAYA,uBAAA;AAEA;EACE,eAAA;EACA,eAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,gBAAA;EACA,kDAAA;AAVF;AAYE;EACE,WAAA;EACA,WAAA;EACA,aAAA;EACA,8CAAA;AAVJ;AAaE;EACE,eAAA;EACA,WAAA;EACA,kBAAA;AAXJ;AAcE;EACE,cAAA;AAZJ;AAeE;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAbJ;AAeI;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,kBAAA;EACA,qBAAA;AAbN;AAeM;EACE,gBAAA;EACA,mBAAA;EACA,kDAAA;AAbR;AAiBM;EACE,iBAAA;EACA,eAAA;AAfR;AAqBI;EACE,eAAA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,2BAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AAnBd;AAoBM;EACE,0BAAA;EACA,WAAA;EACA,eAAA;AAlBR;AAwBE;EACE,iBAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AAtBJ;AAwBI;EACE,0BAAA;EACA,eAAA;AAtBN;AA0BM;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;AAxBR;AA0BQ;EACE,0BAAA;AAxBV;AA8BE;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AA5BZ;AA6BI;EACE,0CAAA;AA3BN;AA+BE;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AA7BZ","sourcesContent":["@keyframes labelCheckedAnimation {\r\n  0% {\r\n    color: #c3ffb3; \r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    color: #98fb98; \r\n    transform: scale(1.1);\r\n  }\r\n  100% {\r\n    color: #c3ffb3;\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n.LoginForm {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 110vh;\r\n  width: 100%;\r\n  background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.form {\r\n  width: 100%;\r\n}\r\n\r\nh4 {\r\n  font-size: 3rem;\r\n}\r\n\r\n/* Inputbox styles */\r\n.inputbox {\r\n  position: relative;\r\n  margin: 30px 0;\r\n  min-width: 30vh;\r\n  max-width: 40vh;\r\n  border-bottom: 2px solid #fff;\r\n  &:focus-within {\r\n    border-bottom-color: gold !important; /* Change border color on focus */\r\n  }\r\n\r\n  .label {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 5px;\r\n    transform: translateY(-40%);\r\n    color: #fff;\r\n    font-size: 1.25rem;\r\n    pointer-events: none;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\n  input {\r\n    width: 100%;\r\n    height: 60px;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bolder;\r\n    padding: 0 35px 0 5px;\r\n    color: #fff;\r\n\r\n    &:focus ~ label,\r\n    &:valid ~ label {\r\n      color: lightgray;\r\n      top: -5px;\r\n    }\r\n  }\r\n}\r\n\r\n/* Rest of the styles */\r\n\r\n.boxc {\r\n  min-width: 30vh;\r\n  max-width: 50vh;\r\n  position: relative;\r\n  border: 2px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem 3rem;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  overflow: hidden;\r\n  animation: shine 5s infinite linear;\r\n\r\n  .title {\r\n    width: 100%;\r\n    color: #fff;\r\n    padding: 10px;\r\n    text-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.5);\r\n  }\r\n\r\n  h1 {\r\n    font-size: 3rem;\r\n    color: #fff;\r\n    text-align: center;\r\n  }\r\n\r\n  .errorSign {\r\n    display: block;\r\n  }\r\n\r\n  .lost {\r\n    margin: 35px 2px;\r\n    font-size: 0.85rem;\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    label {\r\n      font-size: 1rem;\r\n      display: flex;\r\n      align-items: center;\r\n      padding: .1rem;\r\n      cursor: pointer;\r\n      -webkit-user-select: none;\r\n         -moz-user-select: none;\r\n              user-select: none;\r\n      margin-right: 1rem;\r\n      margin-left: -1.25rem;\r\n      \r\n      &:has(input:checked) {\r\n        color: darkgreen;\r\n        font-weight: bolder;\r\n        animation: labelCheckedAnimation 0.5s ease forwards;\r\n      }\r\n\r\n\r\n      input {\r\n        margin-right: 5px;\r\n        cursor: pointer;\r\n      }\r\n\r\n      \r\n    }\r\n\r\n    .forgotPassword {\r\n      font-size: 1rem;\r\n      color: #fff;\r\n      text-decoration: none;\r\n      font-weight: 600;\r\n      transition: color 0.3s ease;\r\n      -webkit-user-select: none;\r\n         -moz-user-select: none;\r\n              user-select: none;\r\n      &:hover {\r\n        text-decoration: underline;\r\n        color: #ccc;\r\n        cursor: pointer;\r\n      }\r\n    }\r\n  }\r\n\r\n  \r\n  .register {\r\n    font-size: 0.9rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin: 25px 0 10px;\r\n\r\n    &:hover {\r\n      text-decoration: underline;\r\n      cursor: pointer;\r\n    }\r\n\r\n    p {\r\n      .forgotPassword {\r\n        text-decoration: none;\r\n        color: #fff;\r\n        font-weight: 600;\r\n\r\n        &:hover {\r\n          text-decoration: underline;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  button {\r\n    color: white;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-radius: 40px;\r\n    background-color: rgb(87, 163, 115);\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n    transition: all 0.4s ease;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    &:hover {\r\n      background-color: rgba(255, 255, 255, 0.5);\r\n    }\r\n  }\r\n\r\n  .showPasswordIcon {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 50%;\r\n    font-size: 1.5rem;\r\n    transform: translateY(-50%);\r\n    cursor: pointer;\r\n    color: #ccc;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"LoginForm": `aOctDy4BV7cS3A3FgdnO`,
	"form": `O2NCX3pelTmVHMEJzuh5`,
	"inputbox": `slJPwttFXbjZj3iK5tpD`,
	"label": `RL0EW6mNmYV3dbwKgeGS`,
	"boxc": `mdJKUsO6IVB_KHxsorxg`,
	"shine": `XRJ4HljCDLmOJmSxDLVQ`,
	"title": `duhWcPoiFKzflZYTW6qA`,
	"errorSign": `PWpsrepqIxsSicJWBQv9`,
	"lost": `JAm91a8tmBcEN_9D7mVL`,
	"labelCheckedAnimation": `iB4SfQWGw0ZOCqRfypCd`,
	"forgotPassword": `j6uBnf0W_ruy9sK_SIO4`,
	"register": `YtX40q4kPgyY1kLWHR5i`,
	"showPasswordIcon": `ZUKc8FFOJWWao8EDdobQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MarkdownRenderer/MarkdownRenderer.module.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MarkdownRenderer/MarkdownRenderer.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.lAlzy78jQu0wwQDaaBJm {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  max-height: 50vh;
  overflow-y: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 45%;
}
.lAlzy78jQu0wwQDaaBJm h1, .lAlzy78jQu0wwQDaaBJm h2, .lAlzy78jQu0wwQDaaBJm h3, .lAlzy78jQu0wwQDaaBJm h4, .lAlzy78jQu0wwQDaaBJm h5, .lAlzy78jQu0wwQDaaBJm h6 {
  margin-top: 0;
  margin-bottom: 10px;
}
.lAlzy78jQu0wwQDaaBJm h1 {
  font-size: 28px;
}
.lAlzy78jQu0wwQDaaBJm h2 {
  font-size: 24px;
}
.lAlzy78jQu0wwQDaaBJm h3 {
  font-size: 20px;
}
.lAlzy78jQu0wwQDaaBJm p {
  margin-bottom: 10px;
}
.lAlzy78jQu0wwQDaaBJm a {
  color: #007bff;
  text-decoration: none;
}
.lAlzy78jQu0wwQDaaBJm pre {
  background-color: lightgreen;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}
.lAlzy78jQu0wwQDaaBJm .o8yzhuIR3ei2USj6R_9k {
  /* JSON syntax highlighting styles */
  color: #000; /* JSON text color */
  font-family: "Courier New", Courier, monospace; /* Use monospace font for JSON */
}
.lAlzy78jQu0wwQDaaBJm code {
  background-color: #f4f4f4;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: "Courier New", monospace;
}
.lAlzy78jQu0wwQDaaBJm ul, .lAlzy78jQu0wwQDaaBJm ol {
  margin-bottom: 10px;
}
.lAlzy78jQu0wwQDaaBJm li {
  margin-left: 20px;
}`, "",{"version":3,"sources":["webpack://./src/components/MarkdownRenderer/MarkdownRenderer.module.scss"],"names":[],"mappings":"AAEA;EACI,8BAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,yBAAA;EACA,UAAA;AADJ;AAII;EACI,aAAA;EACA,mBAAA;AAFR;AAKI;EACI,eAAA;AAHR;AAMI;EACI,eAAA;AAJR;AAOI;EACI,eAAA;AALR;AASI;EACI,mBAAA;AAPR;AAWI;EACI,cAAA;EACA,qBAAA;AATR;AAaI;EACI,4BAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;AAXR;AAcI;EACI,oCAAA;EACA,WAAA,EAAA,oBAAA;EACA,8CAAA,EAAA,gCAAA;AAZR;AAgBI;EACI,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qCAAA;AAdR;AAkBI;EACI,mBAAA;AAhBR;AAmBI;EACI,iBAAA;AAjBR","sourcesContent":["// MarkdownRenderer.module.scss\r\n\r\n.markdown-container {\r\n    font-family: Arial, sans-serif;\r\n    font-size: 16px;\r\n    line-height: 1.6;\r\n    color: #333;\r\n    max-height: 50vh;\r\n    overflow-y: auto;\r\n    padding: 1rem;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    background-color: #f9f9f9;\r\n    width: 45%;\r\n\r\n    // Style headings\r\n    h1, h2, h3, h4, h5, h6 {\r\n        margin-top: 0;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 28px;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 24px;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 20px;\r\n    }\r\n\r\n    // Style paragraphs\r\n    p {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    // Style links\r\n    a {\r\n        color: #007bff;\r\n        text-decoration: none;\r\n    }\r\n\r\n    // Style code blocks\r\n    pre {\r\n        background-color: lightgreen;\r\n        padding: 10px;\r\n        border-radius: 5px;\r\n        overflow-x: auto;\r\n    }\r\n\r\n    .json {\r\n        /* JSON syntax highlighting styles */\r\n        color: #000; /* JSON text color */\r\n        font-family: 'Courier New', Courier, monospace; /* Use monospace font for JSON */\r\n    }\r\n\r\n    // Style inline code\r\n    code {\r\n        background-color: #f4f4f4;\r\n        padding: 2px 4px;\r\n        border-radius: 4px;\r\n        font-family: 'Courier New', monospace;\r\n    }\r\n\r\n    // Style lists\r\n    ul, ol {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    li {\r\n        margin-left: 20px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"markdown-container": `lAlzy78jQu0wwQDaaBJm`,
	"json": `o8yzhuIR3ei2USj6R_9k`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes VLeMwo6zXkTSOx1NGU9o {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.SLZXaJInmBusSKJAiC7A {
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 8px lightgrey;
}
.SLZXaJInmBusSKJAiC7A .Yzgk56lCq7Zq2IQkbBwB {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.SLZXaJInmBusSKJAiC7A input {
  border: 0.1rem solid lightgrey;
  border-radius: 0.5rem;
  min-width: 30vw; /* Adjust width as needed */
}

.jYKTy3ZWAvpUGWbHDeNH {
  flex-shrink: 0; /* Prevent the logo from shrinking */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 9vw;
  margin: 0 auto; /* Center the logo horizontally */
}

.VhefOyE6KqL2INmTvax_ {
  display: flex;
  align-items: center;
  list-style: none;
}

.Vi729QB0vR8fTZ0UgVAQ {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration: none;
  transition: 0.3s ease;
}
.Vi729QB0vR8fTZ0UgVAQ:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: 0.3s ease;
}

.Vi729QB0vR8fTZ0UgVAQ .XmTS1C8VIV547MbqjHFC {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
}

.Vi729QB0vR8fTZ0UgVAQ .XmTS1C8VIV547MbqjHFC .J9UnnftTHXUkwLRjgCwj {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
}

.Vi729QB0vR8fTZ0UgVAQ .XmTS1C8VIV547MbqjHFC .IVj3kljTpbWeopBe4tgh {
  width: 32px;
  height: 32px;
}

@media (max-width: 768px) {
  .SLZXaJInmBusSKJAiC7A {
    flex-direction: column;
    align-items: flex-start; /* Align items to the start for vertical layout */
  }
  .SLZXaJInmBusSKJAiC7A .y9nMRtKLACz8uMKjMe86,
  .SLZXaJInmBusSKJAiC7A .VhefOyE6KqL2INmTvax_ {
    width: 100%;
  }
  input {
    width: 100%; /* Make the search bar occupy full width */
  }
  .Vi729QB0vR8fTZ0UgVAQ .XmTS1C8VIV547MbqjHFC .J9UnnftTHXUkwLRjgCwj {
    width: 1.5rem;
    height: 1.5rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACI;IACI,UAAA;EACN;EACE;IACI,UAAA;EACN;AACF;AAGA;EACI,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;EACA,+BAAA;AADJ;AAEI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;AAAR;AAEI;EACI,8BAAA;EACA,qBAAA;EACA,eAAA,EAAA,2BAAA;AAAR;;AAIA;EACI,cAAA,EAAA,oCAAA;EACA,kBAAA;EACA,SAAA;EACA,2BAAA;EACA,UAAA;EACA,cAAA,EAAA,iCAAA;AADJ;;AAGA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AAAJ;AACI;EACI,eAAA;EACA,qBAAA;EACA,qBAAA;AACR;;AAGA;EACI,aAAA;EACA,mBAAA;EACA,0CAAA;AAAJ;;AAGA;EACI,WAAA;EACA,YAAA;EACA,oBAAA;AAAJ;;AAGA;EACI,WAAA;EACA,YAAA;AAAJ;;AAGA;EACI;IACI,sBAAA;IACA,uBAAA,EAAA,iDAAA;EAAN;EAEM;;IAEI,WAAA;EAAV;EAIE;IACI,WAAA,EAAA,0CAAA;EAFN;EAKE;IACI,aAAA;IACA,cAAA;EAHN;AACF","sourcesContent":["@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n\r\n.Nav {\r\n    height: 8vh;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 0 1rem;\r\n    background-color: #ffffff;\r\n    box-shadow: 0 2px 8px lightgrey;\r\n    .innerNav {\r\n        width: 100%;\r\n        height: 100%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        position: relative;\r\n    }\r\n    input {\r\n        border: .1rem solid lightgrey;\r\n        border-radius: .5rem;\r\n        min-width: 30vw; /* Adjust width as needed */\r\n    }\r\n}\r\n\r\n.logo {\r\n    flex-shrink: 0; /* Prevent the logo from shrinking */\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 9vw;\r\n    margin: 0 auto; /* Center the logo horizontally */\r\n}\r\n.ul {\r\n    display: flex;\r\n    align-items: center;\r\n    list-style: none;\r\n}\r\n\r\n.navItem {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 1rem;\r\n    text-decoration: none;\r\n    transition: .3s ease;\r\n    &:hover {\r\n        cursor: pointer;\r\n        transform: scale(1.2);\r\n        transition: .3s ease;\r\n    }\r\n}\r\n\r\n.navItem .listItem {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.navItem .listItem .btnLogo {\r\n    width: 2rem; \r\n    height: 2rem; \r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.navItem .listItem .logSignup {\r\n    width: 32px;\r\n    height: 32px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .Nav {\r\n        flex-direction: column;\r\n        align-items: flex-start; /* Align items to the start for vertical layout */\r\n\r\n        .searchBar,\r\n        .ul {\r\n            width: 100%; \r\n        }\r\n    }\r\n\r\n    input {\r\n        width: 100%; /* Make the search bar occupy full width */\r\n    }\r\n\r\n    .navItem .listItem .btnLogo {\r\n        width: 1.5rem; \r\n        height: 1.5rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Nav": `SLZXaJInmBusSKJAiC7A`,
	"innerNav": `Yzgk56lCq7Zq2IQkbBwB`,
	"logo": `jYKTy3ZWAvpUGWbHDeNH`,
	"ul": `VhefOyE6KqL2INmTvax_`,
	"navItem": `Vi729QB0vR8fTZ0UgVAQ`,
	"listItem": `XmTS1C8VIV547MbqjHFC`,
	"btnLogo": `J9UnnftTHXUkwLRjgCwj`,
	"logSignup": `IVj3kljTpbWeopBe4tgh`,
	"searchBar": `y9nMRtKLACz8uMKjMe86`,
	"fadeIn": `VLeMwo6zXkTSOx1NGU9o`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NewPostForm/NewPostForm.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NewPostForm/NewPostForm.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.wekziSaaqwOLRFMJXHQ2 {
  width: 90%;
  background: linear-gradient(to bottom right, #7bbd86, #1f644b);
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  margin: 2rem auto 2rem;
  padding: 2rem;
}
.wekziSaaqwOLRFMJXHQ2 .q83xVIpdN9plzwBHguVi {
  margin: 0 0 1rem;
  color: white;
  text-shadow: 1px 1px 2px black;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .oIfat_Ocs4SldBNG2mHX {
  height: 2rem;
  border-radius: 0.2rem;
  border: 0.01rem solid black;
  width: 80%;
  margin: 0.1rem 0;
  font-size: 1rem;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .oIfat_Ocs4SldBNG2mHX:focus {
  outline: 0.1rem solid green;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .oIfat_Ocs4SldBNG2mHX:hover {
  transform: scale(1.0005);
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .DRQjw5t79oTsny9CdCMF {
  height: 6rem;
  border-radius: 0.2rem;
  width: 80%;
  margin: 0;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 0.01rem solid black;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .DRQjw5t79oTsny9CdCMF:focus {
  outline: 0.1rem solid green;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .DRQjw5t79oTsny9CdCMF:hover {
  transform: scale(1.0005);
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .cgJh9_cI3zRlHT3nHVWG {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .cgJh9_cI3zRlHT3nHVWG .GdWlXhkOK38PU0rT8j_A {
  font-size: 1rem;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .jTc77r50RjSsdPdWZC0t {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wekziSaaqwOLRFMJXHQ2 .aJu0J6aP6lo4xM7cgqBJ .jTc77r50RjSsdPdWZC0t:hover {
  background-color: green;
  border: 1px solid black;
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/components/NewPostForm/NewPostForm.module.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,8DAAA;EACA,0BAAA;EACA,qBAAA;EACA,sBAAA;EACA,aAAA;AACJ;AAAI;EACI,gBAAA;EACA,YAAA;EACA,8BAAA;AAER;AAAI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAER;AADQ;EACI,YAAA;EACA,qBAAA;EACA,2BAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;AAGZ;AAFY;EACI,2BAAA;AAIhB;AAFY;EACI,wBAAA;EACA,mDAAA;AAIhB;AADQ;EACI,YAAA;EACA,qBAAA;EACA,UAAA;EACA,SAAA;EACA,oBAAA;EACA,eAAA;EACA,2BAAA;AAGZ;AAFY;EACI,2BAAA;AAIhB;AAFY;EACI,wBAAA;EACA,mDAAA;AAIhB;AAAQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAEZ;AADY;EACI,eAAA;AAGhB;AAAQ;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AAEZ;AADY;EACI,uBAAA;EACA,uBAAA;EACA,YAAA;AAGhB","sourcesContent":[".NewPostForm {\r\n    width: 90%;\r\n    background: linear-gradient(to bottom right, #7bbd86, #1f644b);\r\n    border: .1rem solid black;\r\n    border-radius: .5rem;\r\n    margin: 2rem auto 2rem;\r\n    padding: 2rem;\r\n    .heading {\r\n        margin: 0 0 1rem;\r\n        color: white;\r\n        text-shadow: 1px 1px 2px black;\r\n    }\r\n    .Form {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        .textInput {\r\n            height: 2rem;\r\n            border-radius: .2rem;\r\n            border: .01rem solid black;\r\n            width: 80%;\r\n            margin: .1rem 0;\r\n            font-size: 1rem;\r\n            &:focus {\r\n                outline: .1rem solid green;\r\n            }\r\n            &:hover {\r\n                transform: scale(1.0005);\r\n                filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));\r\n            }\r\n        }\r\n        .textAreaInput {\r\n            height: 6rem;\r\n            border-radius: .2rem;\r\n            width: 80%;\r\n            margin: 0;\r\n            padding: .5rem 1rem;\r\n            font-size: 1rem;\r\n            border: .01rem solid black;\r\n            &:focus {\r\n                outline: .1rem solid green;\r\n            }\r\n            &:hover {\r\n                transform: scale(1.0005);\r\n                filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));\r\n            }\r\n\r\n        }\r\n        .checkboxContainer {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            .label {\r\n                font-size: 1rem;\r\n            }\r\n        }\r\n        .button {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            &:hover {\r\n                background-color: green;\r\n                border: 1px solid black;\r\n                color: white;\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"NewPostForm": `wekziSaaqwOLRFMJXHQ2`,
	"heading": `q83xVIpdN9plzwBHguVi`,
	"Form": `aJu0J6aP6lo4xM7cgqBJ`,
	"textInput": `oIfat_Ocs4SldBNG2mHX`,
	"textAreaInput": `DRQjw5t79oTsny9CdCMF`,
	"checkboxContainer": `cgJh9_cI3zRlHT3nHVWG`,
	"label": `GdWlXhkOK38PU0rT8j_A`,
	"button": `jTc77r50RjSsdPdWZC0t`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/PostList/PostList.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/PostList/PostList.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.kzarDYEms6C4W3RidlsQ {
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 0 auto;
}`, "",{"version":3,"sources":["webpack://./src/components/PostList/PostList.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,UAAA;EACA,sBAAA;EACA,cAAA;AACJ","sourcesContent":[".postList {\r\n    display: flex;\r\n    width: 90%;\r\n    flex-direction: column;\r\n    margin: 0 auto;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"postList": `kzarDYEms6C4W3RidlsQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Post/Post.module.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Post/Post.module.scss ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.kQzjKpTiHJLJ5WNNtTAD {
  width: 100%;
  margin: 0 0 1rem;
  padding: 2rem;
  min-height: 35vh;
  border: 0.1rem solid rgba(51, 86, 51, 0.3);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  color: black;
  box-shadow: 0 0 0.3rem var(--text-green);
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ .Ejt48lsnoA4ZbmXQ9mEH {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 30%;
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ .Ejt48lsnoA4ZbmXQ9mEH .GNEIaR8qK7NBA02JzXtR {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.Ejt48lsnoA4ZbmXQ9mEH {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.zyZ1yizzl53PY_7iYBNr {
  text-decoration: none;
  color: white;
  transition: 0.3s ease;
  max-width: 5rem;
}
.zyZ1yizzl53PY_7iYBNr:hover {
  transition: 0.3s ease;
  color: darkgreen;
}

.fhZSGhgZbMfuk8u4VeX_ {
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ .TFpNeZbQzatEa_RWFlAg {
  border-radius: 0.5rem;
  padding: 1rem;
  width: 40%;
  min-height: 20vh;
  font-size: 1.2rem;
  background-color: rgba(165, 214, 173, 0.4);
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ .mPJC7XtVzzjMjwQCovXc {
  display: flex;
  justify-content: center;
  align-items: center;
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ .mPJC7XtVzzjMjwQCovXc .eLY0wy1gk8_9VFdRuIGk {
  width: 3rem;
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ .mPJC7XtVzzjMjwQCovXc:hover .eLY0wy1gk8_9VFdRuIGk {
  filter: invert(1);
}

.mPJC7XtVzzjMjwQCovXc {
  width: 5rem;
}
.mPJC7XtVzzjMjwQCovXc:hover {
  border: 1px solid black;
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ .gIEF2c3lJWXfotyd8LAW {
  width: 5rem;
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ .Tv1PiRERxjOLRorlaY3P {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ .Tv1PiRERxjOLRorlaY3P .KKxm2e5dQLBmqHKANXwO {
  min-width: 5rem;
  margin: 1rem;
}

.kQzjKpTiHJLJ5WNNtTAD .zLlpgp3sQPJxkTwNEeQZ .Tv1PiRERxjOLRorlaY3P .KKxm2e5dQLBmqHKANXwO:hover {
  background-color: green;
  color: white;
}`, "",{"version":3,"sources":["webpack://./src/components/Post/Post.module.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,8DAAA;EACA,YAAA;EACA,wCAAA;AACJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,UAAA;AACJ;;AAEA;EACI,eAAA;EACA,mBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;AACJ;;AAEA;EACI,qBAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;AACJ;AAAI;EACI,qBAAA;EACA,gBAAA;AAER;;AAEA;EACI,qBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,qBAAA;EACA,aAAA;EACA,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,0CAAA;AACJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;EACI,iBAAA;AACJ;;AAEA;EACI,WAAA;AACJ;AAAI;EACI,uBAAA;AAER;;AAEA;EACI,WAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,eAAA;EACA,YAAA;AACJ;;AAEA;EACI,uBAAA;EACA,YAAA;AACJ","sourcesContent":[".Post {\r\n    width: 100%;\r\n    margin: 0 0 1rem;\r\n    padding: 2rem;\r\n    min-height: 35vh;\r\n    border: .1rem solid rgb(51, 86, 51, 0.3);\r\n    border-radius: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n    color: black;\r\n    box-shadow: 0 0 .3rem var(--text-green);\r\n}\r\n\r\n.Post .postContent {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.Post .postContent .TitleImgContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    width: 30%;\r\n}\r\n\r\n.Post .postContent .TitleImgContainer .projectTitle {\r\n    font-size: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.TitleImgContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.userName {\r\n    text-decoration: none;\r\n    color: white;\r\n    transition: .3s ease;\r\n    max-width: 5rem;\r\n    &:hover {\r\n        transition: .3s ease;\r\n        color: darkgreen;\r\n    }\r\n}\r\n\r\n.ProjectImage {\r\n    border-radius: .5rem;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.Post .postContent .projectDescription {\r\n    border-radius: .5rem;\r\n    padding: 1rem;\r\n    width: 40%;\r\n    min-height: 20vh;\r\n    font-size: 1.2rem;\r\n    background-color: rgb(165, 214, 173, .4);\r\n}\r\n\r\n.Post .postContent .ghBtn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.Post .postContent .ghBtn .ghImg {\r\n    width: 3rem;\r\n}\r\n\r\n.Post .postContent .ghBtn:hover .ghImg {\r\n    filter: invert(1);\r\n}\r\n\r\n.ghBtn {\r\n    width: 5rem;\r\n    &:hover {\r\n        border: 1px solid black;\r\n    }\r\n}\r\n\r\n.Post .postContent .LikeBtn {\r\n    width: 5rem;\r\n}\r\n\r\n.Post .postContent .btnContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.Post .postContent .btnContainer .button {\r\n    min-width: 5rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.Post .postContent .btnContainer .button:hover {\r\n    background-color: green;\r\n    color: white;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Post": `kQzjKpTiHJLJ5WNNtTAD`,
	"postContent": `zLlpgp3sQPJxkTwNEeQZ`,
	"TitleImgContainer": `Ejt48lsnoA4ZbmXQ9mEH`,
	"projectTitle": `GNEIaR8qK7NBA02JzXtR`,
	"userName": `zyZ1yizzl53PY_7iYBNr`,
	"ProjectImage": `fhZSGhgZbMfuk8u4VeX_`,
	"projectDescription": `TFpNeZbQzatEa_RWFlAg`,
	"ghBtn": `mPJC7XtVzzjMjwQCovXc`,
	"ghImg": `eLY0wy1gk8_9VFdRuIGk`,
	"LikeBtn": `gIEF2c3lJWXfotyd8LAW`,
	"btnContainer": `Tv1PiRERxjOLRorlaY3P`,
	"button": `KKxm2e5dQLBmqHKANXwO`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProfileImage/ProfileImage.module.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProfileImage/ProfileImage.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.xsUAsrpL8C1WDeULMZqQ {
  border: 3px solid var(--bg-color);
  height: 10rem;
  width: 10rem;
  border-radius: 40%;
  overflow: hidden;
}
.xsUAsrpL8C1WDeULMZqQ .g6ofyX0Nm0_6YhkDlr9M {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/components/ProfileImage/ProfileImage.module.scss"],"names":[],"mappings":"AAAA;EACI,iCAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AACJ;AAAI;EACI,WAAA;AAER","sourcesContent":[".imgContainer {\r\n    border: 3px solid var(--bg-color);\r\n    height: 10rem;\r\n    width: 10rem;\r\n    border-radius: 40%;\r\n    overflow: hidden;\r\n    .ProfileImage {\r\n        width: 100%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"imgContainer": `xsUAsrpL8C1WDeULMZqQ`,
	"ProfileImage": `g6ofyX0Nm0_6YhkDlr9M`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ResetPassword/ResetPassword.module.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ResetPassword/ResetPassword.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes WBWlcBCjwwKL4hZmRqIS {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.YgECdOP6ynMaHqn_K8cT {
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border-bottom: 2px solid #ccc;
  box-shadow: none;
  min-width: 30vh;
  max-width: 70vh;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 2rem 3rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  user-select: none;
  overflow: hidden;
  animation: WBWlcBCjwwKL4hZmRqIS 5s infinite linear;
}
.YgECdOP6ynMaHqn_K8cT h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Inter Tight";
  color: white;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG {
  margin-bottom: 20px;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG label {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: white;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG input {
  min-width: 30vw;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0;
  color: white;
  transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */
  width: 30vh;
  font-weight: bolder;
  padding: 0;
}
.YgECdOP6ynMaHqn_K8cT .SpwWq6spR4t_4XdWlyRG input:focus {
  border-bottom-color: gold; /* Change border-bottom color on focus */
}
.YgECdOP6ynMaHqn_K8cT .x8jPB_4eVclrHccPXSI_ {
  color: #ff0000;
  font-size: 1rem;
  margin-top: 3px;
  margin-left: 5px;
}
.YgECdOP6ynMaHqn_K8cT .MVTgnJEz0qLPUgZcJaVM {
  color: #00cc00;
  font-size: 1rem;
  margin-top: 5px;
}
.YgECdOP6ynMaHqn_K8cT .fxZR2_j5SbykUaJYKkyH {
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s ease;
  margin-bottom: 1rem;
}
.YgECdOP6ynMaHqn_K8cT .fxZR2_j5SbykUaJYKkyH:hover {
  background-color: rgba(255, 255, 255, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/components/ResetPassword/ResetPassword.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,iFAAA;EACF;EAEA;IACE,qFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,uFAAA;EAFF;AACF;AAMA;EACI,iBAAA;EACA,kBAAA;EACA,6BAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,0CAAA;EACA,mBAAA;EACA,kBAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;EACR,iBAAA;EACA,gBAAA;EACA,kDAAA;AAJJ;AAMI;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,0BAAA;EACA,YAAA;AAJN;AAOI;EACE,mBAAA;AALN;AAOM;EACE,iBAAA;EACA,kBAAA;EACA,YAAA;AALR;AAQM;EACE,eAAA;EACA,uBAAA;EACA,YAAA;EACA,8BAAA;EACA,iBAAA;EACA,aAAA;EACA,gBAAA;EACA,YAAA;EACA,yCAAA,EAAA,2CAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AANR;AASM;EACE,yBAAA,EAAA,wCAAA;AAPR;AAWI;EACE,cAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AATN;AAYI;EACE,cAAA;EACA,eAAA;EACA,eAAA;AAVN;AAaI;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;AAXN;AAaM;EACE,0CAAA;AAXR","sourcesContent":["@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n.container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: transparent;\r\n    border-bottom: 2px solid #ccc;\r\n    box-shadow: none;\r\n    min-width: 30vh;\r\n    max-width: 70vh;\r\n    border: 2px solid rgba(255, 255, 255, 0.5);\r\n    border-radius: 20px;\r\n    padding: 2rem 3rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    user-select: none;\r\n    overflow: hidden;\r\n    animation: shine 5s infinite linear;\r\n  \r\n    h1 {\r\n      font-size: 2rem;\r\n      text-align: center;\r\n      margin-bottom: 20px;\r\n      font-family: \"Inter Tight\";\r\n      color: white;\r\n    }\r\n  \r\n    .formGroup {\r\n      margin-bottom: 20px;\r\n  \r\n      label {\r\n        font-size: 1.2rem;\r\n        margin-bottom: 5px;\r\n        color: white;\r\n      }\r\n  \r\n      input {\r\n        min-width: 30vw;\r\n        background: transparent;\r\n        border: none;\r\n        border-bottom: 1px solid white;\r\n        font-size: 1.2rem;\r\n        padding: 1rem;\r\n        border-radius: 0;\r\n        color: white;\r\n        transition: border-bottom-color 0.3s ease; /* Add transition for border-bottom color */\r\n        width: 30vh;\r\n        font-weight: bolder;\r\n        padding: 0;\r\n      }\r\n  \r\n      input:focus {\r\n        border-bottom-color: gold; /* Change border-bottom color on focus */\r\n      }\r\n    }\r\n  \r\n    .error {\r\n      color: #ff0000;\r\n      font-size: 1rem;\r\n      margin-top: 3px;\r\n      margin-left: 5px;\r\n    }\r\n  \r\n    .success {\r\n      color: #00cc00;\r\n      font-size: 1rem;\r\n      margin-top: 5px;\r\n    }\r\n  \r\n    .button {\r\n      color: white;\r\n      width: 100%;\r\n      height: 40px;\r\n      border-radius: 40px;\r\n      background-color: rgb(87, 163, 115);\r\n      border: none;\r\n      outline: none;\r\n      cursor: pointer;\r\n      font-size: 1.25rem;\r\n      font-weight: 600;\r\n      display: inline-flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      text-decoration: none;\r\n      transition: all 0.4s ease;\r\n      margin-bottom: 1rem;\r\n    \r\n      &:hover {\r\n        background-color: rgba(255, 255, 255, 0.5);\r\n      }\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": `YgECdOP6ynMaHqn_K8cT`,
	"shine": `WBWlcBCjwwKL4hZmRqIS`,
	"formGroup": `SpwWq6spR4t_4XdWlyRG`,
	"error": `x8jPB_4eVclrHccPXSI_`,
	"success": `MVTgnJEz0qLPUgZcJaVM`,
	"button": `fxZR2_j5SbykUaJYKkyH`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SearchUsersForm/SearchUsersForm.module.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SearchUsersForm/SearchUsersForm.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nyTmzuFbpzDJU7AD8sUf:focus {
  border: 0.1rem solid green;
}`, "",{"version":3,"sources":["webpack://./src/components/SearchUsersForm/SearchUsersForm.module.scss"],"names":[],"mappings":"AAAA;EACI,0BAAA;AACJ","sourcesContent":[".Search:focus {\r\n    border: .1rem solid green;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Search": `nyTmzuFbpzDJU7AD8sUf`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes KiN27HiRvEoQXCiZZer1 {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
/* Body styles */
.xCrr_Bbs2iSq5QC2RUqr {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.O3kJQXyeVBVPoVbc0TQA {
  min-width: 30vh;
  max-width: 43.3vh;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  animation: KiN27HiRvEoQXCiZZer1 5s infinite linear;
}
.O3kJQXyeVBVPoVbc0TQA h1 {
  font-size: 3rem;
  color: #fff;
  text-align: center;
  padding-top: 0.64rem;
}

.G5WQETTTkTlRpPef5KUY {
  position: relative;
  margin: 30px 0;
  border-bottom: 2px solid #fff;
  position: relative;
  margin: 30px 0;
  min-width: 30vh;
  width: 30vh;
  border-bottom: 2px solid #fff;
}
.G5WQETTTkTlRpPef5KUY:focus-within {
  border-bottom-color: gold !important;
}

.G5WQETTTkTlRpPef5KUY label {
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  color: #fff;
  font-size: 1.25rem;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.G5WQETTTkTlRpPef5KUY select {
  width: 100%;
  height: 80px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  color: #fff;
}

.G5WQETTTkTlRpPef5KUY select option {
  font-size: 1.25rem;
  background-color: #081C15;
  border-radius: 2px;
  color: #fff;
}

.G5WQETTTkTlRpPef5KUY input:focus ~ label,
.G5WQETTTkTlRpPef5KUY input:valid ~ label {
  color: lightgray;
  top: -5px;
}

.G5WQETTTkTlRpPef5KUY input {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  color: #fff;
  font-weight: bolder;
  padding: 0;
}

.emIz9U5VSVFVmZPhEvKw {
  margin-top: 20px;
  font-size: 0.85rem;
  color: #fff;
  display: flex;
  justify-content: center;
}

.emIz9U5VSVFVmZPhEvKw p a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.emIz9U5VSVFVmZPhEvKw p:hover {
  text-decoration: underline;
  cursor: pointer;
}

button {
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(87, 163, 115);
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.4s ease;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.G5WQETTTkTlRpPef5KUY select {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;
  color: #fff;
}

select:hover {
  cursor: pointer;
}

option {
  color: black;
}

.JtQI_Hm4R0_7b5aQ1Jdw {
  font-size: 1.25rem;
  color: #fff;
  text-align: center;
}

.JtQI_Hm4R0_7b5aQ1Jdw p a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}

.JtQI_Hm4R0_7b5aQ1Jdw p a:hover {
  text-decoration: underline;
}

.XEq2Dm2tfurQtGWxCT44 {
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 1.5rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ccc;
}`, "",{"version":3,"sources":["webpack://./src/components/SignUpForm/SignUpForm.module.scss"],"names":[],"mappings":"AAEA;EACE;IACE,iFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,qFAAA;EAFF;EAKA;IACE,uFAAA;EAHF;AACF;AAOA,gBAAA;AACA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;EACA,8DAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;AALF;;AAQA;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,0CAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kDAAA;AALF;AAOE;EACE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;AALJ;;AASA;EACE,kBAAA;EACA,cAAA;EACA,6BAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,WAAA;EACA,6BAAA;AANF;AAQE;EACE,oCAAA;AANJ;;AAUA;EACE,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,gCAAA;EACA,yBAAA;EACG,sBAAA;EACK,iBAAA;AAPV;;AAUA;EACI,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;AAPJ;;AAUE;EACE,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;AAPJ;;AAUE;;EAEE,gBAAA;EACA,SAAA;AAPJ;;AAUA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,UAAA;AAPF;;AAUA;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;AAPF;;AAUA;EACE,WAAA;EACA,qBAAA;EACA,gBAAA;AAPF;;AAUA;EACI,0BAAA;EACA,eAAA;AAPJ;;AAUA;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mCAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;AAPF;;AAUA;EACE,0CAAA;AAPF;;AAUA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;EACE,YAAA;AAPF;;AAUA;EACE,kBAAA;EACA,WAAA;EACA,kBAAA;AAPF;;AAUA;EACE,qBAAA;EACA,WAAA;EACA,gBAAA;AAPF;;AAUA;EACE,0BAAA;AAPF;;AAUA;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;EACA,2BAAA;EACA,eAAA;EACA,WAAA;AAPF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');\r\n\r\n@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n/* Body styles */\r\n.body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n  background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.boxc {\r\n  min-width: 30vh;\r\n  max-width: 43.3vh;\r\n  position: relative;\r\n  border: 2px solid rgba(255, 255, 255, 0.5);\r\n  border-radius: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 2rem 3rem;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  overflow: hidden; \r\n  animation: shine 5s infinite linear;\r\n\r\n  h1 {\r\n    font-size: 3rem; \r\n    color: #fff;\r\n    text-align: center;\r\n    padding-top: .64rem;\r\n  }\r\n}\r\n\r\n.inputbox {\r\n  position: relative;\r\n  margin: 30px 0;\r\n  border-bottom: 2px solid #fff;\r\n  position: relative;\r\n  margin: 30px 0;\r\n  min-width: 30vh;\r\n  width: 30vh;\r\n  border-bottom: 2px solid #fff;\r\n  \r\n  &:focus-within {\r\n    border-bottom-color: gold !important; \r\n  }\r\n}\r\n\r\n.inputbox label {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-40%);\r\n  color: #fff;\r\n  font-size: 1.25rem; \r\n  pointer-events: none;\r\n  transition: all 0.3s ease-in-out;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.inputbox select {\r\n    width: 100%;\r\n    height: 80px;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 1.25rem;\r\n    color: #fff;\r\n  }\r\n  \r\n  .inputbox select option {\r\n    font-size: 1.25rem;\r\n    background-color: #081C15; \r\n    border-radius: 2px;\r\n    color: #fff; \r\n  }\r\n\r\n  .inputbox input:focus ~ label,\r\n  .inputbox input:valid ~ label {\r\n    color: lightgray;\r\n    top: -5px;\r\n  }\r\n  \r\n.inputbox input {\r\n  width: 100%;\r\n  height: 60px;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.25rem;\r\n  color: #fff;\r\n  font-weight: bolder;\r\n  padding: 0;\r\n}\r\n\r\n.login {\r\n  margin-top: 20px; \r\n  font-size: 0.85rem;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.login p a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-weight: 600;\r\n}\r\n\r\n.login p:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  color: white;\r\n  width: 100%;\r\n  height: 40px;\r\n  border-radius: 40px;\r\n  background-color: rgb(87, 163, 115);\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-size: 1.25rem;\r\n  font-weight: 600;\r\n  transition: all 0.4s ease;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.inputbox select {\r\n  width: 100%;\r\n  height: 60px;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.25rem;\r\n  color: #fff;\r\n}\r\n\r\nselect:hover {\r\n  cursor: pointer;\r\n}\r\n\r\noption {\r\n  color: black;\r\n}\r\n\r\n.register {\r\n  font-size: 1.25rem;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.register p a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-weight: 600;\r\n}\r\n\r\n.register p a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.showPasswordIcon {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 50%;\r\n  font-size: 1.5rem;\r\n  transform: translateY(-50%);\r\n  cursor: pointer;\r\n  color: #ccc;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"body": `xCrr_Bbs2iSq5QC2RUqr`,
	"boxc": `O3kJQXyeVBVPoVbc0TQA`,
	"shine": `KiN27HiRvEoQXCiZZer1`,
	"inputbox": `G5WQETTTkTlRpPef5KUY`,
	"login": `emIz9U5VSVFVmZPhEvKw`,
	"register": `JtQI_Hm4R0_7b5aQ1Jdw`,
	"showPasswordIcon": `XEq2Dm2tfurQtGWxCT44`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Galdeano&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Buginese&family=Sulphur+Point:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --heading-color: rgb(78, 91, 49);
  --bg-color: rgb(244, 246, 240);
  --btn-animation: rgba(219, 171, 171, 0.3);
  --input-color: rgb(87, 8, 8);
  --nav-border: rgba(219, 171, 171, 0.3);
  --text-red: rgb(237, 100, 100);
  --text-green: rgb(51, 86, 51);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Inter Tight", Verdana, Tahoma, sans-serif;
}

body {
  background-color: var(--bg-color);
}

input:-webkit-autofill {
  -webkit-transition: background-color 0s 99999s;
  transition: background-color 0s 99999s;
}

input:-webkit-autofill:focus {
  background-color: inherit !important;
}`, "",{"version":3,"sources":["webpack://./src/index.module.scss"],"names":[],"mappings":"AAEA;EACI,gCAAA;EACA,8BAAA;EACA,yCAAA;EACA,4BAAA;EACA,sCAAA;EACA,8BAAA;EACA,6BAAA;AACJ;;AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;EACA,uDAAA;AACJ;;AAEA;EACI,iCAAA;AACJ;;AAEA;EACI,8CAAA;EACA,sCAAA;AACJ;;AAEE;EACE,oCAAA;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Galdeano&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Buginese&family=Sulphur+Point:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');\r\n:root {\r\n    --heading-color: rgb(78, 91, 49);\r\n    --bg-color: rgb(244, 246, 240);\r\n    --btn-animation: rgba(219, 171, 171, 0.3);\r\n    --input-color: rgb(87, 8, 8);\r\n    --nav-border: rgba(219, 171, 171, 0.3);\r\n    --text-red: rgb(237, 100, 100);\r\n    --text-green: rgb(51, 86, 51);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: \"Inter Tight\", Verdana, Tahoma, sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: var(--bg-color);\r\n}\r\n\r\ninput:-webkit-autofill {\r\n    -webkit-transition: background-color 0s 99999s;\r\n    transition: background-color 0s 99999s;\r\n  }\r\n  \r\n  input:-webkit-autofill:focus {\r\n    background-color: inherit !important;\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPassword/ForgotPassword.module.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPassword/ForgotPassword.module.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.luBJirBC3AbIwQNsEypk {
  width: 100%;
  height: 100%;
  background-color: white;
  margin: 2vh auto;
  padding: 1rem 0;
}
.luBJirBC3AbIwQNsEypk .CgjxyfEdobTkp_s1g1uU {
  padding: 20px;
  border: none;
}
.luBJirBC3AbIwQNsEypk .dEySatDVVilAzS3bqI9Z {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.luBJirBC3AbIwQNsEypk textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid black;
  border-radius: 5px;
  resize: none;
}
.luBJirBC3AbIwQNsEypk button {
  padding: 10px;
  background-color: rgb(250, 250, 250);
  color: rgb(88, 85, 85);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid black;
  width: auto;
  margin: 0 auto;
}
.luBJirBC3AbIwQNsEypk button:hover {
  background-color: rgb(87, 163, 115);
  border: 1px solid black;
  transform: scale(1.01);
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
}
.luBJirBC3AbIwQNsEypk .XPxNjc5GISdopuQ98rk6 {
  margin-top: 20px;
}
.luBJirBC3AbIwQNsEypk .vCHNX8UaVIhE3i6IOusO {
  background-color: white;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}
.luBJirBC3AbIwQNsEypk .vCHNX8UaVIhE3i6IOusO h3, .luBJirBC3AbIwQNsEypk .vCHNX8UaVIhE3i6IOusO p {
  color: black;
}
.luBJirBC3AbIwQNsEypk .vCHNX8UaVIhE3i6IOusO img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
.luBJirBC3AbIwQNsEypk ._NMlzyl2SLslAiokZ3aS {
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}
.luBJirBC3AbIwQNsEypk .HPoDdNDxi0HMP2hrM9Ts {
  color: black;
  cursor: pointer;
}
.luBJirBC3AbIwQNsEypk .HPoDdNDxi0HMP2hrM9Ts:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .luBJirBC3AbIwQNsEypk .dEySatDVVilAzS3bqI9Z {
    flex-direction: column;
  }
  .luBJirBC3AbIwQNsEypk button {
    width: 100%;
    margin-left: 0;
  }
  .luBJirBC3AbIwQNsEypk .CgjxyfEdobTkp_s1g1uU, .luBJirBC3AbIwQNsEypk .vCHNX8UaVIhE3i6IOusO, .luBJirBC3AbIwQNsEypk ._NMlzyl2SLslAiokZ3aS {
    padding: 10px;
    margin-bottom: 10px;
  }
  .luBJirBC3AbIwQNsEypk .vCHNX8UaVIhE3i6IOusO h3, .luBJirBC3AbIwQNsEypk .vCHNX8UaVIhE3i6IOusO p, .luBJirBC3AbIwQNsEypk .HPoDdNDxi0HMP2hrM9Ts {
    font-size: smaller;
  }
}`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/HomePage.module.scss"],"names":[],"mappings":"AACA;EACI,WAAA;EACA,YAAA;EACA,uBAAA;EACA,gBAAA;EACA,eAAA;AAAJ;AACA;EACI,aAAA;EACA,YAAA;AACJ;AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AAAJ;AAGA;EACI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,YAAA;AADJ;AAIA;EACI,aAAA;EACA,oCAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;EACA,sCAAA;EACA,uBAAA;EACA,WAAA;EACA,cAAA;AAFJ;AAKA;EACI,mCAAA;EACA,uBAAA;EACA,sBAAA;EACA,mDAAA;AAHJ;AAMA;EACI,gBAAA;AAJJ;AAOA;EACI,uBAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;AALJ;AAQA;EACI,YAAA;AANJ;AASA;EACI,eAAA;EACA,YAAA;EACA,kBAAA;AAPJ;AAUA;EACI,uBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;AARJ;AAWA;EACI,YAAA;EACA,eAAA;AATJ;AAYA;EACI,0BAAA;AAVJ;AAcA;EACI;IACI,sBAAA;EAZN;EAeE;IACI,WAAA;IACA,cAAA;EAbN;EAiBE;IACI,aAAA;IACA,mBAAA;EAfN;EAmBE;IACI,kBAAA;EAjBN;AACF","sourcesContent":["\r\n.HomePage {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: white;\r\n    margin: 2vh auto;\r\n    padding: 1rem 0;\r\n.homePage {\r\n    padding: 20px;\r\n    border: none;\r\n}\r\n\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\ntextarea {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    resize: none;\r\n}\r\n\r\nbutton {\r\n    padding: 10px;\r\n    background-color: rgb(250, 250, 250);\r\n    color: rgb(88, 85, 85);\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n    border: 1px solid black;\r\n    width: auto; \r\n    margin: 0 auto; \r\n}\r\n\r\nbutton:hover {\r\n    background-color:rgb(87, 163, 115);\r\n    border: 1px solid black;\r\n    transform: scale(1.01);\r\n    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n.postList {\r\n    margin-top: 20px;\r\n}\r\n\r\n.post {\r\n    background-color: white;\r\n    border: 2px solid rgb(0, 0, 0);\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.post h3, .post p {\r\n    color: black;\r\n}\r\n\r\n.post img {\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 5px;\r\n}\r\n\r\n.userList {\r\n    background-color: white;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.user {\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n\r\n.user:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n    .form {\r\n        flex-direction: column;\r\n    }\r\n\r\n    button {\r\n        width: 100%; \r\n        margin-left: 0;\r\n    }\r\n\r\n   \r\n    .homePage, .post, .userList {\r\n        padding: 10px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n   \r\n    .post h3, .post p, .user {\r\n        font-size: smaller; \r\n    }\r\n}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"HomePage": `luBJirBC3AbIwQNsEypk`,
	"homePage": `CgjxyfEdobTkp_s1g1uU`,
	"form": `dEySatDVVilAzS3bqI9Z`,
	"postList": `XPxNjc5GISdopuQ98rk6`,
	"post": `vCHNX8UaVIhE3i6IOusO`,
	"userList": `_NMlzyl2SLslAiokZ3aS`,
	"user": `HPoDdNDxi0HMP2hrM9Ts`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.z1XFB0qbBjHblp8c_F5M {
  margin: 5vh auto 0;
  width: 100%;
  height: 100%;
  padding: 2rem 10rem;
  display: flex;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg {
  width: 60%;
  max-height: 50rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-height: 40rem;
  background: linear-gradient(to bottom right, #7bbd86, #16523c);
  border-radius: 0.5rem;
  padding: 2rem;
  border: 0.1rem solid green;
  box-shadow: 0 0 0.3rem darkgreen;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .syKW9dLz4EwS_wpHk6_0 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .dbIMdhqIGQg9JtZeKmrK {
  color: black;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH {
  width: 15rem;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .VTiGYB_vr7yJA7Vk5uTj {
  background-color: lightgrey;
  border-radius: 100%;
  width: 4rem;
  transition: 0.3s ease;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .VTiGYB_vr7yJA7Vk5uTj:hover {
  filter: invert(100%);
  transition: 0.3s ease;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .f9PniY17HdeQBxVJqbhw {
  background-color: lightgrey;
  border-radius: 100%;
  width: 4rem;
  padding: 1rem;
  transition: 0.3s ease;
}
.z1XFB0qbBjHblp8c_F5M .Fn3Y8z6cyE3sFTgZXhsg .C3y4TdU4vKMpvL4_wj8H .LG29adQOef4sgu1x7iuH .f9PniY17HdeQBxVJqbhw:hover {
  filter: invert(100%);
  transition: 0.3s ease;
}`, "",{"version":3,"sources":["webpack://./src/pages/ProfilePage/ProfilePage.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;AACJ;AAAI;EACI,UAAA;EACA,iBAAA;AAER;AADQ;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;EACA,UAAA;EACA,iBAAA;EACA,8DAAA;EACA,qBAAA;EACA,aAAA;EACA,0BAAA;EACA,gCAAA;AAGZ;AAFY;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAIhB;AAFY;EACI,YAAA;AAIhB;AAFY;EACI,YAAA;EACA,aAAA;EACA,6BAAA;EACA,qBAAA;AAIhB;AAHgB;EACI,2BAAA;EACA,mBAAA;EACA,WAAA;EACA,qBAAA;AAKpB;AAJoB;EACI,oBAAA;EACA,qBAAA;AAMxB;AAHgB;EACI,2BAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;AAKpB;AAJoB;EACI,oBAAA;EACA,qBAAA;AAMxB","sourcesContent":[".ProfilePage {\r\n    margin: 5vh auto 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 2rem 10rem;\r\n    display: flex;\r\n    .topContainer {\r\n        width: 60%;\r\n        max-height: 50rem;\r\n        .userContainer {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-around;\r\n            align-items: center;\r\n            width: 90%;\r\n            max-height: 40rem;\r\n            background: linear-gradient(to bottom right, #7bbd86, #16523c);\r\n            border-radius: .5rem;\r\n            padding: 2rem;\r\n            border: .1rem solid green;\r\n            box-shadow: 0 0 .3rem darkgreen;\r\n            .imgContainer {\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: center;\r\n                align-items: center;\r\n                width: 15rem;\r\n            }\r\n            .userBio {\r\n                color: black;\r\n            }\r\n            .userLinks {\r\n                width: 15rem;\r\n                display: flex;\r\n                justify-content: space-evenly;\r\n                margin-bottom: 1.5rem;\r\n                .ghLogo {\r\n                    background-color: lightgrey;\r\n                    border-radius: 100%;\r\n                    width: 4rem;\r\n                    transition: .3s ease;\r\n                    &:hover {\r\n                        filter: invert(100%);\r\n                        transition: .3s ease;\r\n                    }\r\n                }\r\n                .portfolioLogo {\r\n                    background-color: lightgrey;\r\n                    border-radius: 100%;\r\n                    width: 4rem;\r\n                    padding: 1rem;\r\n                    transition: .3s ease;\r\n                    &:hover {\r\n                        filter: invert(100%);\r\n                        transition: .3s ease;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProfilePage": `z1XFB0qbBjHblp8c_F5M`,
	"topContainer": `Fn3Y8z6cyE3sFTgZXhsg`,
	"userContainer": `C3y4TdU4vKMpvL4_wj8H`,
	"imgContainer": `syKW9dLz4EwS_wpHk6_0`,
	"userBio": `dbIMdhqIGQg9JtZeKmrK`,
	"userLinks": `LG29adQOef4sgu1x7iuH`,
	"ghLogo": `VTiGYB_vr7yJA7Vk5uTj`,
	"portfolioLogo": `f9PniY17HdeQBxVJqbhw`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/SettingsPage/SettingsPage.module.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/SettingsPage/SettingsPage.module.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes c1Qez6OSS0nHpXwiLCAY {
  0%, 100% {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  25% {
    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);
  }
}
.thCg_3UQm0Dn3hMX99NQ {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: c1Qez6OSS0nHpXwiLCAY 5s infinite linear;
}
.thCg_3UQm0Dn3hMX99NQ .eGXYe2I6MmqqeAmPBxqs {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: black;
  text-shadow: none;
  text-align: center;
}
.thCg_3UQm0Dn3hMX99NQ label {
  display: block;
  font-size: 16px;
  color: black;
}
.thCg_3UQm0Dn3hMX99NQ input[type=text],
.thCg_3UQm0Dn3hMX99NQ input[type=file] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid black;
  background-color: white;
  margin: 0;
}
.thCg_3UQm0Dn3hMX99NQ img {
  max-width: 100%;
  margin-top: 10px;
  border-radius: 4px;
}
.thCg_3UQm0Dn3hMX99NQ button {
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid black;
  transition: transform 0.3s ease;
}
.thCg_3UQm0Dn3hMX99NQ button:hover {
  background-color: rgb(87, 163, 115);
  border: 1px solid black;
  transform: scale(1.0002);
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
}`, "",{"version":3,"sources":["webpack://./src/pages/SettingsPage/SettingsPage.module.scss"],"names":[],"mappings":"AAAA;EACE;IACE,iFAAA;EACF;EAEA;IACE,qFAAA;EAAF;EAGA;IACE,qFAAA;EADF;EAIA;IACE,uFAAA;EAFF;AACF;AAMA;EACI,gBAAA;EACA,cAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,wCAAA;EACA,gBAAA;EACA,kDAAA;AAJJ;AAMG;EACG,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;AAJN;AAOI;EACE,cAAA;EACA,eAAA;EACA,YAAA;AALN;AAQI;;EAEE,WAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,uBAAA;EACA,uBAAA;EACA,SAAA;AANN;AASI;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;AAPN;AAUI;EACE,eAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,uBAAA;EACA,+BAAA;AARN;AAWI;EACE,mCAAA;EACA,uBAAA;EACA,wBAAA;EACA,mDAAA;AATN","sourcesContent":["@keyframes shine {\r\n  0%, 100% {\r\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  25% {\r\n    box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  50% {\r\n    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset 0 1px 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n  75% {\r\n    box-shadow: -1px 0 10px 1px rgba(0, 0, 0, 0.2), \r\n                inset -1px 0 2px 1px rgba(0, 0, 0, 0.2);\r\n  }\r\n}\r\n\r\n.settingsPage {\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    background: white;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden; \r\n    animation: shine 5s infinite linear;\r\n  \r\n   .editTitle {\r\n      font-size: 2.2rem;\r\n      margin-bottom: 20px;\r\n      color: black;\r\n      text-shadow: none;\r\n      text-align: center;\r\n    }\r\n  \r\n    label {\r\n      display: block;\r\n      font-size: 16px;\r\n      color: black;\r\n    }\r\n  \r\n    input[type=\"text\"],\r\n    input[type=\"file\"] {\r\n      width: 100%;\r\n      padding: 8px;\r\n      font-size: 16px;\r\n      border-radius: 4px;\r\n      border: 1px solid black;\r\n      background-color: white;\r\n      margin: 0;\r\n    }\r\n  \r\n    img {\r\n      max-width: 100%;\r\n      margin-top: 10px;\r\n      border-radius: 4px;\r\n    }\r\n  \r\n    button {\r\n      font-size: 16px;\r\n      border: none;\r\n      border-radius: 4px;\r\n      cursor: pointer;\r\n      border: 1px solid black;\r\n      transition: transform 0.3s ease;\r\n    }\r\n  \r\n    button:hover {\r\n      background-color: rgb(87, 163, 115);\r\n      border: 1px solid black;\r\n      transform: scale(1.0002);\r\n      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));\r\n    }\r\n  }\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"settingsPage": `thCg_3UQm0Dn3hMX99NQ`,
	"shine": `c1Qez6OSS0nHpXwiLCAY`,
	"editTitle": `eGXYe2I6MmqqeAmPBxqs`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.module.scss":
/*!*****************************!*\
  !*** ./src/App.module.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/App.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Button/Button.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Button/Button.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Button.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Button_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CommentForm/CommentForm.module.scss":
/*!************************************************************!*\
  !*** ./src/components/CommentForm/CommentForm.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./CommentForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CommentForm/CommentForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CommentForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/CustomerSupport/CustomerSupport.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/CustomerSupport/CustomerSupport.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./CustomerSupport.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/CustomerSupport/CustomerSupport.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_CustomerSupport_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/FollowList/FollowList.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/FollowList/FollowList.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./FollowList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/FollowList/FollowList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_FollowList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Follow/Follow.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Follow/Follow.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Follow_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Follow.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Follow/Follow.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Follow_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Follow_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Follow_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Follow_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss":
/*!**************************************************************************!*\
  !*** ./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ForgotPasswordForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ForgotPasswordForm/ForgotPasswordForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPasswordForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/LikeBtn/LikeBtn.module.scss":
/*!****************************************************!*\
  !*** ./src/components/LikeBtn/LikeBtn.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./LikeBtn.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LikeBtn/LikeBtn.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LikeBtn_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/LoginForm/LoginForm.module.scss":
/*!********************************************************!*\
  !*** ./src/components/LoginForm/LoginForm.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/LoginForm/LoginForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/MarkdownRenderer/MarkdownRenderer.module.scss":
/*!**********************************************************************!*\
  !*** ./src/components/MarkdownRenderer/MarkdownRenderer.module.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MarkdownRenderer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./MarkdownRenderer.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/MarkdownRenderer/MarkdownRenderer.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MarkdownRenderer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MarkdownRenderer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MarkdownRenderer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_MarkdownRenderer_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NewPostForm/NewPostForm.module.scss":
/*!************************************************************!*\
  !*** ./src/components/NewPostForm/NewPostForm.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NewPostForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NewPostForm/NewPostForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NewPostForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PostList/PostList.module.scss":
/*!******************************************************!*\
  !*** ./src/components/PostList/PostList.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PostList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./PostList.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/PostList/PostList.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PostList_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Post/Post.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Post/Post.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Post.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Post/Post.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ProfileImage/ProfileImage.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/ProfileImage/ProfileImage.module.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProfileImage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ProfileImage/ProfileImage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfileImage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ResetPassword/ResetPassword.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/ResetPassword/ResetPassword.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ResetPassword.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ResetPassword/ResetPassword.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ResetPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SearchUsersForm/SearchUsersForm.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/SearchUsersForm/SearchUsersForm.module.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SearchUsersForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SearchUsersForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SearchUsersForm/SearchUsersForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SearchUsersForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SearchUsersForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SearchUsersForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SearchUsersForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SignUpForm/SignUpForm.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/SignUpForm/SignUpForm.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SignUpForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SignUpForm/SignUpForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SignUpForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.module.scss":
/*!*******************************!*\
  !*** ./src/index.module.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/AuthPage/AuthPage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./AuthPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/AuthPage/AuthPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_AuthPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ForgotPassword/ForgotPassword.module.scss":
/*!*************************************************************!*\
  !*** ./src/pages/ForgotPassword/ForgotPassword.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ForgotPassword.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ForgotPassword/ForgotPassword.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/HomePage/HomePage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/HomePage/HomePage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HomePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/ProfilePage/ProfilePage.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ProfilePage/ProfilePage.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ProfilePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/ProfilePage/ProfilePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/SettingsPage/SettingsPage.module.scss":
/*!*********************************************************!*\
  !*** ./src/pages/SettingsPage/SettingsPage.module.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SettingsPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/SettingsPage/SettingsPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SettingsPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-c8c4ef"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.dc2dfbcfc29e150c16b1ef53b0628be0.js.map