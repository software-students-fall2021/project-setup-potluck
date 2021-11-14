import React from 'react'
import "../App.css"
import "../styles/PostFeed.css"
// var session = require('express-session');


const PostFeed = () => {
    return (
        // <div class="entire-frame">
        //     {/* <p>hello</p> */}
        //     <form class="post-draft">
        //         <textarea>Some text...</textarea>
        //     </form>


        // </div>
    
        <form action method="post">
  
            <h1><strong>File upload</strong> with style and pure CSS</h1>
            
            <div class="form-group">
                <label for="title">Title <span>Use title case to get a better result</span></label>
                <input type="text" name="title" id="title" class="form-controll"/>
            </div>
            <div class="form-group">
                <label for="caption">Caption <span>This caption should be descriptiv</span></label>
                <textarea type="text" name="caption" id="caption" class="form-controll"/>
            </div>
            
            <div class="form-group file-area">
                    <label for="images">Images <span>Your images should be at least 400x300 wide</span></label>
                <input type="file" name="images" id="images" required="required" multiple="multiple"/>
                <div class="file-dummy">
                <div class="success">Great, your files are selected. Keep on.</div>
                {/* <div class="default">Please select some files</div> */}
                </div>
            </div>
            
            <div class="form-group">
                <button type="submit">Post</button>
            </div>
            
            </form>
    
    
    
    
    
        )
    


}


export default PostFeed