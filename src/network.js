import axios from "axios";
// import { responseErrorHandeler } from "@helpers/responseErrorHandeler";
export const baseUrl = "https://jsonplaceholder.typicode.com/users";


export function getResource(path, onSuccess, onFail) {
	let requestData = {
		method: "get",
		url: baseUrl + path,
	};

	axios(requestData)
		.then((res) => {
			onSuccess(res.data);
		})
		.catch((fail) => {
			onFail(fail.response);
		});
}

export function postResource(
	path,
	data,
	onSuccess,
	onFail,
) {
	let requestData = {
		method: "post",
		url: baseUrl + path,
		data,
	};


	axios(requestData)
		.then((res) => {
			onSuccess(res.data);
		})
		.catch((fail) => {
			onFail(fail.response);
		});
}


