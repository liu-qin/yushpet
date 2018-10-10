if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
    if (location.pathname.indexOf('/m/') !== 0) {
        location.replace('/m' + location.pathname);
    }
} else if (location.pathname.indexOf('/m/') === 0) {
    location.replace(location.pathname.substr(3));
}