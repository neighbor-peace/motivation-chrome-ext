let contentArray = [
    document.getElementById('contents'),//youtube
    document.getElementById('AppRouter-main-content'),//reddit
    document.getElementById('posts') //tumblr
    ];

const [contents] = contentArray.filter(el => el !== null);

contents
contents.parentNode.removeChild(contents);