import { useState } from "react";

const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('sambhav');

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog Title:</label>
                    <input 
                    type="text" 
                    required  
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}  
                    />
                <label>Blog Body:</label>
                    <textArea
                     required
                     value={body}
                    onChange={(e) => setBody(e.target.value)} 
                    >
                    </textArea> 
                <label>Blog Author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="prateek">prateek</option>
                        <option value="sambhav">sambhav</option>
                    </select>
                <button>Add Blog</button> 
                <p>{title}</p>  
                <p>{body}</p>
                <p>{author}</p>  
            </form>
        </div>
    );
}
 
export default Create;