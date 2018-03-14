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
}

function showCountriesList(resp) {
    var countries = [];
  	
  	resp.forEach(function(item) {
        var element = $('<li>').text(item.name);
        $('<h3>').text('Capital:').appendTo(element);
        $('<p>').text(item.capital).appendTo(element);
        $('<h3>').text('Region:').appendTo(element);
        $('<p>').text(item.region).appendTo(element);
        $('<h3>').text('Flag:').appendTo(element);
        $('<img>').attr('src', item.flag).appendTo(element);
       
       countries.push(element);
    });

    countriesList.empty().append(countries);
}
