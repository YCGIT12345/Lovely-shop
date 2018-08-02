export function priceControl(val,str){
    if(str=='big'){
        return val==0?0:parseInt(val/1);
    }else if(str=='small'){
        return val==0?0:parseInt(val*100%100);
    }
}
