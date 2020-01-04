// API 接口
export default class FileClient {
    constructor(server, token, csrf) {
        this.server = server
        this.token  = token
        this.csrf   = csrf
    }

    static fromWindow() {
        return new FileClient(
            window && window.KAWA_SERVER,
            window && window.KAWA_TOKEN,
        )
	}
	
	static newClient(server, token) {
		return new FileClient(server, token)
	}

    uploadImage(file) {
        return this._post("/x/api/images", file)
    }

    uploadVideo(file) {
        return this._post("/x/api/videos", file)
    }

	_post(path, data) {
		return this._request("POST", path, data);
	}
    
    // request
    _request(method, path, file) {
		var endpoint = [this.server, path].join("");
		var xhr = new XMLHttpRequest();
		xhr.open(method, endpoint, true);
		if (this.token) {
			xhr.setRequestHeader("Authorization", `Bearer ${this.token}`);
		}
		if (this.appkey) {
			xhr.setRequestHeader("AppKey", this.appkey);
		}
		if (method !== "GET" && this.csrf) {
			xhr.setRequestHeader("X-CSRF-TOKEN", this.csrf);
		}
		return new Promise(
			function(resolve, reject) {
				xhr.onload = function() {
					if (xhr.readyState === 4) {
						if (xhr.status >= 300) {
							const error = {
								status: xhr.status,
								message: xhr.response,
							};
							if (this.onerror) {
								this.onerror(error);
							}
							reject(error);
							return;
						}
						const contentType = xhr.getResponseHeader("Content-Type");
						if (contentType && contentType.startsWith("application/json")) {
							resolve(JSON.parse(xhr.response));
						} else {
							resolve(xhr.response);
						}
					}
				}.bind(this);
				xhr.onerror = e => {
					reject(e);
                };
                
                var form = new FormData()
                form.append("file", file)
                xhr.send(form);
			}.bind(this),
		);
	}
}