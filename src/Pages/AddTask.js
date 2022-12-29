import React from 'react';
import { Link } from 'react-router-dom';

const AddTask = () => {


    const handleTasks = (event) => {
        event.preventDefault();
        const form = event.target;
        const task = form.task.value;
        const media = form.media.value;
        console.log(task, media, " Task Added");
        const tasks = {
            task, media
        }
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className=' bg-pink-800  mx-auto'>
            <form onSubmit={handleTasks} className=''>
               <div className=''>
                <p className='text-white'>Task Description</p>
                <input type="text" name="task" id="" />
               </div>
               <div className=''>
                <p className='text-white'>Add image</p>
                <input className='border' name="media" type="file" src="" alt="" />
               </div>
               <input className='p-2 mb-5 mt-2 rounded bg-pink-600' type="submit" value="Submit" />
            </form>

            


        </div>
    );
};

export default AddTask;