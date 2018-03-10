var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
  	if(!countryName.length) countryName = 'Poland';
  	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
};

function showCountriesList(resp) {
  	countriesList.empty();
  	resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);
        $('<h3>').text('Capital:').appendTo(countriesList);
        $('<p>').text(item.capital).appendTo(countriesList);
        $('<h3>').text('Region:').appendTo(countriesList);
        $('<p>').text(item.region).appendTo(countriesList);
        $('<h3>').text('Flag:').appendTo(countriesList);
        $('<img>').attr('src', item.flag).appendTo(countriesList);
       
    });
};