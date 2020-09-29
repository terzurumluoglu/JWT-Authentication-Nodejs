exports.hello = (req, res) => {
    res.status(200).send({message : 'Hello World!'});
}