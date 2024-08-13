import Meets from '../model/meet.js';

export const getMeetsController = async () => {
	const meetsDb = await Meets.findAll();

	const newProject = meetsDb.map((meet) => {
		return {
			id: meet.id,
			date: meet.date,
			hour: meet.hour,
			phoneNumber: meet.phoneNumber,
			description: meet.description,
			username: meet.username,
			isActive: meet.isActive,
		};
	});
	return newProject;
};
