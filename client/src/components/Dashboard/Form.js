import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    form
                </header>
                <form action="http://localhost:5000/dashboard/buzz/feeds" method="POST">
                    <textarea name="userPost" id="" placeholder="Share your thoughts..." cols="30" rows="10"></textarea>
                    <select name="category" id="">
                        <option hidden disabled selected>Category</option>
                        <option value="Activity">Activity</option>
                        <option value="Lost And Found">Lost and Found</option>
                    </select>
                    <input type="file" name="image" accept="image/*" />
                    <input type="submit" value="submit" />
                </form>
                <footer>
                </footer>
            </React.Fragment>
        )
    }
}

export default Form
