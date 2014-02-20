var GlobalSearch;

GlobalSearch = (function() {
  var $search_div, $search_field;

  GlobalSearch.name = 'GlobalSearch';

  $search_div = "[data-role='list-search']";

  $search_field = "[data-role='search-field']";

  function GlobalSearch() {
    this._search();
  }

  GlobalSearch.prototype._search = function() {
    return $("" + $search_div).find('input.search').keyup(function() {
      var terms;
      terms = $(this).val().toLowerCase();
      if (terms.length >= 2) {
        return $('ul.list li').each(function() {
          $(this).find("" + $search_field).each(function() {
            if ($(this).text().toLowerCase().indexOf(terms) !== -1) {
              $(this).show();
              return $(this).parent('li').show();
            } else {
              return $(this).hide();
            }
          });
          if ($(this).find("" + $search_field + ":visible").length === 0) {
            return $(this).hide();
          }
        });
      } else {
        return $('ul.list li').each(function() {
          $(this).show();
          return $(this).find("" + $search_field).each(function() {
            return $(this).show();
          });
        });
      }
    });
  };

  return GlobalSearch;

})();

$('document').ready(new GlobalSearch);
