let image = $.ajax({
        method: 'GET',
        url: 'https://unsplash.it/list',
        success: function(result) {
         // result is whatever the URL sends back from the request
            let randomIndex = Math.floor(Math.random() * result.length);
            return result[randomIndex];
        },
        error: function(err) {
         // if any errors occur during the process you can check out the
         // the error by logging the 'err' argument
         console.error(err);
        }
});
   
let contentArray = [
    $('#page'), //tumblr blog
    $('#base-container'), //tumblr home
    $('#contents'), //youtube
    $('#2x-container') //reddit
];  

let [content] = contentArray.filter(el => el.length > 0);

let contentParent = content.parent();

content.hide();

contentParent.addClass('container');
contentParent.prepend(
    '<div id="motivational-text">Get back to following your dreams!</div>',
    '<img src="https://unsplash.it/1200/800?image=" + image.id></img>'
);