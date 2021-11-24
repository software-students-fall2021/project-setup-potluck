import React from 'react'
import "../App.css"
import "../styles/PostFeed.css"
// var session = require('express-session');


const PostFeed = () => {
    return (    
        <form action method="post">

            <h1><strong>Your Post</strong>: Share Food Love with everyone</h1>

            <div class="form-group">
                <label for="title"></label>
                <input type="text" name="title" id="title" class="form-controll" placeholder="Title of the Post"/>
            </div>
            <div class="form-group">
                <label for="caption"></label>
                <textarea type="text" name="caption" id="caption" class="form-controll" placeholder="Add more info"/>
            </div>

            <div class="form-group file-area">
                    {/* <label for="images">Add Images</label> */}
                <input type="file" name="images" id="images" required="required" multiple="multiple"/>
                <div class="file-dummy">
                <div class="success">Click here to upload</div>
                {/* <div class="default">Please select some files</div> */}
                </div>
            </div>

            <div class="form-group2">
                <button type="submit">Post</button>
            </div>

            </form>





        )

}


export default PostFeed