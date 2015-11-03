var bio = {
	firstname: 'Les',
	lastname: 'Ansley',
	role : 'Research Scientist',
	contacts: {
		email: ['les@ansleyfamily.com','mailto:les@ansleyfamily.com','images/email_30x30.png'],
		mobile: ['+44 7999 418 119','tel:+447999418119','images/phone_30x30.png'],
		twitter: ['@dr_les', 'https://twitter.com/dr_les','images/twitter_30x30.png'],
		linkedin: ['lesansley','https://uk.linkedin.com/in/lesansley','images/linkedin_30x30.png'],
		google: ['+lesansley', 'https://plus.google.com/+LesAnsley','images/google_30x30.png'],
		github: ['lesansley','https://github.com/lesansley','images/github_30x30.png']
	},
	bioPic: [
		'images/profile.jpg',
		'images/cycling.jpg',
		'images/jumping.jpg',
		'images/painting.jpg'
	],
	'welcomeMsg': 'After more than a decade building a successful academic career I am looking for new challenges that meld my enthusiasm for technology, data and design.',
	'skills': ['leadership','problem solving','analytical thinking','data analysis','research', 'teaching', 'public speaking', 'responsive web design', 'javascript', 'jquery',  'bootstrap', 'knockout.js', 'html','css','vbscript','vba','excel','macros']
};

var work = {
	'jobs': [
		{
			employer: 'Northumbria University',
			role: 'Associate Professor',
			dates: 'Sep 2007 to Present',
			location: 'Newcastle, UK',
			description: 'Develop the department research strategy, lead research projects, mentor early career researchers, and attend (a lot of) meetings',
			url:'http://www.northumbria.ac.uk'
		},
		{
			employer: 'Kingston University',
			role: 'Senior Lecturer',
			dates: 'Sep 2003 to Aug 2007',
			location: 'London, UK',
			description: 'Lecturing and module development',
			url:'http://www.kingston.ac.uk'
		},
		{
			employer: 'Institut Montana',
			role: 'Teacher',
			dates: 'Sep 1998 to Aug 1999',
			location: 'Zug, Switzerland',
			description: 'Teaching science and physical education to 12 and 13 year-olds',
			url:'http://www.montana-zug.ch'
		}
	]
};

var portfolio = {
	'projects': [
		{
			title: 'Arcade Game',
			dates: '2015',
			description: 'An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.',
			image: 'images/arcade_game_300x300.jpg',
			github: 'https://github.com/lesansley/arcade-game.git'
		},
		{
			title: 'Portfolio',
			dates: '2015',
			description: 'A portfolio page developed using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.',
			image: 'images/portfolio_300x300.jpg',
			github: 'https://github.com/lesansley/portfolio.git'

		},
		{
			title: 'Neighbourhood Map',
			dates: '2015',
			description : 'An interactive, responsive map of a local neighborhood. The application	 was built with HTML, CSS, JavaScript, JQuery, KnockoutJS, the Google Maps API,  Wikipedia API and the Flickr API',
			image: 'images/neighbourhood_map_300x300.jpg',
			github: 'https://github.com/lesansley/neighbourhood-map.git'

		},
		{
			title: 'Resume',
			dates: '2015',
			description : 'An interactive resume application, developed using jQuery, that reads all data from a JSON file and then dynamically modifies the DOM to display the information.',
			image: 'images/resume_300x300.jpg',
			github: 'https://github.com/lesansley/resume.git'
		}
	]
};

var education = {
	'schools': [
		{
			name: 'Kingston University',
			degree: 'Post-Graduate Teaching Certificate',
			major: 'Higher Education',
			location: 'London, UK',
			dates: 'Sep 2004 to Jun 2005',
			url:'http://www.kingston.ac.uk'
		},
		{
			name: 'University of Cape Town',
			degree: 'PhD',
			major: 'Physiology',
			location: 'Cape Town, South Africa',
			dates: 'Jan 2000 to Mar 2003',
			url:'http://www.uct.ac.za'
		},
		{
			name: 'University of Birmingham',
			degree: 'BSc (Hons)',
			major: 'Sport & Exercise Science',
			location: 'Birmingham, UK',
			dates: 'Sep 1996 to Jun 1998',
			url:'http://www.bham.ac.uk'
		}
	],
	'onlineCourses': [
		{
			title: 'Front-end Web Developer NanoDegree',
			school: 'Udacity',
			dates: 'Apr 2015 to Current',
			url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		}
	]
};

