import axios from 'axios';

export const loaderBlogs = async () => {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            
    const blogs = res ? res.data :{};

     
    return { blogs };
};
