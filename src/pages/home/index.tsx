import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Todo List App!</h1>
            <p>This app helps you manage your todos efficiently.</p>
            <p>Here's how it works:</p>
            <ol>
                <li>In the top you can add a new task by clicking the "Add" button.</li>
                <li>Mark a todo as completed by clicking the checkbox next to it.</li>
            </ol>
            <p>Start organizing your tasks now!</p>
        </div>
    );
};

export default Home;