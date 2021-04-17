export default function messageList(message={
    messageList:[],
    loading:false,
    loadEnd:false,
    page: 1
},action){
    switch(action.type){
        case "MESSAGE_LOAD":
            return {
                ...message,
                loading:true
            };
        case "MESSAGE_LOADOVER":
            return {
                ...message,
                loading:false,
                page: ++message.page,
                messageList:message.messageList.concat(action.messageList)
            };
        case "MESSAGE_LOADEND":
                return {
                    ...message,
                    loading:false,
                    loadEnd:true,
                };
        case "MESSAGE_RESET":
            return {
                messageList: [],
                loading:false,
                loadEnd:false,
                page: 1
            };
        case "MESSAGE_ADD":
            return {
                ...message,
                messageList:[action.messageList,...message.messageList]
            };
        default: 
            return message;
    }
}