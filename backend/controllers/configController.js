const Configuration = require("../models/Configuration");

const getConfiguration = async (req, res) => {
    try {
        const config = await Configuration.findOne({
            configurationId: req.params.id,
        });
        if (!config) return res.status(404).json({ message: "Not found" });
        res.json(config.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateRemark = async (req, res) => {
    try {
        await Configuration.findOneAndUpdate(
            { configurationId: req.params.id },
            { remark: req.body.remark }
        );
        res.json({ message: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getConfiguration, updateRemark };
