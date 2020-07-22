'use strict';
const key = 'c-thiskeyusingbyabbrlink2';
function postPermalinkFilter(data) {
    if (data.abbrlink) {
        return data;
    }
    // try get the abbrlink from db
    const model = this.model('abbrlink');
    const cache = model.findById(data._id);
    if (cache && typeof cache.maxid === 'number') {
        data.abbrlink = cache.maxid;
        return data;
    }
    // this is a new post,so we need calc the real abbrlink
    let maxid = this.config.abbrlink.start || 0;

    let tmp = model.findById(key);
    if (tmp && typeof tmp.maxid == 'number') {
        maxid = tmp.maxid;
    }
    maxid = maxid + 1;
    model.save({
        _id: key,
        maxid,
    });
    model.save({
        _id: data._id,
        maxid,
    });
    data.abbrlink = maxid;
    return data;
}

module.exports = postPermalinkFilter;
