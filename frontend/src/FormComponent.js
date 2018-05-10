import React, { Component } from 'react';

class FormComponent extends Component {

    render() {
        return (
            <div className="App-intro">
                <br />
                Add a new post, why not.
                <form onSubmit={this.props.createPost}>
                    <br />Title <input name="title" onChange={this.props.handleTitleChange} type="text" value={this.props.title} />
                    <br />Content <input name="content" onChange={this.props.handleContentChange} type="text" value={this.props.content} />
                    <br /><button type="submit">Create post!</button>
                </form>
            </div>

        );
    }
}

export default FormComponent;