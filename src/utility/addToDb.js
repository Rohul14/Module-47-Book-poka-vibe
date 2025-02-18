import { toast } from "react-toastify";


const getStoredReadList=()=>{
    const storedListStr=localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList=JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addStoredReadList=(id)=>{
    const storedList=getStoredReadList();
    if (storedList.includes(id)) {
        toast.error('Already This book is added to your read list')
    }else{
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);
        toast.success(' This book is added to your read list')
    }
}


const getStoredWishList=()=>{
    const storedListStr=localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList=JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addStoredWishList=(id)=>{
    const storedList=getStoredWishList();
    if (storedList.includes(id)) {
        toast.error('Already This book is added to your wish list')
    }else{
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr)
        toast.success('This book is added to your wish list')
    }
}

export {addStoredReadList,addStoredWishList,getStoredReadList,getStoredWishList}