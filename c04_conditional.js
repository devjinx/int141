grading();
function grading(score){
    var score = 80
    var grade
    if (80 <= score && score <= 100){
        grade = "A";
    }
    else if (70 <= score && score <= 80){
        grade = "B";
    }
    else if (60 <= score && score <= 70){
        grade = "C";
    }
    else if (0 <= score && score <= 60){
        grade = "F";
    }
    else {
        grade = "UNKNOWN";
    }
    console.log(grade)
}
//This if else is correct but not good in logic

function grading(score) {
    var grade
    if (score > 100) {
    grade = "UNKNOWN" ;
    } else if (score > 80) {
    grade = "A";
    } else if (score > 70) {
    grade = "B";
    } else if (score > 60) {
    grade = "C";
    } else if (score >= 0) {
    grade = "F";
    } else {
    grade = "UNKNOWN" ;
    }
    return grade;
}
//This if else is correct but not good in logic

function grading(score) {

    function grading(score) {
        if (score <= 100) {
            if (score >= 80) return "A"; 
            if (score >= 70) return "B"; 
            if (score >= 60) return "C"; 
            if (score >= 0) return "F";
        }
        }
        return "UNKNOWN"

    /*
    if (score > 100) return "UNKNOWN" ;
    if (score > 80) return "A";
    if (score > 70) return "B";
    if (score > 60) return "C";
    if (score >= 0) return "F";
    return "UNKNOWN" ;
    */

}
//This if else is correct but Maybe good in logic idk but now is good dr.kk tell me ma kub