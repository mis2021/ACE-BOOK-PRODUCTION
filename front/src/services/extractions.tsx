export const extractObjectId = (data: any) => {
    let stringArray = null;
    if (data) {
        stringArray = data.map((item: any) => {
            return item._id;
        });
    }


    return stringArray;
}