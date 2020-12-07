/*
    Parse and return parameters on url

    INPUT:
        (string) query string
    OUTPUT:
        (string[]) params
*/
export const parseParameters = string => {
    let params = {};
    let paramsString = string.split('&');
    paramsString.forEach(p => {
      const keyValue = p.split('=');
      params[keyValue[0]] = keyValue[1];
    });
    return params;
  };

/*
    Get page/view and extra parameters.

    INPUT:
        (string) url
    OUTPUT:
        [   (string) page,
            (string[]) params
        ]
*/
export const getPageAndParams = (location='') => {
    if (!location) { location = window.location.hash; }
    const hashString = location.slice(1).split('/');
    const pageString = hashString[0];
    const queryString = hashString[1];

    let params = {};

    if (queryString && queryString[0] == '?') {
        const urlParams = parseParameters(queryString.slice(1));

        if (urlParams['eventid']) {
        params = { id: urlParams['eventid'] };
        }
    }

    return [pageString, params]
}

/*
    Goes back to previous page/view
*/
export const goBack = () => {
    const prevPage = window.location.href;

    history.back();

    setTimeout(() => {
        if (window.location.href == prevPage) {
            goToPage('page-event-list', {});
        }
    }, 500);
};

/*
    Show page/view selected. (internal)

    INPUT:
        (string) page/view you want to show
    OUTPUT:
        none
*/
const showPage = page => {
    document.querySelectorAll('[id^="page"]').forEach(page => { page.style.display = 'none'; page.hidden = true; });
    document.querySelector('#' + page).style.display = 'block';
    document.querySelector('#' + page).hidden = false;
    document.querySelectorAll('[id^="page"]').forEach(page => console.log("hide-->  ", page));
};


/*
    Go to page/view selected.

    INPUT:
        (string) page/view you want to show
        (string[2][]) params that are passed into the page element
    OUTPUT:
        none
*/
export const goToPage = (page, params) => {
    showPage(page);

    history.pushState(
        { page: page, params: params },
        page, 
        `#${page}${(Object.keys(params).length > 0) ? '/?'+Object.keys(params).map(k => k+'='+params[k]).join('&') : ''}`
    );

    Object.keys(params).forEach(k => {
        document.querySelector(page).setAttribute(k, params[k]);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
};
