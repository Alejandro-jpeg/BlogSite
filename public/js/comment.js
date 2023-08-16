const newFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#post-comment').value;
    const post_id = document.querySelector('#post_id').value;
    

     // create and post new comment page
    if (comment) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment, post_id }),
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
};

// Event listener for button
document.querySelector('#comment-button').addEventListener('submit', newFormHandler);