'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('focus-outline-manager');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var cn = _interopDefault(require('classnames'));
var scrollSmooth = _interopDefault(require('scroll-smooth'));
var Scrollparent = _interopDefault(require('scrollparent'));
var debounce = _interopDefault(require('lodash.debounce'));
var FocusLock = _interopDefault(require('react-focus-lock'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var pick = _interopDefault(require('lodash.pick'));
var reactDom = require('react-dom');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .focus-outline-hidden :focus {\n      outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyle = styled.createGlobalStyle(_templateObject());

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 0;\n  cursor: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var SvgButton = styled__default.button(_templateObject$1(), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
});

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  ", ";\n  ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  line-height: 1;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled__default.span(_templateObject$2());

function Arrow(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      inverted = _ref.inverted,
      label = _ref.label,
      disabled = _ref.disabled;
  return React__default.createElement(SvgButton, {
    className: className,
    onClick: onClick,
    "data-tour-elem": "".concat(inverted ? 'right' : 'left', "-arrow"),
    disabled: disabled
  }, label ? React__default.createElement(Label, null, label) : React__default.createElement("svg", {
    viewBox: "0 0 18.4 14.4"
  }, React__default.createElement("path", {
    d: inverted ? 'M17 7.2H1M10.8 1L17 7.2l-6.2 6.2' : 'M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2',
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeMiterlimit: "10"
  })));
}

Arrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inverted: PropTypes.bool,
  label: PropTypes.node,
  disabled: PropTypes.bool
};
var Arrow$1 = styled__default(Arrow)(_templateObject2(), function (props) {
  return props.disabled ? '#caccce' : '#646464';
}, function (props) {
  return props.inverted ? 'margin-left: 24px;' : 'margin-right: 24px;';
}, function (props) {
  return !props.label && "\n    width: 16px;\n    height: 12px;\n    flex: 0 0 16px;\n  ";
}, function (props) {
  return props.disabled ? '#caccce' : '#000';
});

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  width: 9px;\n  height: 9px;\n  color: #5e5e5e;\n  &:hover {\n    color: #000;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

function Close(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return React__default.createElement(SvgButton, {
    className: className,
    onClick: onClick
  }, React__default.createElement("svg", {
    viewBox: "0 0 9.1 9.1"
  }, React__default.createElement("path", {
    fill: "currentColor",
    d: "M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"
  })));
}

Close.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
var StyledClose = styled__default(Close)(_templateObject$3());

function getNodeRect(node) {
  return pick(node.getBoundingClientRect(), ['top', 'right', 'bottom', 'left', 'width', 'height']);
}
function inView(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      w = _ref.w,
      h = _ref.h,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold;
  return top >= 0 + threshold && left >= 0 + threshold && bottom <= h - threshold && right <= w - threshold;
}
function isBody(node) {
  return node === document.querySelector('body') || node === document.querySelector('html');
}
var isHoriz = function isHoriz(pos) {
  return /(left|right)/.test(pos);
};
var isOutsideX = function isOutsideX(val, windowWidth) {
  return val > windowWidth;
};
var isOutsideY = function isOutsideY(val, windowHeight) {
  return val > windowHeight;
};
var safe = function safe(sum) {
  return sum < 0 ? 0 : sum;
};
function bestPositionOf(positions) {
  return Object.keys(positions).map(function (p) {
    return {
      position: p,
      value: positions[p]
    };
  }).sort(function (a, b) {
    return b.value - a.value;
  }).map(function (p) {
    return p.position;
  });
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  --reactour-accent: ", ";\n  position: fixed;\n  background-color: #fff;\n  transition: transform 0.3s;\n  padding: 24px 30px;\n  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);\n  top: 0;\n  left: 0;\n  color: inherit;\n  z-index: 1000000;\n  max-width: 331px;\n  min-width: 150px;\n  padding-right: 40px;\n  border-radius: ", "px;\n\n  transform: ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Guide = styled__default.div(_templateObject$4(), function (props) {
  return props.accentColor;
}, function (props) {
  return props.rounded;
}, function (props) {
  var targetTop = props.targetTop,
      targetRight = props.targetRight,
      targetBottom = props.targetBottom,
      targetLeft = props.targetLeft,
      targetWidth = props.targetWidth,
      targetHeight = props.targetHeight,
      windowWidth = props.windowWidth,
      windowHeight = props.windowHeight,
      helperWidth = props.helperWidth,
      helperHeight = props.helperHeight,
      helperPosition = props.helperPosition,
      padding = props.padding,
      showArrow = props.showArrow,
      _props$arrowSize = props.arrowSize,
      arrowSize = _props$arrowSize === void 0 ? 25 : _props$arrowSize;
  var available = {
    left: targetLeft,
    right: windowWidth - targetRight,
    top: targetTop,
    bottom: windowHeight - targetBottom
  };

  var couldPositionAt = function couldPositionAt(position) {
    return available[position] > (isHoriz(position) ? helperWidth + padding * 2 : helperHeight + padding * 2);
  };

  var autoPosition = function autoPosition(coords) {
    var positionsOrder = bestPositionOf(available);

    for (var j = 0; j < positionsOrder.length; j++) {
      if (couldPositionAt(positionsOrder[j])) {
        return showArrow ? [].concat(_toConsumableArray(coords[positionsOrder[j]]), [positionsOrder[j]]) : coords[positionsOrder[j]];
      }
    }

    return coords.center;
  };

  var pos = function pos(helperPosition) {
    var hX = isOutsideX(targetLeft + helperWidth, windowWidth) ? isOutsideX(targetRight + padding, windowWidth) ? targetRight - helperWidth : targetRight - helperWidth + padding : targetLeft - padding;
    var x = hX > padding ? hX : padding;
    var hY = isOutsideY(targetTop + helperHeight, windowHeight) ? isOutsideY(targetBottom + padding, windowHeight) ? targetBottom - helperHeight : targetBottom - helperHeight + padding : targetTop - padding;
    var y = hY > padding ? hY : padding;
    var coords = {
      top: [x, targetTop - helperHeight - padding * 2],
      right: [targetRight + padding * 2, y],
      bottom: [x, targetBottom + padding * 2],
      left: [targetLeft - helperWidth - padding * 2, y],
      center: [windowWidth / 2 - helperWidth / 2, windowHeight / 2 - helperHeight / 2]
    };

    if (showArrow) {
      coords.top[1] -= arrowSize;
      coords.right[0] += arrowSize;
      coords.bottom[1] += arrowSize;
      coords.left[0] -= arrowSize;
    }

    if (helperPosition === 'center' || couldPositionAt(helperPosition)) {
      return coords[helperPosition];
    }

    return autoPosition(coords);
  };

  var arrow = function arrow(position) {
    if (position.length !== 3) {
      return '';
    }

    var arrowPos = position[2];
    var offset = !isHoriz(arrowPos) ? "left: ".concat((targetWidth + 2 * padding < helperWidth ? targetWidth + 2 * padding : helperWidth) / 2 - arrowSize + (position[0] + padding < targetLeft ? targetLeft - position[0] - padding : 0), "px") : "top: ".concat((targetHeight + 2 * padding < helperHeight ? targetHeight + 2 * padding : helperHeight) / 2 - arrowSize + (position[1] + padding < targetTop ? targetTop - position[1] - padding : 0), "px");
    var arrowColor = props.style.backgroundColor || '#fff';
    return "\n        &::before\n        {\n          content: \"\";\n          position: absolute;\n          ".concat(arrowPos, ": ").concat((isHoriz(arrowPos) ? helperWidth : helperHeight) - 1, "px;\n          ").concat(offset, ";\n          border-style: solid;\n          border-width: ").concat(arrowSize, "px;\n          border-color: ").concat(arrowPos === 'top' ? arrowColor : 'transparent', "\n            ").concat(arrowPos === 'right' ? arrowColor : 'transparent', "\n            ").concat(arrowPos === 'bottom' ? arrowColor : 'transparent', "\n            ").concat(arrowPos === 'left' ? arrowColor : 'transparent', ";\n          display: block;\n          width: 0;\n        };\n      ");
  };

  var p = pos(helperPosition);
  return "translate(".concat(p[0], "px, ").concat(p[1], "px);\n    ").concat(showArrow && arrow(p));
});

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  font-family: monospace;\n  background-color: ", ";\n  background-color: var(--reactour-accent);\n  height: 1.875em;\n  line-height: 2;\n  padding-left: 0.8125em;\n  padding-right: 0.8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3);\n  top: -0.8125em;\n  left: -0.8125em;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Badge = styled__default.span(_templateObject$5(), function (props) {
  return props.accentColor;
});

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 24px;\n  align-items: center;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Controls = styled__default.div(_templateObject$6());

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  counter-reset: dot;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Navigation = styled__default.nav(_templateObject$7());

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  counter-increment: dot;\n  width: 8px;\n  height: 8px;\n  border: 1px solid;\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 4px;\n  transition: opacity 0.3s, transform 0.3s;\n  cursor: ", ";\n  transform: scale(", ");\n\n  color: ", ";\n  background-color: ", ";\n    \n  color: ", ";\n  background-color: ", ";\n\n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + 0.25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: 0.3s;\n    display: ", ";\n  }\n\n  &:hover {\n    background-color: currentColor;\n\n    &:before {\n      opacity: 0.5;\n      transform: translate(-50%, -2px);\n    }\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Dot = styled__default.button(_templateObject$8(), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.current === props.index ? 1.25 : 1;
}, function (props) {
  return props.current === props.index ? props.accentColor : '#caccce';
}, function (props) {
  return props.current === props.index ? props.accentColor : 'transparent';
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : '#caccce';
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : 'transparent';
}, function (props) {
  return props.showNumber ? 'block' : 'none';
});

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.7;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  pointer-events: none;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var SvgMaskWrapper = styled__default.div(_templateObject$9());
function SvgMask(_ref) {
  var windowWidth = _ref.windowWidth,
      windowHeight = _ref.windowHeight,
      targetWidth = _ref.targetWidth,
      targetHeight = _ref.targetHeight,
      targetTop = _ref.targetTop,
      targetLeft = _ref.targetLeft,
      padding = _ref.padding,
      rounded = _ref.rounded,
      disableInteraction = _ref.disableInteraction,
      disableInteractionClassName = _ref.disableInteractionClassName,
      className = _ref.className,
      onClick = _ref.onClick;
  var width = safe(targetWidth + padding * 2);
  var height = safe(targetHeight + padding * 2);
  var top = safe(targetTop - padding);
  var left = safe(targetLeft - padding);
  return React__default.createElement(SvgMaskWrapper, {
    onClick: onClick
  }, React__default.createElement("svg", {
    width: windowWidth,
    height: windowHeight,
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, React__default.createElement("defs", null, React__default.createElement("mask", {
    id: "mask-main"
  }, React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "white"
  }), React__default.createElement("rect", {
    x: left,
    y: top,
    width: width,
    height: height,
    fill: "black"
  }), React__default.createElement("rect", {
    x: left - 1,
    y: top - 1,
    width: rounded,
    height: rounded,
    fill: "white"
  }), React__default.createElement("circle", {
    cx: left + rounded,
    cy: top + rounded,
    r: rounded,
    fill: "black"
  }), React__default.createElement("rect", {
    x: left + width - rounded + 1,
    y: top - 1,
    width: rounded,
    height: rounded,
    fill: "white"
  }), React__default.createElement("circle", {
    cx: left + width - rounded,
    cy: top + rounded,
    r: rounded,
    fill: "black"
  }), React__default.createElement("rect", {
    x: left - 1,
    y: top + height - rounded + 1,
    width: rounded,
    height: rounded,
    fill: "white"
  }), React__default.createElement("circle", {
    cx: left + rounded,
    cy: top + height - rounded,
    r: rounded,
    fill: "black"
  }), React__default.createElement("rect", {
    x: left + width - rounded + 1,
    y: top + height - rounded + 1,
    width: rounded,
    height: rounded,
    fill: "white"
  }), React__default.createElement("circle", {
    cx: left + width - rounded,
    cy: top + height - rounded,
    r: rounded,
    fill: "black "
  })), React__default.createElement("clipPath", {
    id: "clip-path"
  }, React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: top
  }), React__default.createElement("rect", {
    x: 0,
    y: top,
    width: left,
    height: height
  }), React__default.createElement("rect", {
    x: targetLeft + targetWidth + padding,
    y: top,
    width: safe(windowWidth - targetWidth - left),
    height: height
  }), React__default.createElement("rect", {
    x: 0,
    y: targetTop + targetHeight + padding,
    width: windowWidth,
    height: safe(windowHeight - targetHeight - top)
  }))), React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "#000000",
    mask: "url(#mask-main)"
  }), React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "#000000",
    clipPath: "url(#clip-path)",
    pointerEvents: "auto"
  }), React__default.createElement("rect", {
    x: left,
    y: top,
    width: width,
    height: height,
    pointerEvents: "auto",
    fill: "transparent",
    display: disableInteraction ? 'block' : 'none',
    className: disableInteractionClassName
  })));
}
SvgMask.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
  targetWidth: PropTypes.number.isRequired,
  targetHeight: PropTypes.number.isRequired,
  targetTop: PropTypes.number.isRequired,
  targetLeft: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
  rounded: PropTypes.number.isRequired,
  disableInteraction: PropTypes.bool.isRequired,
  disableInteractionClassName: PropTypes.string.isRequired
};

