

var langs = ['en', 'it', 'ja', 'da', 'nl', 'fi', 'fr', 'de', 'no', 'pt-br', 'ru', 'es', 'sv'];
var langJS = null;
var translate = function (jsdata) {
    $("[tkey]").each(function (index) {
        try {
            var strTr = jsdata[$(this).attr('tkey')].toString();
            var dt = new Date();
            strTr = strTr.replace("[PRODUCTNAME]", ProductName).replace("[CURRENT_YEAR]", dt.getFullYear()).replace("[PRODUCTLINK]", ProductLink).replace("[PRODUCTLINK1]", ProductLink).replace("[OS_NAME]", OsVerName).replace("[OS_NAME1]", OsVerName);
            $(this).html(strTr);
        } catch (err) {
        }

    });
}

var QueryStrLang = decodeURIComponent((location.search.match(RegExp("[?|&]" + "langcode" + '=(.+?)(&|$)')) || [, null])[1]).toLowerCase();

if (QueryStrLang.length > 0 && QueryStrLang.toLocaleString() != 'null') {
    langCode = QueryStrLang.toString();
    lpnetAjax('GET', serverPath  + langCode );
}
else {
    if (jQuery.inArray(langCode, langs)) {
        lpnetAjax("GET", serverPath + langCode);
    }
    else {
        lpnetAjax("GET", serverPath);
    }
}

function lpnetAjax(type, url) {
    var sJLang = "";

    try {
        if (sLangContent != "" && typeof sLangContent !== 'object')
            sJLang = JSON.parse(sLangContent);
    } catch (err) {
        sJLang = "";
    }

    if (typeof sLangContent === 'object')
        sJLang = sLangContent;

    if (typeof sJLang === 'object' && typeof (sJLang["Text1"]) !== 'undefined') {
        translate(sJLang);
        alignment();
    }
    else {
        $.ajax({
            type: type,
            url: url,
            async: false,
            contentType: "application/json; charset=utf-8",
            success: function (json) {
                translate(json);
                alignment();
            },
            error: function (xhr, textStatus, errorThrown) {
                translate(xhr);
                alignment();
            }
        });
    }
}




