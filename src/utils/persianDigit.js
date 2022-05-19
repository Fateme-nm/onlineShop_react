export default String.prototype.toPersinaDigit= function(){ 
    let id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']; return this.replace(/[0-9]/g, function(w){ return id[+w] }); 
}
