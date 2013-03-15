 $(document).ready(function(){
    $('img').tooltip('hide');
    $(".rpy").click(function(){
		if ($(this).attr("replyListOpened") == "true") {
			$(this).html("回复").attr("replyListOpened", "false");
			$(this).parent().next().slideUp("slow");			
		} else {
			$(this).html("隐藏回复").attr("replyListOpened", "true");    
			$(this).parent().next().slideDown("slow");						
		}    	
		return false;
    });
	$(".reply-btn").css("display","none");
	$(".reply-list").find("li").hover(function(){
		$(this).find(".reply-btn").css("display", "");
	}, function(){
		$(this).find(".reply-btn").css("display", "none");
	});
	
	$(".reply-btn").click(function(){
		var name = $(this).parents("li").find(".reply-name").text();
		$(this).parents(".reply-list").find(".reply-input").focus().val("回复" + "@" + name + ": ")
		return false;
	});
	
    $(".publish").focus(function(){
    	$(".push").css("visibility" , "visible")
    })

 })