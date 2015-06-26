$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        
        //Select the dive with list class and append a new div (class=item)
        //to display the todo list items.
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    
    //function to remove completed items from list
    $(document).on('click', '.item', function() {
        $(this).css("text-decoration", "line-through");
    });
});
