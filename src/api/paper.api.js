function get_paper_list(action) {
    fetch('papers')
        .then(
            response => response.json(),
            error => console.error(error)
        )
        .then(json => action(json));
}

function add_paper(data) {
    fetch('papers/add', {
        method: 'POST',
        headers: {
            // 'Accept': 'application/x-www-form-urlencoded',
            // 'Content-Type': 'multipart/form-data',
        },
        body: data
    }).then(response => console.log(response))
        .catch(error => console.error(error));
}

export {
    add_paper,
    get_paper_list
};