var publication = getPublications();

//function to display bio
bio.display = function() {

	var formattedheaderRole = HTMLheaderRole.replace('%data%',bio.role);
	var formattedheaderName = HTMLheaderName.replace('%first%',bio.firstname);
	formattedheaderName = formattedheaderName.replace('%last%',bio.lastname);
	var formattedNameRole = formattedheaderName + formattedheaderRole;
	var formattedbioPic = HTMLbioPic.replace('%data%', bio.bioPic[0]);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);

	$('#header').prepend(formattedNameRole);

	//Add contact information



	//Add skills
	$('#introduction').append(formattedbioPic);
	$('#introduction').append(formattedwelcomeMsg);
	if(bio.skills.length>0) {
		$('#introduction').append(HTMLskillsStart);

		for(var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
			$('#skills-list').append(formattedSkill);
		}
	}

	//Add contact icons in footer
	$('#footer').prepend(HTMLfootContactContainer);
	console.log('here');
	$('#foot-contact-container').append(HTMLfootContactStart);

		for(var contact in bio.contacts) {

			var formattedfootContactContent = HTMLfootContactContent.replace('%data%', bio.contacts[contact][2]);
			formattedfootContactContent = formattedfootContactContent.replace('%url%', bio.contacts[contact][1]);

			$('#foot-contact-list').append(formattedfootContactContent);
		}

};

skills.display = function() {

	$('#skills').append(HTMLskillsSectionContainer);

	$('#skills-section-container').append(HTMLskillsSectionStart);
	for(var skill in bio.skills) {
			var formattedSectionSkill = HTMLskillsSectionContent.replace('%data%', bio.skills[skill]);
			$('#skills-section-list').append(formattedSectionSkill);
		}
}

