import Courier from '../models/Courier';

class CourierController {
  async store(req, res) {
    const { id, name, email } = await Courier.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new CourierController();
