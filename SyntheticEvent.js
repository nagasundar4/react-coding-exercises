function BookStore() {
  handleTitleChange(e) {
    // 'e' represents synthetic event
    const nativeEvent = e.nativeEvent;
    console.log(nativeEvent);
    e.stopPropogation();
    e.preventDefault();
  }

  return <input name="title" onChange={handleTitleChange} />
}
