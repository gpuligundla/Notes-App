const fetchnotes = ()=>{
    const data=[{
        notes: "welcome to nodejs",
        author:"geethakrishna"
    },
    {
        notes:"welcome to mongo",
        author:"krishna"
    }
]
const htmlelement = document.getElementById("view-notes-list-id")
for(let i=0;i<data.length;i++)
{
    const tag = `
    <li class="view-notes-list-items">
    <div>${data[i].notes}</div>
    <div class="view-notes-author">
    Author: ${data[i].author}</div>
    </li>
    `
    htmlelement.innerHTML += tag;
}
};
fetchnotes();