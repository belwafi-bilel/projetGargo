var lang;
var retrievedObject = localStorage.getItem('languageInfoObject');    
if (retrievedObject === undefined || retrievedObject === null) {
    var languageInfo = {'country': 0};
    localStorage.setItem('languageInfoObject', JSON.stringify(languageInfo));
    lang = 0;
} else {
    var object = JSON.parse(retrievedObject);
    lang = object['country'];
    // alert(lang)
    
}