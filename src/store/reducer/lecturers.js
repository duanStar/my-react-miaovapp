export default function lecturers(lecturers={
    data:[]
},action){
    switch(action.type){
        case "LOAD_LECTURERS":
            return {
                data: action.data
            };
        default: 
            return lecturers;
    }
}