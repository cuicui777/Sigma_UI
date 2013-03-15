$(document).ready(function(){
	$('img').tooltip('hide');
	$(".rpy").click(function(){
		if($(this).attr("replyListOpend") == "true") {
			$(this).html("回复").attr("replyListOpend","False");
			$(this).parent().next().slideup("slow");
		} else {
			$(this).html("隐藏回复").attr("replyListOpend","true");
			$(this).parent().next().slideDown("slow");
		}
		return false;
	});

	$(".reply-list").find("li").hover(function(){
		$(this).find(".reply-btn").css("display","");
	},function(){
		$(this).find(".reply-btn").css("display","none")
	});

	$(".reply-btn").click(function(){
		var name = $(this).parents("li").find(".reply-name").text();
		$(this).parents(".reply-list").find(".reply-input").focus().val("回复"+"@"+name+":")
		return false;
	});
})