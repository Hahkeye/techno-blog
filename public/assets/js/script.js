$(function() {
    $('.your-post').each(function(){
        $(this).click(function(){
            console.log(`"/dashboard/edit/${$(this).attr("val")}`);
            $(location).prop('href',`/dashboard/edit/${$(this).attr("val")}`);
        });
    });

    $('.posty-post').each(function(){
        $(this).click(function(){
            // $(location).prop('href',`/dashboard/${$(this).attr("val")}`);
            $(location).prop('href',`/post/${$(this).attr("val")}`);
        });
    });
});

// let test = $('.your-post');
// console.log(test);
