import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    form
                </header>
                <form action="">
                    <textarea name="" id="" placeholder="Share your thoughts..." cols="30" rows="10"></textarea>
                    <select name="" id="">
                        <option value="">Activity</option>
                        <option value="">Lost and Found</option>
                    </select>
                    <input type="file" accept="image/*" />
                    <input type="submit" value="submit" />
                </form>
                <footer>

                </footer>
            </React.Fragment>
        )
    }
}

export default Form
