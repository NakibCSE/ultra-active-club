import React from "react";

const Blog = () => {
  return (
    <div className="mt-5 container">
      <h2 className="text-center">Read our latest Blog</h2>
      <div>
        <h3>1.How does React work?</h3>
        <p>
          Ans:ReactJS is one of the most popular JavaScript libraries for mobile
          and web application development. React is that creates user interfaces
          in a predictable and efficient way using declarative code. You can use
          it to help build single page applications and mobile apps, or to build
          complex apps if you utilise it with other libraries.By using diff
          algorithm and using virtual dom react js work.
        </p>
        <h3>2.Difference between Props and state in react?</h3>
        <p>
          The state is an updatable structure that is used to contain data or
          information about the component and can change over time. The change
          in state can happen as a response to user action or system event. It
          is the heart of the react component which determines the behavior of
          the component and how it will render.
        </p>
        <p>
          Props are read-only components. It is an object which stores the value
          of attributes of a tag and work similar to the HTML attributes. It
          allows passing data from one component to other components. Props are
          immutable so we cannot modify the props from inside the component.
        </p>
        <h3>3. Using useEffect in react js without fetching api?</h3>
        <p>
          Using useEffect in react when we load any data and update it in a
          state for rendering the data useEffect dependency use in react.We use
          it also setting up subscriptions or timers, etc can be lead to
          unwarranted side-effects
        </p>
      </div>
    </div>
  );
};

export default Blog;
