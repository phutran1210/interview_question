document.addEventListener('DOMContentLoaded', function() {
	const on = 'addEventListener';
	const q = 'querySelector';
	const qA = 'querySelectorAll';

	// Play Btn Setting Up
	document[qA]('.btn-play').forEach( elem => {
		elem[on]('click', function(){
			eval(this.parentElement[q]('.code-body').innerText);
		})
	} )


	// Sidebar Constructor
	document[qA]('.section .section-title').forEach( elem => {
		const link = document.createElement('span');
		link.className = 'sidebar-link';
		link.textContent = elem.textContent;

		if (elem.parentElement.classList.contains('active')) link.classList.add('active');

		document.getElementById('sidebar').append(link);
	})


	// Cache Current Active Section And Link
	let activeSection = document[q]('.section.active');
	let activeSidebarLink = document[q]('.sidebar-link.active');


	// Sidebar link handleClick
	document[qA]('.sidebar-link').forEach( (elem, index) => {
		elem[on]('click', function(){

			if (!this.classList.contains('active')) {
				this.classList.add('active');
				activeSidebarLink.classList.remove('active');
				activeSidebarLink = this;

				let target = document[qA]('.section')[index];

				target.classList.add('active');
				activeSection.classList.remove('active');
				activeSection = target;

				// scroll reset
				if (window.scrollY) {
					window.scrollTo(0, 0);
				}

				// active hightlight
				var codeBox = this[qA]('.codebox');
				setTimeout( () => {
					Prism.highlightAll(codeBox);
				}, 500 );
			}
		})
	} )
})