//function to display work experience
work.display = function() {

	$('#workExperience').append(HTMLworkContainer);

	for(var job in work.jobs) {

		//Create div for work experience
		$('#work-container').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		formattedEmployer = formattedEmployer.replace('%url%', work.jobs[job].url);
		var formattedRole = HTMLworkRole.replace('%data%', work.jobs[job].role);
		var formattedDates = HTMLworkDates.replace('%data%',work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%',work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description);

		$('.work-entry:last').append(formattedEmployer);
		$('.work-entry:last').append(formattedRole);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append(formattedDescription);

	}
};

//function to display  portfolios
portfolios.display = function() {

	$('#portfolios').append(HTMLportfolioContainer);

	//Set an event listener for mousoever
	$('#portfolios').mouseover(function(e) {
		if(e.target && (e.target.nodeName == 'IMG' || e.target.nodeName == 'SPAN')) {
			if(e.target.id !== 'portfolioButton') {
				var id = e.target.id
				var start = id.search('-') + 1;
				var end = id.length;
				var index = id.slice(start, end);
				showDescription(index);
			}
		}
	});

	$('#portfolios').mouseout(function(e) {
		if(e.target && (e.target.nodeName == 'IMG' || e.target.nodeName == 'SPAN')) {
			if(e.target.id !== 'portfolioButton') {
				var id = e.target.id
				var start = id.search('-') + 1;
				var end = id.length;
				var index = id.slice(start, end);
				hideDescription(index);
			}
		}
	});

	var projects = portfolio.projects;

	for (var project in projects) {

		if (project%2 === 0) {
			$('#portfolio-container').append(HTMLportfolioStart);
		}

		var formattedframeworkDiv = HTMLframeworkDiv.replace('%num%', 6);
		$('.portfolio-entry:last').append(formattedframeworkDiv);

		var formattedTitle = HTMLportfolioTitle.replace('%data%',projects[project].title);
		formattedTitle = formattedTitle.replace('%url%', projects[project].github);

		var formattedImage = HTMLportfolioImage.replace('%data%',projects[project].image);
		var formattedDescription = HTMLportfolioDescription.replace('%data%',projects[project].description);

		var formattedImageDescription = formattedImage + formattedDescription;

		formattedImageDescription = formattedImageDescription.replace(/%index%/g, project);

		$('.framework-entry:last').append(formattedTitle);
		$('.framework-entry:last').append(formattedImageDescription);
	}
};

function showDescription(index) {
	var elemImg = 'projectImage-' + index;
	var elemSpan = 'projectDescription-' + index;

	$('#' + elemSpan)[0].style.visibility = 'visible';
	$('#' + elemImg)[0].style.opacity = '0.1';
}

function hideDescription(index) {
	var elemImg = 'projectImage-' + index;
	var elemSpan = 'projectDescription-' + index;

	$('#' + elemSpan)[0].style.visibility = 'hidden';
	$('#' + elemImg)[0].style.opacity = '1';
}

//function to display education
education.display = function() {

	$('#education').append(HTMLschoolContainer);

	for(var school in education.schools) {

		//Create div for work experience
		$('#school-container').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%',education.schools[school].name);
		formattedName = formattedName.replace('%url%',education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace('%data%',education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace('%data%',education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace('%data%',education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace('%data%',education.schools[school].major);

		var formattedSchoolDegree = formattedName + formattedDegree;

		$('.education-entry:last').append(formattedName);
		$('.education-entry:last').append(formattedDegree);
		$('.education-entry:last').append(formattedDates);
		$('.education-entry:last').append(formattedLocation);
		$('.education-entry:last').append(formattedMajor);
	}
	$('#school-container').append(HTMLschoolStart);
	$('.education-entry:last').append(HTMLonlineClasses);

	for(var course in education.onlineCourses) {

		$('#school-container').append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[course].title);
		formattedonlineTitle = formattedonlineTitle.replace('%url%',education.onlineCourses[course].url);
		var formattedonlineSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses[course].school);
		var formattedonlineDates = HTMLonlineDates.replace('%data%',education.onlineCourses[course].dates);

		$('.education-entry:last').append(formattedonlineTitle);
		$('.education-entry:last').append(formattedonlineDates);
		$('.education-entry:last').append(formattedonlineSchool);
	}
};

$('#mapDiv').append(googleMap);

//Function calls
bio.display();
work.display();
portfolios.display();
education.display();
skills.display();

//set the display of the sections to none
document.getElementById('skills-section-container').style.display = 'none';
document.getElementById('work-container').style.display = 'none';
document.getElementById('portfolio-container').style.display = 'none';
document.getElementById('school-container').style.display = 'none';
document.getElementById('map').style.display = 'none';

//This function calculates how many portfolio images need to go on each line
function frameWorkDivision(arrayLength, indexReached, columnsPerRow) {

	var iterations = Math.floor((arrayLength - indexReached) / columnsPerRow);

	if(iterations === 0) {
		iterations = (arrayLength - indexReached) % columnsPerRow;
	}
	else {
		iterations = columnsPerRow;
	}
	return iterations;
}

//preload images of the arrow icon for faster transition
var openArrow = new Image();
var closeArrow = new Image();

openArrow.src = 'images/arrow-down.jpg';
closeArrow.src = 'images/arrow-right.jpg';

//set initial status for section dropdown: Closed = FALSE
var workStatus, educationStatus, portfolioStatus, mapStatus, publicationStatus, skillsStatus, contactStatus= false;

//change the arrow icon when hover starts
function changeImage(buttonName, booleanName) {
	if(booleanName) {
		document.getElementById(buttonName).src = closeArrow.src;
	}
	else{
		document.getElementById(buttonName).src = openArrow.src;
	}
	return true;
}

//return arrow icon to reflect current display status of the section
function changeImageBack(buttonName, booleanName) {

	if(booleanName) {
		document.getElementById(buttonName).src = openArrow.src;
	}
	else{
		document.getElementById(buttonName).src = closeArrow.src;
	}
	return true;
}

//toggle the display status of the section and arrow icon
function handleMDown(buttonName, booleanName, elementName) {

	var status = passFromStatus(booleanName);

	if(status) {
		document.getElementById(buttonName).src = closeArrow.src;
		document.getElementById(elementName).style.display = 'none';
	}
	else {
		document.getElementById(buttonName).src = openArrow.src;
		document.getElementById(elementName).style.display = 'block';

		if(elementName==='map') {
			triggerResize();
		}
	}

 	status = !status;

 	passToStatus(booleanName, status);

 	return true;
}

//passes the current display status of the section (i.e. none=false; block=true) to the local variable
function passFromStatus(section) {
	switch(section) {
		case 'work':
	        return workStatus;
    	case 'education':
	        return educationStatus;
	    case 'portfolio':
	    	return portfolioStatus;
	    case 'map':
	    	return mapStatus;
	    case 'publication':
	    	return publicationStatus;
	    case 'skills':
	    	return skillsStatus;
	    case 'contact':
	    	return contactStatus;
    	default:
        	console.log('Error in setting status from boolean variable');
        	break;
	};
}

//sets the status of the section display property (i.e. none=false; block=true) from teh local variable
function passToStatus(section, status) {
	switch(section) {
		case 'skills':
	        skillsStatus = status;
	        break;
	    case 'contact':
	        contactStatus = status;
	        break;
		case 'work':
	        workStatus = status;
	        break;
    	case 'education':
	        educationStatus = status;
	        break;
	    case 'portfolio':
	    	portfolioStatus = status;
	    	break;
	    case 'map':
	    	mapStatus = status;
	    	break;
	    case 'publication':
	    	publicationStatus = status;
	    	break;
    	default:
        	console.log('Error in passing status back to boolean variable');
        	break;
	};
}

function changeBioPic() {
	var max = bio.bioPic.length;
	var index = getRandomInt(1,max);
	document.getElementById('biopic').src = bio.bioPic[index];
}

function changeBioPicBack() {
	document.getElementById('biopic').src = bio.bioPic[0];
}

function triggerResize() {
	initializeMap();
	google.maps.event.trigger(map, 'resize')
}

//function to get pubmed array of publication ids
function getPublications() {
	var pubmedSearchAPI = "http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?";
	var pubmedSummaryAPI ="http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?";
	var database = "pubmed";
	var returnmode = "json";
	var returnmax = "100";
	var searchterm = "ansley+l[author]";
	var returntype = "abstract";

	getPubmedId(pubmedSearchAPI,database,returnmode,returnmax,searchterm,pubmedSummaryAPI,returntype);
};

function getPubmedId(searchAPI,database,returnmode,returnmax,searchterm,abstractAPI,returntype) {

	var ids = [];

	$.get(searchAPI,{
		db: database,
		retmode: returnmode,
		retmax: returnmax,
		term: searchterm
	})
	.done(function(data) { //when the get is complete then do the next steps
		var ids = data.esearchresult.idlist;
    	var publications = [];
    	getPubmedReferences(ids,database,returnmode,abstractAPI,returntype);
    });
};

function getPubmedReferences(idList,database,returnMode,abstractAPI,returnType) {
   	var str = idList[0].toString();
    var idStringList = idList.toString();
    var jqxhr = $.get(abstractAPI,{
    	db: database,
    	retmode: returnMode,
    	retype: returnType,
    	id: idStringList
    })
	.done(function(summary) {
    	$('#publication').append(HTMLpublicationContainer);

    	for(refs in summary.result) {

			if(refs !== 'uids') {
				var authors = '';
				var publication = '';
				//reverse order by prepending
				$('#publication-container').prepend(HTMLpublicationStart);

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
				//Alter formatting if articel is In Press
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
				$('.publication-entry:first').append(publication);
			}
		}
		document.getElementById('publication-container').style.display = 'none';
    });
}

//generates a random integer based on the range provided
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//run these scripts when the form loads
function onFormLoad() {
}