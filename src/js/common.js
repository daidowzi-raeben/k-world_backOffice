export const _isUser = () => {
    return sessionStorage.getItem('user_id');
}

export const _dateFormatYmd = (v) => {
    const date = new Date(v);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = `${year}-${month}-${day}`;
    return dateStr;
}

export const _dateFormatYmdDot = (v) => {
    const date = new Date(v);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = `${year}.${month}.${day}`;
    return dateStr;
}