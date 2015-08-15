importScripts('helper.js');
var publications;

onmessage = function(e) {
    var idStringList, summaryURL;

    var pubmedSearchAPI = e.data.pubmedSearchAPI;
    var pubmedSummaryAPI = e.data.pubmedSummaryAPI;
    var database = 'db=' + e.data.database;
    var returnmode = '&retmode=' + e.data.returnmode;
    var returnmax = '&retmax=' + e.data.returnmax;
    var searchterm = '&term=' + e.data.searchterm;
    var returntype = '&rettype=' + e.data.returntype;

    //Generate URL to pass in AJAX query
    var idURL = pubmedSearchAPI + database + returnmode + returnmax + searchterm

    //AJAX query with Promise
    var getPubmed = function(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                var status = xhr.status;
                if (status == 200) {//status 200 signifies OK (http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp)
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send();
        });
    };

    getPubmed(idURL).then(function(data) {//calls the AJAX function and provides resolve function
        var idList = data.esearchresult.idlist;
        idStringList = idList.toString(); //converts the idlist to a string to be appended to the search url
        idStringList = '&id=' + idStringList;
        //Generate URL to pass in AJAX query with returned ids
        summaryURL = pubmedSummaryAPI + database + returnmode + returntype + idStringList;
        getPubmed(summaryURL).then(function(summary) {
            publications = formatReferences(summary);
            postMessage(publications);
            //console.log(publications);
        }, function(status) {
            publications = 'Something went wrong getting the ids.';
        });
    }, function(status) {
        publications = 'Something went wrong getting the ids.';
    });

    function formatReferences(summary) {
        var publicationList = '';
        var i=1;
        for(refs in summary.result) {
            if(refs !== 'uids') {
                var authors = '';
                var publication = '';
                var authorCount = ((summary.result[refs].authors).length);
                var i=0;
                while (i<authorCount-1) {
                    authors += summary.result[refs].authors[i].name + ', ';
                    i++;
                }
                publication = HTMLpublication.replace('%data%','http://www.ncbi.nlm.nih.gov/pubmed/'+refs)
                authors += summary.result[refs].lastauthor;
                publication = publication.replace('%authors%',authors);
                publication = publication.replace('%title%',summary.result[refs].title);
                publication = publication.replace('%journal%',summary.result[refs].source);
                //Alter formatting if article is In Press
                if(summary.result[refs].volume!=='') {
                    publication = publication.replace('%volume%',' ' + summary.result[refs].volume);
                    if (summary.result[refs].issue!=='') {
                        publication = publication.replace('%issue%','(' + summary.result[refs].issue + ')');
                    }
                    else {
                        publication = publication.replace('%issue%','');
                    }
                    publication = publication.replace('%pages%',': ' + summary.result[refs].pages +', ');
                    var date = summary.result[refs].pubdate.slice(0,4);
                    publication = publication.replace('%date%',date + '.');
                }
                else {
                    publication = publication.replace('%volume%',' In Press');
                    publication = publication.replace('%issue%','');
                    publication = publication.replace('%pages%','.');
                    publication = publication.replace('%date%','');
                }
                publicationList = publication + publicationList;
            }
        }
        return(publicationList);
    }
}

