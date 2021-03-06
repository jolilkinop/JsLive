

export const catalog = () => {
    
// Elements
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const btnClose = document.querySelector('.btn-close');
    const subCatalog = document.querySelector('.subcatalog');
    const subcatalogHeader = document.querySelector('.subcatalog-header');
    const btnReturn = document.querySelector('.btn-return');

    // Overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.append('beforeend', overlay);


    // Functions
    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    const closeMenu = () => {
        closeSubMenu();
        catalog.classList.remove('open');
        overlay.classList.remove('active');
    };

    const openSubMenu = event => {
        event.preventDefault(); // Запрещает переход по ссылке на другую страницу
        const itemList = event.target.closest('.catalog-list__item');
        if (itemList) {
            subcatalogHeader.innerHTML = itemList.lastChild.outerHTML;
            subCatalog.classList.add('subopen');
            console.log(subcatalogHeader);
        };
    };   

    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
    };

    // Events
    btnBurger.addEventListener('click', openMenu)
    btnClose.addEventListener('click', closeMenu)
    overlay.addEventListener('click', closeMenu)
    document.addEventListener('keydown', event => {
        if (event.code == 'Escape') { 
            closeMenu();
            closeSubMenu();
        }
    })
    catalog.addEventListener('click', openSubMenu)
    btnReturn.addEventListener('click', closeSubMenu)
};