export default function getListStudentsIds(students){
    if (!Array.isArray(students)){
        return [];
    }
    return getListStudents().map(student => student.id);
} 