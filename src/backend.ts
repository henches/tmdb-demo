const URL_BACKEND = 'https://api.themoviedb.org/3/';
const IMG_URL = "https://image.tmdb.org/t/p/";
const API_KEY = '9c9da0a68ba88710f2fc3f0cf0825d92';

export default function get(path: string, parameters?: string): Promise<any> { // TODO : parameters = très moche
    const options: RequestInit = {
        headers: {
            'content-type': 'application/json'
        },
        method: 'get'
    }

    const url = URL_BACKEND + path + '?api_key=' + API_KEY + '&' + parameters;
    console.log("backend url = ", url)
    return fetch(url, options)
        .then(response => {
            console.log("response = ", response);
            if (!response.ok) {
                return Promise.reject("pas bon")
            }
            if (response.status === 200) {
                return response.json()
            }
            return Promise.reject("pas bon non plus");
        })
}


export function getFullPosterPath(posterPath: string) {
    return IMG_URL + 'w92' + posterPath;
}