const cloneDeep = <T extends Array<T> | any>(data: T): T => {
	if (Array.isArray(data)) {
		return data.map(item => cloneDeep(item)) as T;
	}
	const obj: T = {} as T;
	for (let key in data) {
		if (typeof data[key] === 'object' && data[key] !== null) {
			obj[key] = cloneDeep(data[key]);
		} else {
			obj[key] = data[key];
		}
	}
	return obj;
};

export default cloneDeep;
