(/*
  Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. 
  When using CSS transform in a component, its descendant elements should not use fixed positioning, otherwise the layout will blow up.
*/}
ReactDOM.createPortal(child, container);
(/*
The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.
  */}
