export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

export const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
export const checkCookie = (cname) => {
    var c = getCookie(cname);
    if (c != "") return true;
    return false;
}

export const generateInfoBox = (type, text, icon) => {
    return `<div class='materialert ${type}'>
                <i class='material-icons'>${icon}</i>
                <span class='event-custom-msg'>${text}</span>
            </div>`;
}
