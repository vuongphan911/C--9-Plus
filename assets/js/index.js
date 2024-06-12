document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

document.getElementById('go').onclick = function(){
    let students = document.querySelectorAll('.ask');
    document.getElementById('show').appendChild(students[0]);
}
document.getElementById('back').onclick = function(){
    let students = document.querySelectorAll('.ask');
    document.getElementById('show').prepend(students[students.length - 1]);
}