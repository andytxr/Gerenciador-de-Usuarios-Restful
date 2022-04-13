class Fetch {

    static get(url, params = {}) {

        return Fetch.request('GET', url, params);
        
    }

    static delete(url, params = {}) {

        return Fetch.request('DELETE', url, params);
        
    }

    static put(url, params = {}) {

        return HttpRequest.request('PUT', url, params);
        
    }

    static post(url, params = {}) {

        return HttpRequest.request('POST', url, params);
        
    }

    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {

            let request;

            if(method.toLowerCase()==='get'){

                request=url;

            }else{

                request = new Request(url,{
                    method,
                    body: JSON.stringify(params),
                    headers: new Headers({
                        'Content-Type':'application/json'
                    })
                })

            }

            fetch(request).then(response =>{

                response.json().then(json=>{

                    resolve(json);

                }).catch(e=>{

                    reject(e);

                })

            }).catch(e=>{

                reject(e);

            })


        });

    }

}