var skills_json={
	"name":"guoshuang",
	"age":"won't tell",
	"skills":[
		{"title":"on bed","score":"<span style=\"color:green;\">10</span>"},
		{"title":"outside bed","score":"10 also"},
		{"title":"besides computer","score":"9"},
		{"title":"stragetory games","score":"10","important":true}
	]	
};

jQuery(function($){
	var template=$('#template-container').html();
	var html= Mustache.to_html(template,skills_json);
	$('#div-mustache-output').html(html);
})