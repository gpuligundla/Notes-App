const fetchnotes = async ()=>{
    const response = await axios({
        url:"http://localhost:1233",
        method: "GET",
    })
    const noteslist = response.data;

const htmlelement = document.getElementById("view-notes-list-id")
for(let i=0;i<noteslist.length;i++)
{
    const tag = `
    <li class="view-notes-list-items">
    <div>${noteslist[i].notes}</div>
    <div class="view-notes-author">
    Author: ${noteslist[i].author}</div>
    </li>
    `
    htmlelement.innerHTML += tag;
}
};
fetchnotes();