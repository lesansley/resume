var HTMLheaderName = '<header class="row"><div class="col-headerName"><h1><span id="firstname">%first%</span><span id="lastname">%last%</span></h1></div>';
var HTMLheaderRole = '<div class="col-headerRole role-div"><span class="headerRole">%data%</span></div></header><hr class="header-divider"/>';

var HTMLcontactGeneric = '<li class="flex-item contact-item"><span class="orange-text">%contact%</span><span class="contact-text"><a class="contact-link" target="_blank" href="%link%">%data%</a></span></li>';

var HTMLbioPic = '<img id="biopic" src="%data%" class="biopic mobile-invisible" onMouseOver="return changeBioPic()" onMouseOut="return changeBioPicBack()">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-title" class="mobile-invisible">Skills at a Glance:</h3><ul id="skills-list" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item skill-item"><span class="skills-text">%data%</span></li>';

var HTMLskillsSectionContainer = '<section id="skills-section-container"></section>'
var HTMLskillsSectionStart = '<ul id="skills-section-list" class="flex-box"></ul>'
var HTMLskillsSectionContent = '<li class="flex-item skill-section-item"><span class="skills-section-text">%data%</span></li>'

var HTMLworkContainer ='<section id="work-container"></section>'
var HTMLworkStart = '<div class="work-entry row"></div>';
var HTMLworkEmployer = '<div class="col-2 workPlace"><a class="workPlace"href="#">%data%</a></div>';
var HTMLworkRole = '<div class="work-role col-10">%data%</div>';
var HTMLworkDates = '<div class="date-text col-8">%data%</div>';
var HTMLworkLocation = '<div class="location-text col-4">%data%</div>';
var HTMLworkDescription = '<div class="work-description col-12">%data%</div>';

var HTMLprojectContainer ='<section id="project-container"></section>'
var HTMLprojectStart = '<div class="project-entry row"></div>';
var HTMLprojectTitle = '<a class="projectTitle" href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<div>%data%</div>';
var HTMLprojectImage = '<figure><img class="imgResponsive" src="%data%"></figure>';

var HTMLschoolContainer ='<section id="school-container"></section>'
var HTMLschoolStart = '<div class="education-entry row"></div>';
var HTMLschoolName = '<div class="col-3 schoolPlace"><a class="schoolPlace" href="#">%data%</a></div>';
var HTMLschoolDegree = '<div class="col-10">%data%</div>';
var HTMLschoolDates = '<div class="date-text col-8">%data%</div>';
var HTMLschoolLocation = '<div class="location-text col-4">%data%</div>';
var HTMLschoolMajor = '<div class="school-major col-12"><em>%data%</em></div>';

var HTMLonlineClasses = '<h3 class="subSection">Online Classes</h3>';
var HTMLonlineTitle = '<div class="col-12"><a class="onlineCourse" href="%url%" target="_blank">%data%</a></div>';
var HTMLonlineSchool = '<div class="col-12 online-school">%data%</div>';
var HTMLonlineDates = '<div class="col-12 date-text">%data%</div>';

var HTMLpublicationContainer = '<section id="publication-container"></section>';
var HTMLpublicationStart = '<div class="publication-entry row"></div>';
var HTMLpublicationAuthor = '%data%, ';
var HTMLpublicationLastAuthor = '%data%.';
var HTMLpublicationTitle = ' \'%data%\' ';
var HTMLpublicationJournal = '<i>%data%</i>, ';
var HTMLpublicationVolume = '<b>%data%';
var HTMLpublicationIssue = '(%data%)</b>:';
var HTMLpublicationPages = ' %data%, ';
var HTMLpublicationDate = '%data%.';

var HTMLpublication = '<div class="citation"><a class="reference" href="%data%" target="_blank">%authors%. \'%title%\' <i>%journal%</i>,<b>%volume%%issue%</b>%pages%%date%</div>'
var HTMLformattedPublication = '%authors%.&nbsp\'%title%\'&nbsp<i>%journal%</i>,&nbsp<b>%volume%</b>(%issue%):&nbsp%pages%,&nbsp%date%.'

var HTMLcontactContainer = '<section id="contact-container"></section>'
var HTMLcontactStart = '<div class="contact-entry row"></div>'
var HTMLcontactChannel = '<div class="contact-channel col-1 orange-text">%data%:</div>'
var HTMLcontactInfo = '<div class="contact-info col-9"><a class="contact-link" target="_blank" href="%link%">%data%</a></div>'

var HTMLmapContainer ='<div id="map-container"></div>'
var googleMap = '<section id="map"></section>';

var HTMLframeworkDiv = '<div class="col-%num% framework-entry"></div>'