'use strict';
const key = 'c-thiskeyusingbyabbrlink2';
let lastMaxId = null;
function postPermalinkFilter(data) {
    if (data.abbrlink) {
        return data;
    }
    // try get the abbrlink from db
    const model = this.model('abbrlink');
    if (!lastMaxId) {
        let tmp = model.findById(key);
        if (tmp && typeof tmp.maxid == 'number') {
            console.log('last maxid', maxid);
            lastMaxId = tmp.maxid;
        } else {
            lastMaxId = (this.config.abbrlink && this.config.abbrlink.start) || 0;
        }
    }

    const cache = model.findById(data._id);
    if (cache && typeof cache.maxid === 'number') {
        data.abbrlink = cache.maxid;
        return data;
    }
    // this is a new post,so we need calc the real abbrlink
    let maxid = lastMaxId;

    maxid = maxid + 1;
    model.save({
        _id: key,
        maxid,
    });
    model.save({
        _id: data._id,
        maxid,
    });
    lastMaxId = maxid;
    data.abbrlink = maxid;

    return data;
}

module.exports = postPermalinkFilter;
