const createnotes = async ()=>{
    const note = document.getElementById("create-notes-textarea").value;
    const author = document.getElementById("create-notes-author").value;
    console.log(note);
    console.log(author);
    const response = await axios({
        url:"http://localhost:1233",
        method:"POST",
        data:{
            notes: note,
            author: author
        }
    });
    console.log(response);
    if(response.data==true)
    alert("Note successfully saved");
    else
    alert("Something went wrong");
};