
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '840px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right'
		});

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}
// Buscador

document.addEventListener('DOMContentLoaded', function() {
            var searchInput = document.getElementById('search-input');
            var searchResults = document.getElementById('search-results');
            var articles = document.querySelectorAll('.tiles article');

            searchInput.addEventListener('input', function() {
                var searchTerm = searchInput.value.toLowerCase();

                articles.forEach(function(article) {
                    var title = article.querySelector('h2').innerText.toLowerCase();
                    var description = article.querySelector('.content p').innerText.toLowerCase();

                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        article.style.display = 'block';
                    } else {
                        article.style.display = 'none';
                    }
                });
            });
        });

//Paginación

document.addEventListener('DOMContentLoaded', function() {
    var articles = document.querySelectorAll('.tiles article');
    var itemsPerPage = 5; // Número de artículos por página
    var currentPage = 1;

    function showPage(page) {
        var startIndex = (page - 1) * itemsPerPage;
        var endIndex = startIndex + itemsPerPage;

        // Oculta todos los elementos
        articles.forEach(function(article) {
            article.style.display = 'none';
        });

        // Muestra los elementos correspondientes a la página actual
        for (var i = startIndex; i < endIndex && i < articles.length; i++) {
            articles[i].style.display = 'block';
        }
    }

    function createPagination() {
        var totalItems = articles.length;
        var totalPages = Math.ceil(totalItems / itemsPerPage);

        var paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = '';

        for (var i = 1; i <= totalPages; i++) {
            var listItem = document.createElement('li');
            listItem.classList.add('page-item');
            var link = document.createElement('a');
            link.classList.add('page-link');
            link.href = '#';
            link.innerText = i;
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var pageNumber = parseInt(this.innerText);
                showPage(pageNumber);
            });
            listItem.appendChild(link);
            paginationContainer.appendChild(listItem);
        }
    }

    createPagination(); 

    showPage(currentPage);
});


		
})(jQuery);