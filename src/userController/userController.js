const userSchema = require('../Schema/userSchema');
// const bcrypt = require("bcrypt"); 
const saltRounds = 10;

exports.insert = async (req, res) => {
    try {

        console.log(req.body);
        const projectData = await userSchema.create(req.body)
        res.json({ message: "projectuser added successfully", data: projectData });
    } catch (err) {
        res.status(500).json(err.message)
    }
};

exports.update = async (req, res) => {
    try {
        const projectData = await userSchema.findByIdAndUpdate(req.params.id, { $set: req.body },
            { new: true });

        res.json({ data: projectData });
    } catch (err) {
        res.status(500).json(err)
    }
};
exports.delete = async (req, res) => {
    const projectData = await userSchema.findByIdAndDelete(req.params.id);
    try {
        if (!projectData) {
            res.status(400).json({ message: "Data not found" })
        }
        else {
            res.status(200).json({ message: "Data deleted Successfully" })
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getByCommId = async (req, res) => {
    try {
        const commID = await userSchema.findById(req.params.id);
        res.json(commID);
    } catch (err) {
        console.log(err);
    }
}
exports.getAll = async (req,res) =>{
    try{
        const records = await userSchema.find();
        res.json(records);
    }catch(err){
        console.log(err);
    }
}