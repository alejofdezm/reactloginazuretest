import React from 'react'

import { Link, useLoaderData } from "react-router-dom";

 

export default function Home() {
    
    const { blogs } = useLoaderData();
    

    return (
        <ul>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/post/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))
            ) : (
                <li>No blogs found</li>
            )}
        </ul>
    );
}