import { getMeetsController } from '../controllers/getMeetsController.js';

export const handlerGetMeets = async (req, res) => {
	try {
		const response = await getMeetsController();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};
