const KEY = "LIST_SCROLL_POS";

export const getPos = () => {
    let pos = sessionStorage.getItem(KEY);
    if (!pos) pos = 0;

    return pos;
}
export const savePos = data => {
    sessionStorage.setItem(KEY, data);
} 