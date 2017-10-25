

//Format the header with HTML vars in helper.js
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.headshot);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedMobile = HTMLmobile.replace("%data%", bio.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
formattedGithub = formattedGithub.replace("%URL%", bio.github);

//add top contact info
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);

//fill in header
//$("#topContacts").prepend('<img src="images/bmd_logo.png" class="logo_img">');
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcome);

//fill in skills at a glance
if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var i = 0;
    while(i < skills.length){
        var skill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(skill);
        i++;
    }
}

if(education.schools.length > 0){
    $("#header").append(HTMLschoolStart);
    var i = 0;
    while(i < education.schools.length){
        
        var logo = HTMLschoolLogo.replace("%data%", education.schools[i].logo);
        var school = HTMLschoolName.replace("%data%", logo);
        var degree = HTMLschoolDegree.replace("%data%", "Bachelor of Arts: Computer Science, Bachelor of Arts: Secondary Education - Social Studies");
        $("#education-entry").append(school);
        $("#education-entry").append(degree);

        i++;
    }
}

//fill in courses under education
if(coursework.classes.length > 0){
    var i = 0;
    while(i < coursework.classes.length){
        var courses = HTMLskills.replace("%data%", coursework.classes[i].name);
        $("#courses").append(courses);
        i++;
    }
}
displayWork();


//displays projects
projects.display = function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedProjName = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
        formattedProjName = formattedProjName.replace("%URL%", projects.projects[project].url)
        var formattedProjDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedProjImg = HTMLprojectImage.replace("%data%", projects.projects[project].image);

    
        $(".project-entry:last").append(formattedProjName);;
        $(".project-entry:last").append(formattedProjDesc);
        

        if(projects.projects[project].name === "Race Dash"){
            $(".project-entry:last").append('<div class="row"><div class="embed-responsive embed-responsive-16by9 col-sm-4"><video muted autoplay loop class="embed-responsive-item col-sm-4"><source src="images/gridDash.mp4" type="video/mp4"></video></div><img src="images/raceDash.png" id="race-dash"></div>')
        }else{

        $(".project-entry:last").append(formattedProjImg);
        }
    }
}

projects.display();





// log clicks
$(document).click(function(loc) {
    logClicks(event.pageX, event.pageY);
  });


//function to display work
function displayWork(){
for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].name)
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
    $(".work-entry:last").append(formattedEmployerTitle)
    $(".work-entry:last").append(formattedWorkDates);
    
    var formattedWorkDescription0 = HTMLworkDescription.replace("%data%", work.jobs[job].roles[0]);
    $(".work-entry:last").append(formattedWorkDescription0);
    var formattedWorkDescription1 = HTMLworkDescription2.replace("%data%", work.jobs[job].roles[1]);
    $(".work-entry:last").append(formattedWorkDescription1);
}
}
