// JavaScript Document

var YOUTUBE_BASE_URL = 'https://api.edamam.com/search';

function getDataFromAPI(searchTerm, callback) {
	var query = {
		app_id:'96ed1a4f',
		app_key:'c55f1347bd7cfd8e446610331355fa9d',
		q: searchTerm,
	};
	$.getJSON(YOUTUBE_BASE_URL, query, callback);

}

function displayYOUTUBESearchData(data){
	console.log(data)
	var resultElement = '';
	if (data.hits.length > 0) {
		data.hits.forEach(function(item){
			resultElement += `<a href=${item.recipe.url} ><img src=${item.recipe.image} /></a>`;
		});
	}
	else {
		resultElement += '<p>No results</p>';
	}
	$('.js-search-results').html(resultElement);
}

function submitSearch(){
	$('.js-search-form').submit(function(e){
		e.preventDefault();
		var query = $(this).find('.js-query').val();
		getDataFromAPI(query, displayYOUTUBESearchData);
	});
}
$(function(){
	submitSearch();
});
