export const calcProgressBar = (progressBar, calories, operator) => {
    let value = 0,
        percent = 0;
    if(operator==='+')
        value = progressBar.value + calories;
    else if(operator==='-')
        value = progressBar.value - calories;
    percent = ((value/progressBar.max)*100).toFixed(2);
    return { value, percent }
};
export const getCurrentDayText = (number) => {
    let dayTmp;
    switch (number) {
        case 0:
            dayTmp = 'Dom';
            break;
        case 1:
            dayTmp = 'Lun';
            break;
        case 2:
            dayTmp = 'Mar';
            break;
        case 3:
            dayTmp = 'Mie';
            break;
        case 4:
            dayTmp = 'Jue';
            break;
        case 5:
            dayTmp = 'Vie';
            break;
        case 6:
            dayTmp = 'Sáb';
            break;
        default:
            dayTmp = '';
            break;
    }
    return dayTmp;
};