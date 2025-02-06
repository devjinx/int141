grading();
function grading(score){
    var score = 75
    var grade
    if (80 <= score <= 100){
        grade = "A";
    }
    else if (70 <= score <= 80){
        grade = "B";
    }
    else if (60 <= score <= 70){
        grade = "C";
    }
    else if (0 <= score <= 60){
        grade = "F";
    }
    else {
        grade = "UNKNOWN";
    }
    console.log(grade)
}
//This How if else is incorrect