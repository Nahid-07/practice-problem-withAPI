/* 
৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা। 
*/


const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
const displayComments = (element) => {
    const container = document.getElementById('comment-container');
    element.forEach(comment => {
        // console.log(comment)
        const div = document.createElement('div')
        div.innerHTML = `
        <h4>Commentor Name : ${comment.name}</h4>
        <button onclick="loadDetails(${comment.id})">See details</button>
        `
        container.appendChild(div)
    })
}
const loadDetails = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => displayCommentsDetails(data))
}
const displayCommentsDetails = getCommentDtls => {
    const detailsContainer = document.getElementById('comment-details');
    detailsContainer.innerHTML = `
    <h1>Name :${getCommentDtls.name}</h1>
    <h2>Email :${getCommentDtls.email}</h2>
    <h2>ID :${getCommentDtls.id}</h2>
    <p>${getCommentDtls.body}</p>
    `
}