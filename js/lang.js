var languageOfUser;
var lang_default = "de";
/*Meaning of the abreviations used in 'langRef' JSON.
PDV - POI Details view (The view displayed to the user when the user clicks on a POI marker).
BTN - A 'button' element.
LNK - A 'a' (hyperlink) element.
TB - Textbox (or input type 'text') element.
OH - Opening Hours
MI - More Information
*/
var langRef = {};
//determine language of user
languageOfUser = navigator.language.toLowerCase();
if (languageOfUser.indexOf("-") > -1) {
	languageOfUser = languageOfUser.split("-");
	languageOfUser = languageOfUser[0];
}
function getLangFromHash() {
	var hash = location.hash;
	if (hash != "") {
		hash = hash.replace("#", "").split("&");
		if (String(Number(hash[0])) == "NaN") {
			languageOfUser = hash[0];
			location.hash = location.hash.replace(hash[0] + "&", "").replace(hash[0], "");
		}
	}
}
function registerLang(lang, json) {
	langRef[document.body.id][lang] = json[document.body.id];
}
function loadLang(e, lang) {
	if (!langRef[document.body.id]) {
		langRef[document.body.id] = {};
	}
	if (lang in langRef[document.body.id] == false) {
		var script = document.createElement("script");
		script.setAttribute("src", "/js/" + String(lang) + ".js");
		document.body.appendChild(script);
	} else {
		setLang(e, lang);
	}
}
function setLang(e, lang) {
	if (lang != undefined) {
		languageOfUser = lang;
	}
	if (languageOfUser in langRef[document.body.id]) {
		var data = {
		0: ((document.getElementById("query-button") != null) ? document.getElementById("query-button").value = langRef[document.body.id][languageOfUser].BTN_APPLY_FILTERS : ""),
		1: ((document.getElementById("linkToPP") != null) ? document.getElementById("linkToPP").innerHTML = langRef[document.body.id][languageOfUser].LNK_PP_SITE : ""),
		2: ((document.getElementById("linkToPP") != null) ? document.getElementById("linkToPP").href = langRef[document.body.id][languageOfUser].LNK_PP_SITE_URL : ""),
		3: ((document.getElementById("searchfield") != null) ? document.getElementById("searchfield").placeholder = langRef[document.body.id][languageOfUser].TB_SEARCHFIELD : ""),
		4: ((document.getElementById("lnk-impress") != null) ? document.getElementById("lnk-impress").innerHTML = langRef[document.body.id][languageOfUser].LNK_IMPRESS : ""),
		5: ((document.getElementById("lnk-impress") != null) ? document.getElementById("lnk-impress").href = langRef[document.body.id][languageOfUser].LNK_IMPRESS_URL : ""),
		6: ((document.getElementById("title") != null) ? document.getElementById("title").innerHTML = langRef[document.body.id][languageOfUser].IMPRESS_TITLE : ""),
		7: ((document.getElementById("subtitle") != null) ? document.getElementById("subtitle").innerHTML = langRef[document.body.id][languageOfUser].IMPRESS_SUBTITLE : ""),
		8: ((document.getElementById("country") != null) ? document.getElementById("country").innerHTML = langRef[document.body.id][languageOfUser].IMPRESS_COUNTRY : ""),
		9: ((document.getElementById("contact") != null) ? document.getElementById("contact").innerHTML = langRef[document.body.id][languageOfUser].IMPRESS_CONTACT : ""),
		10: ((document.getElementById("note") != null) ? document.getElementById("note").innerHTML = langRef[document.body.id][languageOfUser].IMPRESS_NOTE : ""),
		11: ((document.getElementById("linkToGitHub") != null) ? document.getElementById("linkToGitHub").innerHTML = langRef[document.body.id][languageOfUser].LNK_GITHUB : ""),
		12: ((document.getElementById("linkToOSMWiki") != null) ? document.getElementById("linkToOSMWiki").innerHTML = langRef[document.body.id][languageOfUser].LNK_OSMWIKI : "")
		};
		try {
			initFilters();
		} catch {}
	} else {
		alert("Language datas couldn't be loaded.");
	}
}
getLangFromHash();
