{/*

Why fragments are better than container divs?
Below are the list of reasons to prefer fragments over container DOM elements,

Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
The DOM Inspector is less cluttered.

It's a common pattern or practice in React for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. 
You need to use either or a shorter syntax having empty tag (<></>).

Below is the example of how to use fragment inside Story component.
*/}
function Story({title, description, date}) {
  return (
      <Fragment>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </Fragment>
    );
}
{/*
It is also possible to render list of fragments inside a loop with the mandatory key attribute supplied.
*/}
function StoryBook() {
  return stories.map(story =>
    <Fragment key={ story.id}>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <p>{story.date}</p>
    </Fragment>
    );
}
{/*
Usually, you don't need to use until unless there is a need of key attribute. The usage of shorter syntax looks like below.
*/}
function Story({title, description, date}) {
  return (
      <>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </>
    );
}
