function addComments(id){
        document.getElementById('addEventNames').style.display = "block";
        var addEventName = id.value +'<br>';
        var a = document.getElementById('userComments');
        document.getElementById('addEventNames').innerHTML += '<p class="commentContent">'+addEventName+'</p>';          
        a.value=a.defaultValue;
    }
like = 0;
    function likeFunction(){
        like++;
        var parentElement = document.getElementsByClassName('likeBlogButton')[0];
        var afterLikebtn='<button id="likeButton" onclick="likeFunction()"><i class="fa fa-thumbs-up"></i> Liked</button><br>';
        if(like==1)
        {
           
            parentElement.innerHTML = afterLikebtn +" 1 person likes this!";
            
        }
        else
        {
            parentElement.innerHTML = afterLikebtn +like  +" people have liked this!";
        }
    }

function editBlog(){
    var btn = document.getElementById('edit');
    var heading = document.getElementById('blogTitleNew');
    var blogContent = document.getElementsByClassName('blogText')[0];
    var content = blogContent.innerHTML;
    var save = document.getElementById('editButton');
    heading.style.border = "2px solid #FFC0CB" ;
    blogContent.style.border = "2px solid #C0C0C0" ;
    blogContent.contentEditable = true;
    heading.contentEditable = true;
    btn.style.display = "none";
    save.innerHTML = '<button type="button" id="edit" onclick="save()">Save <i class="fa fa-save"></i></button>';
}

function save(){
    var btn = document.getElementById('edit');
    var editBtn = document.getElementById('editButton');
    btn.style.display = "none";
    editBtn.innerHTML = '<button type="button" id="edit" onclick="editBlog()">Edit <i class="fa fa-edit"></i></button>';
    var heading = document.getElementById('blogTitleNew');
    var blogContent = document.getElementsByClassName('blogText')[0];
    blogContent.contentEditable = false;
    heading.contentEditable = false;
    heading.style.border = "none" ;
    blogContent.style.border = "none" ;

}