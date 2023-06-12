window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  style(node, name, value) {
    // dom.style(div, 'color', 'red')
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      // dom.style(div, 'color') check style
      if (typeof name === "string") {
        return node.style[name];
      } else if (name instanceof Object) {
        // dom.style(div, 'color: red') change style
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      // fn(nodeList[i]);
      fn.call(null, nodeList[i]);
    }
  },
}