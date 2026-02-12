export default function getListStudentsIds(students){
    if (!Array.isArray(getListStudents(students))){
        return [];
    }
    return getListStudents().map(student => student.id);
}