var Portal =
/*#__PURE__*/
function (_Component) {
  _inherits(Portal, _Component);

  function Portal(props) {
    var _this;

    _classCallCheck(this, Portal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Portal).call(this, props));
    _this.el = document.createElement('div');

    _this.el.setAttribute('id', '___reactour');

    return _this;
  }

  _createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.appendChild(this.el);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.el);
    }
  }, {
    key: "render",
    value: function render() {
      return reactDom.createPortal(this.props.children, this.el);
    }
  }]);

  return Portal;
}(React.Component);

var propTypes = {
  badgeContent: PropTypes.func,
  highlightedMaskClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  className: PropTypes.string,
  closeWithMask: PropTypes.bool,
  inViewThreshold: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  lastStepNextButton: PropTypes.node,
  maskClassName: PropTypes.string,
  maskSpace: PropTypes.number,
  nextButton: PropTypes.node,
  onAfterOpen: PropTypes.func,
  onBeforeClose: PropTypes.func,
  onRequestClose: PropTypes.func,
  prevButton: PropTypes.node,
  scrollDuration: PropTypes.number,
  scrollOffset: PropTypes.number,
  showButtons: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showNavigationNumber: PropTypes.bool,
  showNumber: PropTypes.bool,
  startAt: PropTypes.number,
  goToStep: PropTypes.number,
  getCurrentStep: PropTypes.func,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  steps: PropTypes.arrayOf(PropTypes.shape({
    selector: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]).isRequired,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'center']),
    action: PropTypes.func,
    style: PropTypes.object,
    stepInteraction: PropTypes.bool
  })),
  update: PropTypes.string,
  updateDelay: PropTypes.number,
  disableInteraction: PropTypes.bool,
  disableDotsNavigation: PropTypes.bool,
  disableKeyboardNavigation: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOf(['esc', 'right', 'left'])), PropTypes.bool]),
  rounded: PropTypes.number,
  accentColor: PropTypes.string
};
var defaultProps = {
  showNavigation: true,
  showNavigationNumber: true,
  showButtons: true,
  showCloseButton: true,
  showNumber: true,
  scrollDuration: 1,
  maskSpace: 10,
  updateDelay: 1,
  disableInteraction: false,
  rounded: 0,
  accentColor: '#007aff',
  closeWithMask: true
};

