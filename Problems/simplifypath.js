const simplifyPath = (path)=> {
    const pathItems = path.split('/');
    const pathStack = [];
    for(let pathItem of pathItems){
        if(pathItem === '..'){
            pathStack.pop();
        }
        if(!['','.','..'].includes(pathItem) && pathItem.length){
            pathStack.push(pathItem);
        }
    }
    return `/${pathStack.join('/')}`;
}

console.log(simplifyPath('/hello/hi/././../heya/'))