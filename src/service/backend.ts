const URL_GENERAL = 'https://api.themoviedb.org/3/';  // TODO : put in config file
const URL_IMG = "https://image.tmdb.org/t/p/"; // TODO : put in config file 
const API_KEY = '9c9da0a68ba88710f2fc3f0cf0825d92'; // TODO : put in config file 

export default function get(path: string, parameters?: string): Promise<any> { // TODO : parameters = ugly, but I'm running out of time
    const options: RequestInit = {
        headers: {
            'content-type': 'application/json'
        },
        method: 'get'
    }

    const url = URL_GENERAL + path + '?api_key=' + API_KEY + '&' + parameters; 
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                return Promise.reject({ // TODO : Better error handling (this is a very basic one)
                    status_message: "Erreur API The Movie Database",
                    status_code: response.status
                });
            }
            if (response.status === 200) {
                return response.json()
            }
            return Promise.reject({
                status_message: "Erreur API The Movie Database",
                status_code: "A creuser"
            });
        })
}

export function getFullPosterPath(posterPath: string) {
    return URL_IMG + 'w92' + posterPath;
}