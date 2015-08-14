//instantiate a web-worker

var bio = {
	firstname: 'Les',
	lastname: 'Ansley',
	role : 'Associate Professor',
	contacts: {
		email: ['les@ansleyfamily.com','mailto:les@ansleyfamily.com'],
		mobile: ['+44 7999 418 119','tel:+447999418119'],
		twitter: ['@dr_les', 'https://twitter.com/dr_les'],
		linkedin: ['lesansley','https://uk.linkedin.com/in/lesansley'],
		google: ['+lesansley', 'https://plus.google.com/+LesAnsley'],
		github: ['lesansley','https://github.com/lesansley']
	},
	'bioPic': 'images/profile.jpg',
	'welcomeMsg': 'After more than a decade building a successful academic career I am looking for new challenges that meld my enthusiam for technology, data and design.',
	'skills': ['leadership','problem solving','analytical thinking','data analysis','research','project management','technology','javascript','vbscript', 'vba','teaching','public speaking','excel','html','css','macros']
};

var work = {
	'jobs': [
		{
			employer: 'Northumbria University',
			role: 'Associate Professor',
			dates: 'Sep 2007 to Present',
			location: 'Newcastle, UK',
			description: 'Lead research projects in between attending (a lot of) meetings'
		},
		{
			employer: 'Kingston University',
			role: 'Senior Lecturer',
			dates: 'Sep 2003 to Aug 2007',
			location: 'London, UK',
			description: 'Lecturing and module development'
		},
		{
			employer: 'Institut Montana',
			role: 'Teacher',
			dates: 'Sep 1998 to Aug 1999',
			location: 'Zug, Switzerland',
			description: 'Teaching science and physical education to 12 and 13 year-olds'
		}
	]
};

