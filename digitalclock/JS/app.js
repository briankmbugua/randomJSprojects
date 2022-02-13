function updateTime(){
    let dateInfo = new Date();
    let hr;
    let _min = (dateInfo.getMinutes() <10)?"0" + dateInfo.getMinutes():dateInfo.getMinutes();
}