/*
@SergioTapia Depth First Search, a basic algorithm, basically recurse as deep as possible, if not found, backtrack one level and search for another, until found. See en.wikipedia.org/wiki/Depth-first_search – 
Kevin Qian
 Mar 15 '18 at 20:29
*/

export const dfs = (obj, targetId) => {
    if (obj.id === targetId) {
        return obj
    }
    if (obj.children) {
        for (let item of obj.children) {
            let check = dfs(item, targetId)
            if (check) {
                return check
            }
        }
    }
    return null
}