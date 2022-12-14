/* 
১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 
*/
/* 
২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 
*/
/* 
৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 
*/

const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
const displayComments = (element) =>{
    const container = document.getElementById('comment-container');
    element.forEach(comment => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h4>ID : ${comment.postId}</h4>
        <h2>Name :${comment.name} </h2>
        <h3>Email : ${comment.email}</h3>
        <p>Comment : ${comment.body}</p>
        `
        container.appendChild(div)
    })
}

// const loadData = () =>{
//     fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => displayComments(data))
// }
// const displayComments = (element) =>{
//     const container = document.getElementById('comment-container');
//     element.forEach(comment => {
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <h4>ID : ${comment.postId}</h4>
//         <h2>Name :${comment.name} </h2>
//         <h3>Email : ${comment.email}</h3>
//         <p>Comment : ${comment.body}</p>
//         `
//         container.appendChild(div)
//     })
// }
// loadData()