var CN = {
  mask: {
    base: 'reactour__mask',
    isOpen: 'reactour__mask--is-open',
    disableInteraction: 'reactour__mask--disable-interaction'
  },
  helper: {
    base: 'reactour__helper',
    isOpen: 'reactour__helper--is-open'
  },
  dot: {
    base: 'reactour__dot',
    active: 'reactour__dot--is-active'
  }
};

var Tour =
/*#__PURE__*/
function (_Component) {
  _inherits(Tour, _Component);

  function Tour() {
    var _this;

    _classCallCheck(this, Tour);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tour).call(this));

    _defineProperty(_assertThisInitialized(_this), "unlockFocus", function (callback) {
      _this.setState({
        focusUnlocked: true
      }, callback());
    });

    _defineProperty(_assertThisInitialized(_this), "showStep", function () {
      var steps = _this.props.steps;
      var _this$state = _this.state,
          current = _this$state.current,
          focusUnlocked = _this$state.focusUnlocked;

      if (focusUnlocked) {
        _this.setState({
          focusUnlocked: false
        });
      }

      var step = steps[current];
      var node = step.selector ? document.querySelector(step.selector) : null;

      var stepCallback = function stepCallback(o) {
        if (step.action && typeof step.action === 'function') {
          _this.unlockFocus(function () {
            return step.action(o);
          });
        }
      };

      if (step.observe) {
        var target = document.querySelector(step.observe);
        var config = {
          attributes: true,
          childList: true,
          characterData: true
        };

        _this.setState(function (prevState) {
          if (prevState.observer) {
            setTimeout(function () {
              prevState.observer.disconnect();
            }, 0);
          }

          return {
            observer: new MutationObserver(function (mutations) {
              mutations.forEach(function (mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                  var cb = function cb() {
                    return stepCallback(mutation.addedNodes[0]);
                  };

                  setTimeout(function () {
                    return _this.calculateNode(mutation.addedNodes[0], step.position, cb);
                  }, 100);
                } else if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
                  var _cb = function _cb() {
                    return stepCallback(node);
                  };

                  _this.calculateNode(node, step.position, _cb);
                }
              });
            })
          };
        }, function () {
          return _this.state.observer.observe(target, config);
        });
      } else {
        if (_this.state.observer) {
          _this.state.observer.disconnect();

          _this.setState({
            observer: null
          });
        }
      }

      if (node) {
        var cb = function cb() {
          return stepCallback(node);
        };

        _this.calculateNode(node, step.position, cb);
      } else {
        _this.setState(setNodeState(null, _this.helper.current, step.position), stepCallback);

        step.selector && console.warn("Doesn't find a DOM node '".concat(step.selector, "'. Please check the 'steps' Tour prop Array at position ").concat(current, "."));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "calculateNode", function (node, stepPosition, cb) {
      var _this$props = _this.props,
          scrollDuration = _this$props.scrollDuration,
          inViewThreshold = _this$props.inViewThreshold,
          scrollOffset = _this$props.scrollOffset;
      var attrs = getNodeRect(node);
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      if (!inView(_objectSpread2({}, attrs, {
        w: w,
        h: h,
        threshold: inViewThreshold
      }))) {
        var parentScroll = Scrollparent(node);
        scrollSmooth.to(node, {
          context: isBody(parentScroll) ? window : parentScroll,
          duration: scrollDuration,
          offset: scrollOffset || -(h / 2),
          callback: function callback(nd) {
            _this.setState(setNodeState(nd, _this.helper.current, stepPosition), cb);
          }
        });
      } else {
        _this.setState(setNodeState(node, _this.helper.current, stepPosition), cb);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "maskClickHandler", function (e) {
      var _this$props2 = _this.props,
          closeWithMask = _this$props2.closeWithMask,
          onRequestClose = _this$props2.onRequestClose;

      if (closeWithMask && !e.target.classList.contains(CN.mask.disableInteraction)) {
        onRequestClose(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "nextStep", function () {
      var _this$props3 = _this.props,
          steps = _this$props3.steps,
          getCurrentStep = _this$props3.getCurrentStep;

      _this.setState(function (prevState) {
        var nextStep = prevState.current < steps.length - 1 ? prevState.current + 1 : prevState.current;

        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }

        return {
          current: nextStep
        };
      }, _this.showStep);
    });

    _defineProperty(_assertThisInitialized(_this), "prevStep", function () {
      var getCurrentStep = _this.props.getCurrentStep;

      _this.setState(function (prevState) {
        var nextStep = prevState.current > 0 ? prevState.current - 1 : prevState.current;

        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }

        return {
          current: nextStep
        };
      }, _this.showStep);
    });

    _defineProperty(_assertThisInitialized(_this), "gotoStep", function (n) {
      var _this$props4 = _this.props,
          steps = _this$props4.steps,
          getCurrentStep = _this$props4.getCurrentStep;

      _this.setState(function (prevState) {
        var nextStep = steps[n] ? n : prevState.current;

        if (typeof getCurrentStep === 'function') {
          getCurrentStep(nextStep);
        }

        return {
          current: nextStep
        };
      }, _this.showStep);
    });

    _defineProperty(_assertThisInitialized(_this), "keyDownHandler", function (e) {
      var _this$props5 = _this.props,
          onRequestClose = _this$props5.onRequestClose,
          nextStep = _this$props5.nextStep,
          prevStep = _this$props5.prevStep,
          disableKeyboardNavigation = _this$props5.disableKeyboardNavigation,
          showCloseButton = _this$props5.showCloseButton;
      e.stopPropagation();

      if (disableKeyboardNavigation === true) {
        return;
      }

      var isEscDisabled, isRightDisabled, isLeftDisabled;

      if (disableKeyboardNavigation) {
        isEscDisabled = disableKeyboardNavigation.includes('esc');
        isRightDisabled = disableKeyboardNavigation.includes('right');
        isLeftDisabled = disableKeyboardNavigation.includes('left');
      }

      if (e.keyCode === 27 && !isEscDisabled) {
        // esc
        e.preventDefault();
        onRequestClose();
      }

      if (e.keyCode === 39 && !isRightDisabled) {
        // right
        e.preventDefault();
        typeof nextStep === 'function' ? nextStep() : _this.nextStep();
      }

      if (e.keyCode === 37 && !isLeftDisabled) {
        // left
        e.preventDefault();
        typeof prevStep === 'function' ? prevStep() : _this.prevStep();
      }
    });

    _this.state = {
      isOpen: false,
      current: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: 0,
      height: 0,
      w: 0,
      h: 0,
      inDOM: false,
      observer: null,
      focusUnlocked: false
    };
    _this.helper = React.createRef();
    _this.helperElement = null;
    _this.debouncedShowStep = debounce(_this.showStep, 70);
    return _this;
  }

  _createClass(Tour, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props6 = this.props,
          isOpen = _this$props6.isOpen,
          startAt = _this$props6.startAt;

      if (isOpen) {
        this.open(startAt);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props7 = this.props,
          isOpen = _this$props7.isOpen,
          update = _this$props7.update,
          updateDelay = _this$props7.updateDelay;

      if (!isOpen && nextProps.isOpen) {
        this.open(nextProps.startAt);
      } else if (isOpen && !nextProps.isOpen) {
        this.close();
      }

      if (isOpen && update !== nextProps.update) {
        if (nextProps.steps[this.state.current]) {
          setTimeout(this.showStep, updateDelay);
        } else {
          this.props.onRequestClose();
        }
      }

      if (isOpen && nextProps.isOpen && this.state.current !== nextProps.goToStep) {
        this.gotoStep(nextProps.goToStep);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isOpen = this.props.isOpen;

      if (isOpen) {
        this.close();
      }

      if (this.state.observer) {
        this.state.observer.disconnect();
      }
    }
  }, {
    key: "open",
    value: function open(startAt) {
      var _this2 = this;

      var onAfterOpen = this.props.onAfterOpen;
      this.setState(function (prevState) {
        return {
          isOpen: true,
          current: startAt !== undefined ? startAt : prevState.current
        };
      }, function () {
        _this2.showStep();

        _this2.helperElement = _this2.helper.current;

        _this2.helper.current.focus();

        if (onAfterOpen) {
          onAfterOpen(_this2.helperElement);
        }
      });
      window.addEventListener('resize', this.debouncedShowStep, false);
      window.addEventListener('keydown', this.keyDownHandler, false);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState(function (prevState) {
        if (prevState.observer) {
          prevState.observer.disconnect();
        }

        return {
          isOpen: false,
          observer: null
        };
      }, this.onBeforeClose);
      window.removeEventListener('resize', this.debouncedShowStep);
      window.removeEventListener('keydown', this.keyDownHandler);
    }
  }, {
    key: "onBeforeClose",
    value: function onBeforeClose() {
      var onBeforeClose = this.props.onBeforeClose;

      if (onBeforeClose) {
        onBeforeClose(this.helperElement);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props8 = this.props,
          className = _this$props8.className,
          steps = _this$props8.steps,
          maskClassName = _this$props8.maskClassName,
          showButtons = _this$props8.showButtons,
          showCloseButton = _this$props8.showCloseButton,
          showNavigation = _this$props8.showNavigation,
          showNavigationNumber = _this$props8.showNavigationNumber,
          showNumber = _this$props8.showNumber,
          onRequestClose = _this$props8.onRequestClose,
          maskSpace = _this$props8.maskSpace,
          lastStepNextButton = _this$props8.lastStepNextButton,
          nextButton = _this$props8.nextButton,
          prevButton = _this$props8.prevButton,
          badgeContent = _this$props8.badgeContent,
          highlightedMaskClassName = _this$props8.highlightedMaskClassName,
          disableInteraction = _this$props8.disableInteraction,
          disableDotsNavigation = _this$props8.disableDotsNavigation,
          nextStep = _this$props8.nextStep,
          prevStep = _this$props8.prevStep,
          rounded = _this$props8.rounded,
          accentColor = _this$props8.accentColor,
          CustomHelper = _this$props8.CustomHelper,
          showArrow = _this$props8.showArrow,
          arrowSize = _this$props8.arrowSize;
      var _this$state2 = this.state,
          isOpen = _this$state2.isOpen,
          current = _this$state2.current,
          inDOM = _this$state2.inDOM,
          targetTop = _this$state2.top,
          targetRight = _this$state2.right,
          targetBottom = _this$state2.bottom,
          targetLeft = _this$state2.left,
          targetWidth = _this$state2.width,
          targetHeight = _this$state2.height,
          windowWidth = _this$state2.w,
          windowHeight = _this$state2.h,
          helperWidth = _this$state2.helperWidth,
          helperHeight = _this$state2.helperHeight,
          helperPosition = _this$state2.helperPosition,
          focusUnlocked = _this$state2.focusUnlocked;

      if (isOpen) {
        var _React$createElement;

        return React__default.createElement(Portal, null, React__default.createElement(GlobalStyle, null), React__default.createElement(SvgMask, (_React$createElement = {
          className: cn(CN.mask.base, maskClassName, _defineProperty({}, CN.mask.isOpen, isOpen)),
          onClick: this.maskClickHandler,
          forwardRef: function forwardRef(c) {
            return _this3.mask = c;
          },
          windowWidth: windowWidth,
          windowHeight: windowHeight,
          targetWidth: targetWidth,
          targetHeight: targetHeight,
          targetTop: targetTop,
          targetLeft: targetLeft,
          padding: maskSpace,
          rounded: rounded
        }, _defineProperty(_React$createElement, "className", maskClassName), _defineProperty(_React$createElement, "disableInteraction", steps[current].stepInteraction === false || disableInteraction ? !steps[current].stepInteraction : disableInteraction), _defineProperty(_React$createElement, "disableInteractionClassName", "".concat(CN.mask.disableInteraction, " ").concat(highlightedMaskClassName)), _React$createElement)), React__default.createElement(FocusLock, {
          disabled: focusUnlocked
        }, React__default.createElement(Guide, {
          ref: this.helper,
          targetHeight: targetHeight,
          targetWidth: targetWidth,
          targetTop: targetTop,
          targetRight: targetRight,
          targetBottom: targetBottom,
          targetLeft: targetLeft,
          windowWidth: windowWidth,
          windowHeight: windowHeight,
          helperWidth: helperWidth,
          helperHeight: helperHeight,
          helperPosition: helperPosition,
          padding: maskSpace,
          tabIndex: -1,
          current: current,
          style: steps[current].style ? steps[current].style : {},
          rounded: rounded,
          className: cn(CN.helper.base, className, _defineProperty({}, CN.helper.isOpen, isOpen)),
          accentColor: accentColor,
          defaultStyles: !CustomHelper,
          showArrow: showArrow,
          arrowSize: arrowSize
        }, CustomHelper ? React__default.createElement(CustomHelper, {
          current: current,
          totalSteps: steps.length,
          gotoStep: this.gotoStep,
          close: onRequestClose,
          content: steps[current] && (typeof steps[current].content === 'function' ? steps[current].content({
            close: onRequestClose,
            goTo: this.gotoStep,
            inDOM: inDOM,
            step: current + 1
          }) : steps[current].content)
        }, this.props.children) : React__default.createElement(React__default.Fragment, null, this.props.children, steps[current] && (typeof steps[current].content === 'function' ? steps[current].content({
          close: onRequestClose,
          goTo: this.gotoStep,
          inDOM: inDOM,
          step: current + 1
        }) : steps[current].content), showNumber && React__default.createElement(Badge, {
          "data-tour-elem": "badge",
          accentColor: accentColor
        }, typeof badgeContent === 'function' ? badgeContent(current + 1, steps.length) : current + 1), (showButtons || showNavigation) && React__default.createElement(Controls, {
          "data-tour-elem": "controls"
        }, showButtons && React__default.createElement(Arrow$1, {
          onClick: typeof prevStep === 'function' ? prevStep : this.prevStep,
          disabled: current === 0,
          label: prevButton ? prevButton : null
        }), showNavigation && React__default.createElement(Navigation, {
          "data-tour-elem": "navigation"
        }, steps.map(function (s, i) {
          return React__default.createElement(Dot, {
            key: "".concat(s.selector ? s.selector : 'undef', "_").concat(i),
            onClick: function onClick() {
              return _this3.gotoStep(i);
            },
            current: current,
            index: i,
            accentColor: accentColor,
            disabled: current === i || disableDotsNavigation,
            showNumber: showNavigationNumber,
            "data-tour-elem": "dot",
            className: cn(CN.dot.base, _defineProperty({}, CN.dot.active, current === i))
          });
        })), showButtons && React__default.createElement(Arrow$1, {
          onClick: current === steps.length - 1 ? lastStepNextButton ? onRequestClose : function () {} : typeof nextStep === 'function' ? nextStep : this.nextStep,
          disabled: !lastStepNextButton && current === steps.length - 1,
          inverted: true,
          label: lastStepNextButton && current === steps.length - 1 ? lastStepNextButton : nextButton ? nextButton : null
        })), showCloseButton ? React__default.createElement(StyledClose, {
          onClick: onRequestClose
        }) : null))));
      }

      return null;
    }
  }]);

  return Tour;
}(React.Component);

var setNodeState = function setNodeState(node, helper, position) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  var _hx$getNodeRect = getNodeRect(helper),
      helperWidth = _hx$getNodeRect.width,
      helperHeight = _hx$getNodeRect.height;

  var attrs = node ? getNodeRect(node) : {
    top: h + 10,
    right: w / 2 + 9,
    bottom: h / 2 + 9,
    left: w / 2 - helperWidth / 2,
    width: 0,
    height: 0,
    w: w,
    h: h,
    helperPosition: 'center'
  };
  return function update() {
    return _objectSpread2({
      w: w,
      h: h,
      helperWidth: helperWidth,
      helperHeight: helperHeight,
      helperPosition: position
    }, attrs, {
      inDOM: node ? true : false
    });
  };
};

Tour.propTypes = propTypes;
Tour.defaultProps = defaultProps;

exports.Arrow = Arrow$1;
exports.Badge = Badge;
exports.Close = StyledClose;
exports.Controls = Controls;
exports.Dot = Dot;
exports.Navigation = Navigation;
exports.default = Tour;
