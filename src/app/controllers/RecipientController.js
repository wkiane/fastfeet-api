import Recipient from '../models/Recipient';

class RecpientController {
  async store(req, res) {
    const {
      street,
      number,
      address_complement,
      state,
      city,
      zip_code,
    } = await Recipient.create(req.body);

    return res.json({
      street,
      number,
      address_complement,
      state,
      city,
      zip_code,
    });
  }
}

export default new RecpientController();
