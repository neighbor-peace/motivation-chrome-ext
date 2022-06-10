// let contentArray = [
//     document.getElementById('contents'),//youtube
//     document.getElementById('AppRouter-main-content'),//reddit
//     document.getElementById('posts') //tumblr
//     ];

// const [contents] = contentArray.filter(el => el !== null);

// contents.parentNode.removeChild(contents);

// $(function() {

    let contentArray = [
        $('#posts'), //tumblr
        $('#contents'), //youtube
        $('#AppRouter-main-content') //reddit
    ];  

    let [contents] = contentArray.filter(el => el.length > 0);

    contents.hide();

// })