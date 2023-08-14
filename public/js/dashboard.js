
const newPostHandler = async (event) =>{
    event.preventDefault();

    const newTitle = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post-content').value.trim();

    if (newTitle && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ newTitle, content }),
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('post creation failed');
        }
    }
};

document.querySelector('#post-button').addEventListener('click', newPostHandler);