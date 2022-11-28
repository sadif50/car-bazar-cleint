import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='py-20 w-11/12 mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='text-2xl md:text-4xl uppercase font-semibold'>Questions & Answer</h2>
                <p className='text-base'>
                    Showing some questions and their answer.
                </p>
            </div>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 mt-8'>
                <div className='border shadow-lg p-6'>
                    <h1 className='text-xl font-semibold'>1. What are the different ways to manage a state in a React application?</h1>
                    <hr />
                    <p className='mt-5'>
                        <strong>Answer: </strong><br/>
                        There are four main types of state I need to properly manage in my React app. 
                        <br/>
                        <strong>1. Local state: </strong>Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.
                        <br/>
                        <strong>2. Global state: </strong>Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        <br/>
                        <strong>3. Server state: </strong>Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        <br/>
                        <strong>3. Url state: </strong>Data that exists on our URLs, including the pathname and query parameters.
                    </p>
                </div>
                <div className='border shadow-lg p-6'>
                    <h1 className='text-xl font-semibold'>2. How does prototypical inheritance work?</h1>
                    <hr />
                    <p className='mt-5'>
                        <strong>Answer: </strong><br/>
                        In JavaScript, objects have a special hidden property Prototype, that is either null or references another object. That object is called “a prototype”.
                        <br/>
                        When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
                        <br/>
                        JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                    </p>
                </div>
                <div className='border shadow-lg p-6'>
                    <h1 className='text-xl font-semibold'>3. What is a unit test? Why should we write unit tests?</h1>
                    <hr />
                    <p className='mt-5'>
                        <strong>Answer: </strong><br/>
                        Unit testing, a testing technique using which individual modules are tested to determine if there are any issues by the developer himself. In most programming languages, that is a function, a subroutine, a method or property. The main aim is to isolate each unit of the system to identify, analyze and fix the defects.
                        <br/>
                        <br/>
                        Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle and helps developers write better code, more efficiently.
                    </p>
                </div>
                <div className='border shadow-lg p-6'>
                    <h1 className='text-xl font-semibold'>4. React vs. Angular vs. Vue?</h1>
                    <hr />
                    <p className='mt-5 overflow-x-auto'>
                        <strong>Answer: </strong><br/>
                        <table className='custom_table'>
                            <thead>
                                <tr>
                                    <th>React</th>
                                    <th>Angular</th>
                                    <th>Vue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>React is a free and open-source front-end JavaScript library.</td>
                                    <td>Angular is a TypeScript-based free and open-source web application framework.</td>
                                    <td>Vue.js is an open-source model–view–view model front end JavaScript framework.</td>
                                </tr>
                                <tr>
                                    <td>It is used for building user interfaces based on UI components.</td>
                                    <td>It is used for building single-page client applications using HTML and TypeScript.</td>
                                    <td>It is used for building user interfaces and single-page applications.</td>
                                </tr>
                                <tr>
                                    <td>It is used to make large scale app, real-time apps, scalable apps.</td>
                                    <td>It is used to make cross platform apps.</td>
                                    <td>It is used to make lightweight apps.</td>
                                </tr>
                                <tr>
                                    <td>It's size larger than Vue and Smaller than Angular.</td>
                                    <td>It's size larger than React and Vue.</td>
                                    <td>It's size is tiny.</td>
                                </tr>
                                <tr>
                                    <td>It is maintained by Meta and a community of individual developers and companies.</td>
                                    <td>It is maintained by the Angular Team at Google and by a community of individuals and corporations.</td>
                                    <td>It was created by Evan You, and is maintained by him and the rest of the active core team members.</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;