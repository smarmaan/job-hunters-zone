import React from "react";

const Blog = () => {
  return (
    <>
      <div>
        <header className="m-2 sm:m-5 md:m-10 ">
          <div className=" bg-sky-100 rounded-3xl drop-shadow-2xl p-5">
            <h1 className="ml-6 text-center normal-case text-lg md:text-xl lg:text-3xl text-cyan-600 ">
              <span className="font-bold text-1xl md:text-3xl">Question</span>
              <span className="text-1xl md:text-3xl"> Answer </span> section
            </h1>
          </div>
        </header>

        {/* 


 */}

        <main className="mt-5 w-[95%] md:w-[70%] bg-blue-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
          {/* 


             */}

          <section className="mt-5 w-[100%] bg-green-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
            <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
              When should we use context API?
            </h1>

            <p className="text-justify  md:text-center  text-cyan-800 font-medium mb-7 pb-10 p-5">
              The Context API is a feature of React that helps us to pass data
              from one component to another in a way that is compatible with
              React components. We should use Context API, when we need to
              --------------------
              <br /> <br />
              <li>
                <strong className="font-bold text-lg text-red-800">
                  Share data across multiple components...{" "}
                </strong>
              </li>
              <li>
                {" "}
                <strong className="font-bold text-lg text-red-800">
                  To share anything we want...
                </strong>{" "}
              </li>
              <li>
                <strong className="font-bold text-lg text-red-800">
                  Make our code cleaner and more maintainable...{" "}
                </strong>
              </li>
              <li>
                {" "}
                <strong className="font-bold text-lg text-red-800">
                  larger applications state management{" "}
                </strong>{" "}
              </li>
              <br />
              <br />
              we should use context API when we have to deal with multiple
              components and send data through multiple of those components ...
              <br />
              <br />
              This data could be anything from the user's{" "}
              <strong className="font-bold text-lg text-red-800">
                authentication status{" "}
              </strong>
              to theme{" "}
              <strong className="font-bold text-lg text-red-800">
                settings or language preferences.
              </strong>{" "}
              Using Context, we can provide those data{" "}
              <strong className="font-bold text-lg text-red-800">
                {" "}
                to child components
              </strong>{" "}
              without having to pass it down through{" "}
              <strong className="font-bold text-lg text-red-800">
                every level
              </strong>{" "}
              of the component hierarchy. This can make our{" "}
              <strong className="font-bold text-lg text-red-800">
                code cleaner and more maintainable
              </strong>{" "}
              by reducing the amount of
              <strong className="font-bold text-lg text-red-800">
                {" "}
                "prop drilling"
              </strong>{" "}
              required.
              <br /> <br />
              Context is also useful for{" "}
              <strong className="font-bold text-lg text-red-800">
                state management
              </strong>{" "}
              in larger applications, where{" "}
              <strong className="font-bold text-lg text-red-800">
                multiple components
              </strong>{" "}
              need access to the{" "}
              <strong className="font-bold text-lg text-red-800">
                same data.
              </strong>{" "}
              By creating a centralized store of data using Context, you can{" "}
              <strong className="font-bold text-lg text-red-800">
                avoid duplicating state
              </strong>{" "}
              and ensure that all components are working with the same data.
              <br /> <br />
              However, it's important to use Context judiciously and{" "}
              <strong className="font-bold text-lg text-red-800">
                avoid overusing
              </strong>{" "}
              it in cases where simpler solutions like prop drilling or local
              state would suffice. Overusing Context can make your{" "}
              <strong className="font-bold text-lg text-red-800">
                code harder to understand and maintain,
              </strong>{" "}
              so it's important to strike a{" "}
              <strong className="font-bold text-lg text-red-800">
                balance between convenience and complexity.
              </strong>
            </p>
          </section>

          {/* 


 */}

          <section className="mt-5 w-[100%] bg-green-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
            <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
              What is a custom hook?{" "}
            </h1>

            <p className="text-justify  md:text-center  text-cyan-800 font-medium mb-7 pb-10 p-5">
              A custom hook is a{" "}
              <strong className="font-bold text-lg text-red-800">
                reusable function{" "}
              </strong>{" "}
              in React that allows you to{" "}
              <strong className="font-bold text-lg text-red-800">
                extract logic{" "}
              </strong>
              from a component and{" "}
              <strong className="font-bold text-lg text-red-800">
                reuse it{" "}
              </strong>
              across multiple components.
              <br /> <br />
              Custom hooks are created using the{" "}
              <strong className="font-bold text-lg text-red-800">"use"</strong>
              prefix in their name (e.g. useCustomHook) and they allow you to
              encapsulate{" "}
              <strong className="font-bold text-lg text-red-800">
                common functionality{" "}
              </strong>
              that can be used across your application. Custom hooks are useful
              for <br /> <br />
              <strong className="font-bold text-lg text-red-800 ">
                <li>managing state,</li> <li>handling side effects,</li>
                <li>performing other</li>
                <br />
                common tasks.
              </strong>{" "}
              They can help to
              <strong className="font-bold text-lg text-red-800">
                reduce code duplication
              </strong>{" "}
              and make your components more{" "}
              <strong className="font-bold text-lg text-red-800">
                readable
              </strong>{" "}
              and
              <strong className="font-bold text-lg text-red-800">
                {" "}
                maintainable.
              </strong>{" "}
              To create a custom hook, you can use any of the existing built-in
              hooks like <br /> <br />
              <strong className="font-bold text-lg text-red-800">
                <li>useState,</li>
                <li>useEffect,</li>
                <li>useContext,</li>
              </strong>{" "}
              <br />
              or you can use other custom hooks that{" "}
              <strong className="font-bold text-lg text-red-800">
                we have created.{" "}
              </strong>
              The{" "}
              <strong className="font-bold text-lg text-red-800">
                custom hook
              </strong>{" "}
              should return an{" "}
              <strong className="font-bold text-lg text-red-800">
                "array or object,"{" "}
              </strong>{" "}
              with the values or functions that you want to expose to the
              calling component.
              <br />
              <br />
              If we think of an example, -------------- suppose we have a
              component that needs to{" "}
              <strong className="font-bold text-lg text-red-800">
                fetch data
              </strong>
              from an API and display it. we can create a{" "}
              <strong className="font-bold text-lg text-red-800">
                custom hook{" "}
              </strong>
              called useDataFetch that encapsulates the{" "}
              <strong className="font-bold text-lg text-red-800">
                logic for fetching the data and returning the results.
              </strong>{" "}
              This hook can then be used in multiple components that need to
              fetch data from the same API endpoint, making your code more{" "}
              <strong className="font-bold text-lg text-red-800">
                modular and reusable.
              </strong>
            </p>
          </section>

          {/* 


 */}
          <section className="mt-5 w-[100%] bg-green-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
            <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
              What is useRef?
            </h1>

            <p className="text-justify  md:text-center  text-cyan-800 font-medium mb-7 pb-10 p-5">
              <strong className="font-bold text-lg text-red-800">
                "UseRef" is a built-in hook
              </strong>{" "}
              in React that{" "}
              <strong className="font-bold text-lg text-red-800">
                returns a mutable ref object.
              </strong>{" "}
              This object can be
              <strong className="font-bold text-lg text-red-800">
                used to store a value
              </strong>{" "}
              that persists across re-renders of a component, and can be{" "}
              <strong className="font-bold text-lg text-red-800">
                accessed directly without triggering a re-render.{" "}
              </strong>
              <br />
              <br />
              useRef is commonly used to{" "}
              <strong className="font-bold text-lg text-red-800">
                store references{" "}
              </strong>
              to DOM elements, but it can also be used to{" "}
              <strong className="font-bold text-lg text-red-800">
                store any mutable value.
              </strong>{" "}
              When we used to store a reference to a DOM element, it{" "}
              <strong className="font-bold text-lg text-red-800">allows</strong>{" "}
              you to{" "}
              <strong className="font-bold text-lg text-red-800">
                access and manipulate
              </strong>{" "}
              the element directly without having to query the DOM again. One
              important thing to note about useRef is that{" "}
              <strong className="font-bold text-lg text-red-800">
                updating the ref object does not trigger a re-render of the
                component.
              </strong>{" "}
              This means that we can use useRef to{" "}
              <strong className="font-bold text-lg text-red-800">
                store values that are not part of the component's state or
                props,
              </strong>{" "}
              but still need to be persisted across re-renders. <br />
              <br /> If we think of an example, -------------- we could use
              useRef to{" "}
              <strong className="font-bold text-lg text-red-800">
                <li> store a timer ID for a setInterval function,</li>{" "}
              </strong>
              and then use{" "}
              <strong className="font-bold text-lg text-red-800">
                <li>clearInterval to cancel </li>
              </strong>
              the timer when the{" "}
              <strong className="font-bold text-lg text-red-800">
                component unmounts.
              </strong>{" "}
              Or we could use useRef to
              <strong className="font-bold text-lg text-red-800">
                store a previous value{" "}
              </strong>
              of a prop or state, and compare it to the current value to
              determine if an effect should run. Overall, useRef is a useful
              tool for working with{" "}
              <strong className="font-bold text-lg text-red-800">
                mutable values and managing side effects
              </strong>{" "}
              in your React components.
            </p>
          </section>

          {/* 


 */}
          <section className="mt-5 w-[100%] bg-green-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
            <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
              What is useMemo?
            </h1>

            <p className="text-justify  md:text-center  text-cyan-800 font-medium mb-7 pb-10 p-5">
              <strong className="font-bold text-lg text-red-800">
                useMemo is a built-in hook{" "}
              </strong>{" "}
              in React that allows you to{" "}
              <strong className="font-bold text-lg text-red-800">
                {" "}
                memoize the result of a function{" "}
              </strong>
              so that it is only{" "}
              <strong className="font-bold text-lg text-red-800">
                recomputed{" "}
              </strong>
              when its{" "}
              <strong className="font-bold text-lg text-red-800">
                dependencies change.{" "}
              </strong>
              This can help --------- <br /> <br />
              <strong className="font-bold text-lg text-red-800">
                <li>improve performance</li>{" "}
                <li>reducing unnecessary re-renders</li>
              </strong>
              <br />
              of components. useMemo takes{" "}
              <strong className="font-bold text-lg text-red-800">
                two arguments
              </strong>{" "}
              a{" "}
              <strong className="font-bold text-lg text-red-800">
                function
              </strong>{" "}
              that returns the value to memoize, and an{" "}
              <strong className="font-bold text-lg text-red-800">array</strong>{" "}
              of dependencies that the function depends on. If any of the
              <strong className="font-bold text-lg text-red-800">
                dependencies change,
              </strong>{" "}
              the function will be{" "}
              <strong className="font-bold text-lg text-red-800">
                re-executed
              </strong>{" "}
              to compute a{" "}
              <strong className="font-bold text-lg text-red-800">
                new memoized value.{" "}
              </strong>{" "}
              If we think of an example, -------------- we have a component that
              <strong className="font-bold text-lg text-red-800">
                {" "}
                needs to render{" "}
              </strong>{" "}
              a list of items based on some data in its props. You could use
              <strong className="font-bold text-lg text-red-800">
                useMemo
              </strong>{" "}
              to memoize the result of a function that{" "}
              <strong className="font-bold text-lg text-red-800">
                filters and sorts the data,{" "}
              </strong>
              so that it only needs to be{" "}
              <strong className="font-bold text-lg text-red-800">
                recomputed{" "}
              </strong>{" "}
              when the data or
              <strong className="font-bold text-lg text-red-800">
                {" "}
                sorting/filtering{" "}
              </strong>{" "}
              criteria change.
              <br />
              <br />
              This can help{" "}
              <strong className="font-bold text-lg text-red-800">
                improve performance
              </strong>{" "}
              in cases where the filtering and sorting functions are{" "}
              <strong className="font-bold text-lg text-red-800">
                computationally expensive or the data set is large.
              </strong>{" "}
              Allover, useMemo is a useful tool for{" "}
              <strong className="font-bold text-lg text-red-800">
                optimizing performance
              </strong>{" "}
              in React components by memoizing the result of
              <strong className="font-bold text-lg text-red-800">
                expensive computations.
              </strong>
            </p>
          </section>

          {/* 


 */}
          <section className="mt-5 w-[100%] bg-green-100 gap-9 p-8 mx-auto rounded-2xl drop-shadow-2xl mb-10">
            <h1 className="font-bold text-3xl text-center mb-5 p-5 pt-5 mt-4">
              ...Thanks for having patience... <br /> ...while reading my
              Answers of the particular Questions...
            </h1>

            <h1 className="font-bold text-2xl text-center text-red-800 mb-5 p-5 pt-5 mt-4">
              N.B. : ----- All the answers were written by me and modified by
              me... But few lines were inspired from Google...
            </h1>
          </section>

          {/* 


 */}
        </main>
      </div>
    </>
  );
};

export default Blog;
