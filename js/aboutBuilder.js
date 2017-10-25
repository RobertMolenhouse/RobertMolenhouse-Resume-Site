




//Build page
var aboutTitle = HTMLaboutTitle;
var aboutHeader = HTMLaboutMeHeader.replace("%data%", about.brief);
var aboutMe = HTMLaboutMeP.replace("%data%", about.full);

$("#about-info").append(aboutTitle);
$("#about-info").append(aboutHeader);
$("#about-info").append(aboutMe);

if(coursework.classes.length > 0){
    var i = 0;
    $("#about-hope-info").append(HTMLCourseSpecifics);
    while(i < coursework.classes.length){
        var courses = HTMLskills.replace("%data%", coursework.classes[i].name);
        $("#about-hope-info").append(courses);
        var courseDesc = HTMLaboutMeP.replace("%data%", coursework.classes[i].description)
        $("#about-hope-info").append(courseDesc);        
        i++;
    }
}