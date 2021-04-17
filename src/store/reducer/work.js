export default function work(work={
    data:{
        image_path: []
    },
    loading: true
},action){
    switch(action.type){
        case "WORK_RESET":
            return {
                data: {},
                loading: true
            };
        case "WORK_LOADOVER":
            return {
                data: action.data,
                loading: false
            };
        default: 
            return work;
    }
}