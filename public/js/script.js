$(document).ready(function(){

    $('#btn-delete').click(function(event){
        event.preventDefault();
        let $this = $(this);
        let todoId = $(this).data('id');

        $.ajax({
            'url':'/todo/' + todoId,
            'type': 'DELETE'
        }).done(function(data){
            if(data){
                $this.removeClass('btn-danger').addClass('btn-success');
                // $this.append('<i class ="fa fa-check"></i>');
                setTimeout(function(){
                    location.href = '/';
                },2000);
            }
        });
    }); 
});