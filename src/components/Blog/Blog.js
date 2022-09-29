import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4 className='my-3'>Questions Answer:</h4>
            <h5 className='mb-3'>How does React work?</h5>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
            <h5 className='m-3'>Difference between Props and State?</h5>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            <h5 className='m-3'>how many works can be executed with useEffect except Data Load?</h5>
            <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
        </div>
    );
};

export default Blog;