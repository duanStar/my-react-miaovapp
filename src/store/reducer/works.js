export default function works(works={
    data:[],
    loading:false,
    loadEnd:false,
    page: 1
},action){
    switch(action.type){
        case "LOAD":
            return {
                ...works,
                loading:true
            };
        case "LOADOVER":
            return {
                ...works,
                loading:false,
                page: ++works.page,
                data:works.data.concat(action.data)
            };
        case "LOADEND":
                return {
                    ...works,
                    loading:false,
                    loadEnd:true
                };
        default: 
            return works;
    }
}