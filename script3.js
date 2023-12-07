document.addEventListener("DOMContentLoaded", function () {
    const posts = [];

    function createPostElement(post) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        return postElement;
    }

    function displayPosts() {
        const contentSection = document.getElementById("content");
        contentSection.innerHTML = "";

        posts.forEach(post => {
            const postElement = createPostElement(post);
            contentSection.appendChild(postElement);
        });
    }

    function addNewPost(title, content) {
        const newPost = { title, content };
        posts.push(newPost);
        displayPosts();
    }

    const postForm = document.getElementById("post-form");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const titleInput = document.getElementById("post-title");
        const contentInput = document.getElementById("post-content");

        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        if (title && content) {
            addNewPost(title, content);
            titleInput.value = "";
            contentInput.value = "";

            // Redirect to confirmation page with parameters
            window.location.href = `confirmation.html?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`;
        }
    });

    displayPosts();
});
