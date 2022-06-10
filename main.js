$(function() {

    let contentArray = [
        $('#posts'), //tumblr
        $('#contents'), //youtube
        $('#AppRouter-main-content') //reddit
    ];  

    let [content] = contentArray.filter(el => el.length > 0);

    let contentParent = content.parent();

    content.hide();

    contentParent.prepend('<div class="container"><div id="motivational-text">Get back to following your dreams!</div><img src="https://cdn.pixabay.com/photo/2019/06/21/19/27/switzerland-4290226_960_720.jpg"></img><a href="https://www.pexels.com/photo/silhouette-of-mountains-1323550/">Photo by Simon Berger:</a></div>')

})