var project = {
	'programs': [
		{
			title: 'Violet Project',
			dates: 'Current',
			description: 'blah',
			image: 'images/holder.gif'
		},
		{
			title: 'BaJIR',
			dates: 'Current',
			description: 'blah',
			image: 'images/nhs.jpg'
		},
		{
			title: 'Newcastle Falcons',
			dates: 'November 2013',
			description : 'blah',
			image: 'images/falcons.png'
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
			dates: 'Sep 2004 to Jun 2005'
		},
		{
			name: 'University of Cape Town',
			degree: 'PhD',
			major: 'Physiology',
			location: 'Cape Town, South Africa',
			dates: 'Jan 2000 to Mar 2003'
		},
		{
			name: 'University of Birmingham',
			degree: 'BSc (Hons)',
			major: 'Sport & Exercise Science',
			location: 'Birmingham, UK',
			dates: 'Sep 1996 to Jun 1998'
		}
	],
	'onlineCourses': [
		{
			title: 'Front-end Web Developer',
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
	var formattedbioPic = HTMLbioPic.replace('%data%', bio.bioPic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);

	$('#header').prepend(formattedNameRole);

	//Add contact information

	for(var contact in bio.contacts) {
		var formattedContact = HTMLcontactGeneric.replace('%contact%', contact + ' ');
		formattedContact = formattedContact.replace('%data%', bio.contacts[contact][0])
		formattedContact = formattedContact.replace('%link%', bio.contacts[contact][1])

		$('#topContacts').append(formattedContact);
	}

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
};

skills.display = function() {

	$('#skills').append(HTMLskillsSectionContainer);

	$('#skills-section-container').append(HTMLskillsSectionStart);
	for(var skill in bio.skills) {
			var formattedSectionSkill = HTMLskillsSectionContent.replace('%data%', bio.skills[skill]);
			$('#skills-section-list').append(formattedSectionSkill);
		}
}

contact.display = function() {
	$('#contact').append(HTMLcontactContainer);

	for(var contact in bio.contacts) {
		$('#contact-container').append(HTMLcontactStart);
		var formattedContactChannel = HTMLcontactChannel.replace('%data%', contact);
		var formattedContactInfo = HTMLcontactInfo.replace('%data%',bio.contacts[contact][0]);
		formattedContactInfo = formattedContactInfo.replace('%link%', bio.contacts[contact][1]);

		$('.contact-entry:last').append(formattedContactChannel);
		$('.contact-entry:last').append(formattedContactInfo);
	}

}

//function to display work experience
work.display = function() {

	$('#workExperience').append(HTMLworkContainer);

	for(var job in work.jobs) {

		//Create div for work experience
		$('#work-container').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
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

//function to display  projects
projects.display = function() {
	//This variable sets the number of columns in the portfolio section
	var columns = 3;
	var index = 0;

	$('#projects').append(HTMLprojectContainer);

	while (index < project.programs.length) {

		$('#project-container').append(HTMLprojectStart);

		var iterations = frameWorkDivision(project.programs.length, index, columns);

		for(var i=0; i<iterations; i++) {

			var formattedframeworkDiv = HTMLframeworkDiv.replace('%num%', 12/columns);
			$('.project-entry:last').append(formattedframeworkDiv);

			var formattedTitle = HTMLprojectTitle.replace('%data%',project.programs[index].title);
			var formattedDates = HTMLprojectDates.replace('%data%',project.programs[index].dates);
			var formattedDescription = HTMLprojectDescription.replace('%data%',project.programs[index].description);
			var formattedImage = HTMLprojectImage.replace('%data%',project.programs[index].image);

			$('.framework-entry:last').append(formattedTitle);
			$('.framework-entry:last').append(formattedDates);
			$('.framework-entry:last').append(formattedDescription);
			$('.framework-entry:last').append(formattedImage);

			index++;
		}
	}
};

//function to display education
education.display = function() {

	$('#education').append(HTMLschoolContainer);

	for(var school in education.schools) {

		//Create div for work experience
		$('#school-container').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%',education.schools[school].name);
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
projects.display();
education.display();
skills.display();
contact.display();

//set the display of the sections to none
document.getElementById('skills-section-container').style.display = 'none';
document.getElementById('work-container').style.display = 'none';
document.getElementById('project-container').style.display = 'none';
document.getElementById('school-container').style.display = 'none';
document.getElementById('contact-container').style.display = 'none';
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
var workStatus, educationStatus, projectStatus, mapStatus, publicationStatus, skillsStatus, contactStatus= false;

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

function triggerResize() {
	initializeMap();
	google.maps.event.trigger(map, 'resize')
}


//passes the current display status of the section (i.e. none=false; block=true) to the local variable
function passFromStatus(section) {
	switch(section) {
		case 'work':
	        return workStatus;
    	case 'education':
	        return educationStatus;
	    case 'project':
	    	return projectStatus;
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
	    case 'project':
	    	projectStatus = status;
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

//function to get pubmed array of publication ids using a web-worker
function getPublications() {

	var pubWorker = new Worker('js/pub-worker.js');

	var pubmedSearchAPI = "http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?";
    var pubmedSummaryAPI ="http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?";
    var database = "pubmed";
    var returnmode = "json";
    var returnmax = "100";
    var searchterm = "ansley+l[author]";
    var returntype = "abstract";

    $('#publication').append(HTMLpublicationContainer);
    document.getElementById('publication-container').style.display = 'none';

    //start the web-worker
    pubWorker.postMessage({'pubmedSearchAPI':pubmedSearchAPI, 'pubmedSummaryAPI':pubmedSummaryAPI,
    	'database':database, 'returnmode':returnmode, 'searchterm':searchterm, 'returntype':returntype});

    //listen for response from web-worker
    pubWorker.onmessage = function(e) {
      var publications = e.data;
      $('.publication-entry').append(publication);
      document.getElementById('publication-container').style.display = 'block';
    }
}
//run these scripts when the form loads
function onFormLoad() {
}