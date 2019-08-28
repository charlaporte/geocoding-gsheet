
function GEOCODE_GOOGLE(address) {
    if (address.map) {
        return address.map(GEOCODE_GOOGLE)
    } else {
        var r = Maps.newGeocoder().geocode(address)
        for (var i = 0; i < r.results.length; i++) {
            var res = r.results[i]
            return res.geometry.location.lat + ", " + res.geometry.location.lng
        }
    }
}


function GEOCODE_GOOGLE_LAT(address) {
    if (address.map) {
        return address.map(GEOCODE_GOOGLE)
    } else {
        var r = Maps.newGeocoder().geocode(address)
        for (var i = 0; i < r.results.length; i++) {
            var res = r.results[i]
            return res.geometry.location.lat //+ ", " + res.geometry.location.lng
        }
    }
}

function GEOCODE_GOOGLE_LONG(address) {
    if (address.map) {
        return address.map(GEOCODE_GOOGLE)
    } else {
        var r = Maps.newGeocoder().geocode(address)
        for (var i = 0; i < r.results.length; i++) {
            var res = r.results[i]
            return res.geometry.location.lng
        }
    }
}
