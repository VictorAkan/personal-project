'use strict';
// creating the element
const e = React.createElement;

// implementing the app component
class likeButton extends React.Component {
    // creating props constructor
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    // initializing result and condition
    render() {
        if (this.state.liked) {
            return "You liked comment number " + this.props.commentID,
            e(
                'button',
                { onClick: () => this.setState({ liked: false}) },
                'Unlike'
            )
        }
        return e(
            'button',
            { onClick: () => this.setState({ liked: true}) },
            'Like it'
        );
    }
}
// after the implementation code
document.querySelectorAll('.like_button_container')
 .forEach(domContainer => {
     // read the commentID from the dataset in html
     const commentID = parseInt(domContainer.dataset.commentid, 10);
     const root = ReactDOM.createRoot(domContainer); // create the app or make the instance root
     root.render(e(likeButton, { commentID: commentID})) // render function likeButton class and props
 })
