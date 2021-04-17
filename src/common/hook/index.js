function useBack(history){
    return function(){
        if(history.length>1){
            history.goBack();
        }else{
            history.push('/');
        }
    }
}

function useInnerHeight(){
    return window.innerHeight;
}

export {
    useBack,
    useInnerHeight
}