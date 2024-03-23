const getAllData = () => {
    const allData = localStorage.getItem('saved-jobs');
    if (allData) {
        return JSON.parse(allData);
    }else {
        return [];
    }
}

const setData = (id) => {
    const allData = getAllData();
    const exist = allData.find(job => job === id);
    if(!exist){
        allData.push(id);
        localStorage.setItem('saved-jobs', JSON.stringify(allData));
    }
}

export {getAllData, setData};