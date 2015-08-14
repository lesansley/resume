importScripts('helper.js');

this.onmessage = function(e) {
    var publications, idStringList, summaryURL;

    var pubmedSearchAPI = e.data.pubmedSearchAPI;
    var pubmedSummaryAPI = e.data.pubmedSummaryAPI;
    var database = 'db=' + e.data.database;
    var returnmode = '&retmode=' + e.data.returnmode;
    var returnmax = '&retmax=' + e.data.returnmax;
    var searchterm = '&term=' + e.data.searchterm;
    var returntype = '&rettype=' + e.data.returntype;

    var idURL = pubmedSearchAPI + database + searchterm + returnmode + returnmax

    var getPubmed = function(url) {//passed url
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

    getPubmed(idURL).then(function(data) {
        var idList = data.esearchresult.idlist;
        idStringList = idList.toString(); //converts the idlist to a string to be appended to teh search url
    }, function(status) {
        publications = 'Something went wrong getting the ids.';
    });

    idStringList = '&id=' + idStringList;
    summaryURL = pubmedSummaryAPI + database + searchterm + returnmode + returntype + idStringList;

    getPubmed(summaryURL).then(function(summary) {
        publications = formatReferences(summary);
    }, function(status) {
        publications = 'Something went wrong getting the ids.';
    });

    postMessage(publications);
};

function formatReferences(summary) {
    var publicationList;
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
                    publication = publication.replace('%issue%','(' + summary.result[refs].issue + '): ');
                    publication = publication.replace('%pages%',summary.result[refs].pages +', ');
                    var date = summary.result[refs].pubdate.slice(0,4);
                    publication = publication.replace('%date%',date + '.');
                }
                else {
                    publication = publication.replace('%volume%','');
                    publication = publication.replace('%issue%','');
                    publication = publication.replace('%pages%','');
                    publication = publication.replace('%date%','');
                    publication = publication + ' In Press.'
                }
                publicationList = publication + publicationList + '<p>';
            }
        }
    return(publicationList);
}