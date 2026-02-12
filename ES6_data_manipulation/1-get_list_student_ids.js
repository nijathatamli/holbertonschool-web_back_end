export default function getListStudentsIds(students){
    if (!Array.isArray(getListStudents())){
        return [];
    }
    return getListStudents().map(student => student.id);
}