/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches) {
    const freq = {1: 0, 0: 0};
    const studentCnt = students.length; 
 
    for (const item of students){
        freq[item]++;
    }
     
    let fedCnt;
    for (fedCnt = 0; fedCnt < studentCnt && freq[sandwiches[fedCnt]] > 0; ++fedCnt)
       freq[sandwiches[fedCnt]]--;
     
    return studentCnt - fedCnt;    
 };