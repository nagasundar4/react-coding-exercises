{/*
The attribute names written in JSX turned into keys of JavaScript objects and the JavaScript names cannot contain dashes or reversed words, 
  it is recommended to use camelCase whereever applicable in JSX code. The attribute class is a keyword in JavaScript, and JSX is an extension of JavaScript. 
  That's the principle reason why React uses className instead of class. Pass a string as the className prop.
*/}
render() {
  return <span className={'menu navigation-menu'}>{'Menu'}</span>
}
