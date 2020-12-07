import * as router from "./router.js";

////////////////////////////////////////////////////////////////////////////////
////                             Constants                                  ////
////////////////////////////////////////////////////////////////////////////////

const INITIAL_PAGE = 'page-base-view';
const INITIAL_PARAMS = {};


////////////////////////////////////////////////////////////////////////////////
////                          Global functions                              ////
////////////////////////////////////////////////////////////////////////////////

window.website = new Object;

// Routing
window.website.goToPage = router.goToPage;
window.website.goBack = router.goBack;
window.onpopstate = event => {
  router.goToPage(event.state.page, event.state.params);
}

////////////////////////////////////////////////////////////////////////////////
////                           Initialization                               ////
////////////////////////////////////////////////////////////////////////////////

const BASE_URL = window.location.protocol + '//' + window.location.host + '/';

let initial_page, initial_params;
[initial_page, initial_params] = router.getPageAndParams();

if (!initial_page) {
  initial_page = INITIAL_PAGE;
  initial_params = INITIAL_PARAMS;
}

window.onload = async function() {
  window.website.goToPage(initial_page, initial_params);
};