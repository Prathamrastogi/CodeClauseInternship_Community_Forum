// Sample data for posts
const samplePosts = [
    { author: "John", content: "Hello, everyone!" },
    { author: "Alice", content: "Nice to be here!" }
];

// Function to display posts
function displayPosts() {
    const postsSection = document.getElementById("posts");
    postsSection.innerHTML = '';

    samplePosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = `<strong>${post.author}</strong>: ${post.content}`;
        postsSection.appendChild(postDiv);
    });
}

// Function to add a new post
function addPost(author, content) {
    samplePosts.push({ author, content });
    displayPosts();
}

// Event listener for form submission
const postForm = document.getElementById("post-form");
postForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const author = document.getElementById("author").value;
    const content = document.getElementById("content").value;
    addPost(author, content);
    postForm.reset();
});

// Initial display of posts
displayPosts();
