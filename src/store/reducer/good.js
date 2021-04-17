export default function good(good={
    good: false,
    goodId: 0
},action){
    switch(action.type){
        case "GOOD":
            return {
                good: true,
                goodId: action.goodId
            };
        case "CANCEL_GOOD":
            return {
                good: false,
                goodId: 0
            };
        default: 
            return good;
    }
}